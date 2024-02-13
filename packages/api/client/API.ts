import axios, { InternalAxiosRequestConfig } from 'axios';
import { authUrl } from './src';

let isRefreshed = false;

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CLIENT_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

API.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  let accessToken = localStorage.getItem('accessToken');
  let expiresAt = localStorage.getItem('expiresAt');

  if (!accessToken || !expiresAt) return config;

  config.headers['Authorization'] = accessToken
    ? `Bearer ${accessToken}`
    : undefined;

  if (new Date() >= new Date(expiresAt) && !isRefreshed) {
    isRefreshed = true;

    // const { data } = await API.post(
    //   process.env.NEXT_PUBLIC_CLIENT_API_URL + authUrl.postRefresh()
    // );

    // try {
    //   localStorage.setItem('accessToken', data.accessToken);
    //   localStorage.setItem('expiresAt', new Date(data.expiresAt).toString());
    //   accessToken = data.accessToken;
    //   expiresAt = new Date(data.expiresAt).toString();
    //   config.headers['Authorization'] = `Bearer ${data.accessToken}`;
    // } catch (error: any) {
    //   if (
    //     error.response &&
    //     error.response.status === 401 &&
    //     error.config ===
    //       process.env.NEXT_PUBLIC_CLIENT_API_URL + authUrl.postRefresh()
    //   ) {
    //     await API.post(
    //       process.env.NEXT_PUBLIC_CLIENT_API_URL + authUrl.postLogout()
    //     );
    //     window.location.href = '/auth/signin';
    //   }
    // }
    isRefreshed = false;
  }

  return config;
});

API.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status <= 300) {
      return response.data;
    }

    return Promise.reject(response.data);
  },
  async (error) => {
    console.log(error.response.status);
    if (error.response.status === 401) {
      try {
        const { data } = await API.post(
          process.env.NEXT_PUBLIC_CLIENT_API_URL + authUrl.postRefresh()
        );

        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('expiresAt', new Date(data.expiresAt).toString());
        error.config.headers['Authorization'] = `Bearer ${data.accessToken}`;

        return API(error.config);
      } catch (error) {
        console.error('Error occurred during patch call:', error);
      }
    }

    if (
      error.config.url.includes(authUrl.postRefresh()) &&
      error.response.status === 401
    ) {
      location.replace('/auth/signin');
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
