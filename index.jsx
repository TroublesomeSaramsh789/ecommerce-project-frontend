import React from 'react';
import axios from "axios";
import { useQuery } from '@chakra-ui/react';

const getUser = () => axios.get("https://google.com",{});

const index = () => {

    const { isLoading, isError, data } = useQuery("profile", getUser);

    if (isLoading) return <h2>Lodaing</h2>
    
    if(isError) return <h2>Error Occured</h2>

  return (
    <div>{data.data}</div>
  )
}

export default index