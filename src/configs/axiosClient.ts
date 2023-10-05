import type {
  AxiosError,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_APP_BACKEND_URL as string;

export const defaultConfigAxios: CreateAxiosDefaults = {
  timeout: 30000,
  baseURL: `${baseUrl}`,
  headers: {
    common: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
};

export const axiosClient = axios.create(defaultConfigAxios);

// export const refreshToken = async (error: AxiosError) => {
//   const { logOut, getRefreshToken, accessToken, refreshToken } =
//     useAuth.getState();

//   if (!refreshToken) {
//     logOut();
//     return;
//   }
//   if (error.config?.url?.includes('refresh')) {
//     logOut();
//     return;
//   }

//   // set auto refresh Token
//   try {
//     let newConfig = error.config ?? {};
//     await getRefreshToken();
//     newConfig = {
//       ...newConfig,
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     };
//     return axios(newConfig);
//   } catch (error) {
//     logOut();
//     return;
//   }
// };

export const onRequestSuccess = async (config: InternalAxiosRequestConfig) => {
  // const { accessToken } = useAuth.getState();
  config.headers = config.headers ?? {};
  // if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;
  return config;
};

export const onRequestError = (
  error: AxiosError | Error
): Promise<AxiosError> => {
  return Promise.reject(error);
};

export const onResponseSuccess = (response: AxiosResponse) => {
  return response.data;
};

export const onResponseError = async (error: AxiosError) => {
  if (error.response?.status !== 401) {
    const errMessage = error.response?.data || error?.response || error;
    return Promise.reject(errMessage);
  }
  // return await refreshToken(error);
  return error;
};

axiosClient.interceptors.request.use(onRequestSuccess, onRequestError);
axiosClient.interceptors.response.use(onResponseSuccess, onResponseError);
