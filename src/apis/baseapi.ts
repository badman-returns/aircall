import axios, { AxiosInstance } from 'axios';

export const baseApi: AxiosInstance = axios.create({
   baseURL: 'https://cerulean-marlin-wig.cyclic.app/',
});
