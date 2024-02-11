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
    const response = await axios.post(
      process.env.NEXT_PUBLIC_CLIENT_API_URL + authUrl.postRefresh(),
      {},
      { withCredentials: true }
    );
    try {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem(
        'expiresAt',
        new Date(response.data.expiresAt).toString()
      );
      accessToken = response.data.accessToken;
      expiresAt = new Date(response.data.expiresAt).toString();
      config.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
    } catch (error: any) {
      if (
        error.response &&
        error.response.status === 401 &&
        error.config ===
          process.env.NEXT_PUBLIC_CLIENT_API_URL + authUrl.postRefresh()
      ) {
        await axios.post(
          process.env.NEXT_PUBLIC_CLIENT_API_URL + authUrl.postLogout(),
          {},
          { withCredentials: true }
        );
        window.location.href = '/auth/signin';
      }
    }
    isRefreshed = false;
  }

  return config;
});

API.interceptors.response.use(
  async (config) => await config,
  async (error) => {
    if (error.response && error.response.status === 500) {
      window.location.href = '/error';
    }

    if (error.response && error.response.status === 504) {
      window.location.href = '/504';
    }
  }
);
