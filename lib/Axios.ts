import axios from 'axios';
import SERVER from '../config/config.json';
import { getToken } from './Storage';

export const client = axios.create({
  baseURL: SERVER.SERVER,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const TokenClient = axios.create({
  baseURL: SERVER.SERVER,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
});
