import { useState, useEffect } from 'react';

const GET_URL = "http://localhost:8080/api/v1/hello/first";

function MyComponent() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    const fetchHello = async () => {
      const response = await fetch(`${GET_URL}`);
      const responseJson = (await response.json());

      setHello(responseJson.message);
    }

    fetchHello();
  }, []);

  // useEffect(() => {
  //   fetch(`${GET_URL}`)
  //   .then(response => response.json())
  //   .then(responseJson => setHello(responseJson.message));
  // }, []);

  return (
    <div>{hello}</div>
  )
}

export default MyComponent