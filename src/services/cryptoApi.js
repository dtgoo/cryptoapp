import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '1cabe807e1mshba272e5c7eb859ap1f84acjsn6c1c15f6662a'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/exchanges'


  const createRequest = (url) => ({ url, headers: cryptoApiHeaders
  })
  export const cryptoApi = createApi({
      reducerPath: 'cryptoApi',
      baseQuery: fetchBaseQuery({ baseUrl }),
      endpoints : (builder) => ({
          getCryptos: builder.query({
              query: () => createRequest('/exchanges')
          })
      })
  })

//   var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       limit: '50',
//       offset: '0',
//       orderBy: '24hVolume',
//       orderDirection: 'desc'
//     },
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '1cabe807e1mshba272e5c7eb859ap1f84acjsn6c1c15f6662a'
//     }
//   };