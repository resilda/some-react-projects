import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FetchDataFromAPI() {
  const [data, setData] = useState<Array<{ id: number; name: string; email: string }>>([]);

  const fetchData = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data.length < 0 ? (
        <h2>Loading...</h2>
      ) : (
        data.map((item) => {
          return (
            <div key={item.id}>
              <li>Id: {item.id}</li>
              <li>Name: {item.name}</li>
              <li>Email: {item.email}</li>
            </div>
          );
        })
      )}
    </>
  );
}
