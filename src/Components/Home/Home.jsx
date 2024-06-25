import React from 'react'
import Product from '../Product/Product'
import { useGetProductsQuery } from '../redux/UserApi';

const Home = () => {
  const { data,isError,isFetching,isLoading,isSuccess } = useGetProductsQuery({limit: 100});

  
  return (
    <>
    
    
    <Product  data={data?.data?.products} />
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Home