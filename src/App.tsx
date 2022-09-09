import React, { useEffect, useRef } from "react";

const App = ({ data }) => {
  const isRender = useRef(true);
  const fn = () => {
    console.log("执行fn");
  };

  useEffect(() => {
    console.log("useEffect");
  }, []);

  useEffect(() => {
    if (isRender.current) {
      fn();
    }
    console.log(123);
  }, [data]);

  return <div>app</div>;
};

export default App;
