import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      ></button>
      <p>{count}</p>
    </>
  );
};

export default Home;
