import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const uApi = createApi({
  reducerPath: "uApi",  
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  keepUnusedDataFor:5,
  refetchOnFocus:true,
  refetchOnReconnect:true,
  endpoints: (build) => { 
    return {
    
      getUsers: build.query<any, any>({
        query: () => {
            return {
                url: "",
                
              };
        },
      }),
    };
  },
});

export const { useGetUsersQuery } = uApi;