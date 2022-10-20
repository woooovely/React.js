import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes11')
}

export default function RQSuperHeroes() {
    const { isLoading, data, isError, error } = useQuery(
        'super-heroes',
        fetchSuperHeroes,
        { cacheTime: 1000 }
    )

   if(isLoading) {
     return <h2>로딩중...</h2>
   }

   if(isError) {
    return <h2>{error.message}</h2>
   }

   return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })}
    </>
   )
}
