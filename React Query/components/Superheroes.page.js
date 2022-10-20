import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function SuperHeroesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');


    useEffect(() => {
        axios.get('http://localhost:4000/superheroes').then((res) => {
            setData(res.data);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setIsLoading(false);
        })
    }, []);

    if (isLoading) {
       return <h2>로딩중...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <>
          <h2>Super Heroes Page</h2>
          {data.map((hero) => {
            return <div key={hero.name}>{hero.alterEgo}</div>;
          })}
        </>
    )
    
}