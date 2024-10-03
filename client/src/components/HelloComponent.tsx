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

  return (
    <div>{hello}</div>
  )
}

export default MyComponent