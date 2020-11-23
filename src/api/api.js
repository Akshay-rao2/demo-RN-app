import axios from 'axios';
import config from '../utils/config';
import {
  httpMethod,
} from '../utils/constants';

export default async ({
  method,
  baseUrl = config.SERVER_NATIVE_URL,
  urlEndpoint,
  data,
  header,
} = {}) => {
  const isPost = method === httpMethod.POST;
  const axiosConfig = {
    method,
    baseURL: baseUrl,
    url: urlEndpoint,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...header,
    },
    timeout: 45000,
    params: isPost ? undefined : data,
    data: isPost ? data : undefined,
  };

  try {
    const res = await axios(axiosConfig);
    return res;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(`API ${method} ${urlEndpoint} request failed:`, error);
    throw error;
  }
};
