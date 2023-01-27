import axios from 'axios';
import { SERVER } from 'config/config.json';

export const getResponse = async (url: any, token: any) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const data = await axios.get(`${SERVER}${url}`, {
      headers: token && {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const postRequest = async (url: any, request: any, token: any) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const data = await axios.post(`${SERVER}${url}`, request, {
      headers: token && {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const modifyRequest = async (url: any, request: any, token: any) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const data = await axios.put(`${SERVER}${url}`, request, {
      headers: token && {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteRequest = async (url: any, token: any) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const data = await axios.delete(`${SERVER}${url}`, {
      headers: token && {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
