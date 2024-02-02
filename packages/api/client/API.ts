import axios from 'axios';

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CLIENT_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
});
