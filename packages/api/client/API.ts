import axios, { InternalAxiosRequestConfig } from 'axios';
import { authUrl } from './src';

let isRefreshing = false;
let refreshPromise: Promise<any> | null = null;

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CLIENT_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const waitRefreshEnd = () =>
  new Promise<void>((resolve) => {
    if (isRefreshing === false) {
      resolve();
      return;
    }
    setTimeout(() => waitRefreshEnd().then(resolve), 100); // wait for refresh to complete
  });

API.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem('accessToken');

    config.headers['Authorization'] = accessToken
      ? `Bearer ${accessToken}`
      : undefined;

    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => {
    if (response.config.url === authUrl.postRefresh()) {
      isRefreshing = false;
    }

    if (response.status >= 200 && response.status <= 300) {
      return response;
    }

    return Promise.reject(response);
  },
  async (error) => {
    if (error.config.url === authUrl.postRefresh()) {
      isRefreshing = false;
      return Promise.resolve(error);
    }

    if (error.response.status === 401) {
      if (isRefreshing) {
        await waitRefreshEnd();

        return API(error.config);
      }

      // token refresh
      isRefreshing = true;

      refreshPromise = API.post(authUrl.postRefresh())
        .then((response) => {
          localStorage.setItem('accessToken', response.data.accessToken);
          localStorage.setItem(
            'expiresAt',
            new Date(response.data.expiresAt).toString()
          );

          error.config.headers[
            'Authorization'
          ] = `Bearer ${response.data.accessToken}`;

          isRefreshing = false;

          return API(error.config);
        })
        .catch((error) => {
          console.error('Error occurred during token refresh:', error);

          isRefreshing = false;

          throw error;
        });

      return refreshPromise;
    }

    if (error.response && error.response.status === 500) {
      window.location.href = '/error';
    }

    if (error.response && error.response.status === 504) {
      window.location.href = '/504';
    }
    return Promise.reject(error);
  }
);
