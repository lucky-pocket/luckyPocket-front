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

  if (new Date() > new Date(expiresAt)) {
    const response = await API.post(
      authUrl.postRefresh(),
      {},
      {
        headers: {
          Cookie: `refreshToken={${
            cookie.find((item) => item.includes('refreshToken'))?.split('=')[1]
          }}`,
        },
      }
    );

    document.cookie = `accessToken=${response.data.accessToken}; path='/';`;
    document.cookie = `expiresAt=${new Date(
      response.data.expiresAt
    )}; path='/';`;
    accessToken = response.data.accessToken;
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
      window.location.href = '/500';
    }

    if (error.response && error.response.status === 504) {
      window.location.href = '/504';
    }

    if (error.response && error.response.status === 401) {
      await API.post(
        authUrl.postLogout(),
        {},
        {
          headers: {
            Cookie: `refreshToken=${
              cookie
                .find((item) => item.includes('refreshToken'))
                ?.split('=')[1]
            }`,
          },
        }
      );
      window.location.href = '/auth/signin';
    }
  }
);
