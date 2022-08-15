import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiCall = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setApi(res.data));

    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((res) => res.json())
    //   .then((json) => setApi(json));
  }, []);

  console.log(api);

  return (
    <>
      {api.map((api, key) => (
        <>
          <h6>{api.userId}</h6>
          <p>{api.title}</p>
        </>
      ))}
    </>
  );
};

export default ApiCall;
