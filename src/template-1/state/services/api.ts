import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createCryptoElement } from '../../components/crypto-component-functions';
import { CryptoCoinDataResult } from '../../components/crypto-component-interfaces';

const baseQuery = fetchBaseQuery({
  baseUrl: `https://data.messari.io/api/v1`,
  prepareHeaders: (headers) => {
    // header authorization
  },
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  tagTypes: ['Crypto'],
  endpoints: (builder) => ({
    cryptoList: builder.query({
      query: () => `/assets/btc/metrics`,
      transformResponse: (result: CryptoCoinDataResult) => {
        return createCryptoElement(result);
      },
      providesTags: ['Crypto'],
    }),
  }),
});

export const { useCryptoListQuery } = api;
