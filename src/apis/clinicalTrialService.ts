import instance from './axiosInstance';
import { GET_SICK_URL } from '../utils/constant/url';

interface InfoSicks {
  sickCd: string;
  sickNm: string;
}

export const getSickData = async (param: string): Promise<InfoSicks[]> => {
  if (param === '') return [];
  if ('caches' in window) {
    const payload = {
      sickNm_like: param,
    };
    const queryStr = new URLSearchParams(payload).toString();
    const cacheStorage = await caches.open(GET_SICK_URL);
    const cachedResponse = await cacheStorage.match(queryStr);

    if (!cachedResponse || !cachedResponse.ok) {
      const config = {
        params: payload,
      };
      const { data } = await instance.get(`/${GET_SICK_URL}`, config);
      const resultData = data.slice(0, 7);
      cacheStorage.put(queryStr, new Response(JSON.stringify(resultData)));
      return resultData;
    }

    const cached = await cachedResponse?.json();
    return cached;
  }

  return [];
};
