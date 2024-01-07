import { baseApi } from './baseapi';
import { AxiosResponse } from 'axios';

export async function getActivities() {
   try {
      const response: AxiosResponse = await baseApi.get('activities');
      if (response.status === 200) {
         return response.data;
      }
   } catch (error: any) {
      throw new Error(error);
   }
}
