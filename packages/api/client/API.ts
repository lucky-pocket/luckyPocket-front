import axios, { InternalAxiosRequestConfig } from 'axios';
import { authUrl } from './src';

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CLIENT_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const cookie = document.cookie;
  const tokenStartIndex =
    cookie.indexOf('accessToken=') + 'accessToken='.length;
  const tokenEndIndex = cookie.indexOf(';');
  const accessToken = cookie.substring(tokenStartIndex, tokenEndIndex);

  if (!accessToken) return config;

  config.headers['Authorization'] = accessToken
    ? `Bearer ${accessToken}`
    : undefined;

  return config;
});
