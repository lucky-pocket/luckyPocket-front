import axios, { InternalAxiosRequestConfig } from 'axios';
import { authUrl } from './src';

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CLIENT_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

API.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const cookie = document.cookie.split(';');

  let accessToken = cookie
    .find((item) => item.includes('accessToken'))
    ?.split('=')[1];
  let expiresAt = cookie
    .find((item) => item.includes('expiresAt'))
    ?.split('=')[1];

  if (!accessToken || !expiresAt) return config;

  if (
    new Date() > new Date('Sun Feb 11 2024 00:19:30 GMT+0900 (한국 표준시)')
  ) {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_CLIENT_API_URL + authUrl.postRefresh()
    );
    try {
      document.cookie = `accessToken=${response.data.accessToken}; path='/';`;
      document.cookie = `expiresAt=${new Date(
        response.data.expiresAt
      )}; path='/';`;
      accessToken = response.data.accessToken;
    } catch (e) {
      console.log(e);
    }
  }

  config.headers['Authorization'] = accessToken
    ? `Bearer ${accessToken}`
    : undefined;

  return config;
});

API.interceptors.response.use(
  async (config) => await config,
  async (error) => {
    const cookie = document.cookie.split(';');

    if (error.response && error.response.status === 500) {
      window.location.href = '/error';
    }

    if (error.response && error.response.status === 504) {
      window.location.href = '/504';
    }

    if (error.response && error.response.status === 401) {
      await API.post(authUrl.postLogout());
      window.location.href = '/auth/signin';
    }
  }
);
