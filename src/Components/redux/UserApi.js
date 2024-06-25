import { api } from "./index"

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    
    getProducts: build.query({
      query: (params) => ({ 
        url: '/products/search', 
        params 
      }),
      providesTags:["Product"]
    }),

    createProduct: build.mutation({
      query: (body)=> ({
        url: "/products/create",
        method: "POST",
        body
      }),
      invalidatesTags: ["Product"]
    }),

    getDetailProducts: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Product"],
    }),

    postSignIn: build.mutation({
      query: (body)=>({
          url: "/auth/sign-in",
          method:"POST",
          body
      }),
      invalidatesTags: ["User"]
  }) 
  }),
 
})

export const {
 
  usePostSignInMutation,
  useGetProductsQuery,
  useCreateProductMutation,
  useGetDetailProductsQuery,
} = productApi