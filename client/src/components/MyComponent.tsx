import { useState, useEffect } from 'react';

const GET_URL = "http://localhost:8080/api/v1/hello/first";
interface HelloObject {
  id: number;
  message: string;
}

function MyComponent() {
  const [hello, setHello] = useState("j");

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
    console.log(GET_URL);
    fetch(`${GET_URL}`)
    // .then(response => response.json)
    .then(responseJson => console.log(responseJson));
    setHello("hello");
  }, []);

  return (
    <div>{hello}</div>
  )
}

export default MyComponent