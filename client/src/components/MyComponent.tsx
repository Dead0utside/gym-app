import fetch from 'node-fetch';
import { useState, useEffect } from 'react';

const GET_URL = "http://localhost:8080/api/v1/hello/first";
interface HelloObject {
  id: number;
  message: string;
}

function MyComponent() {
  const [hello, setHello] = useState("");

  // useEffect(() => {
  //   const fetchHello = async () => {
  //     const response = await fetch(`${GET_URL}`);
  //     const responseJson = (await response.json()) as HelloObject;

  //     console.log(responseJson.message);

  //     setHello(responseJson.message);
  //   }

  //   fetchHello();
  // }, []);

  useEffect(() => {
    fetch(`${GET_URL}`)
    .then(response => response.json)
    .then(responseJson => console.log(responseJson));
  }, []);

  return (
    <div>{hello}</div>
  )
}

export default MyComponent