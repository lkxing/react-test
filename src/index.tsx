import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("container");
const root = createRoot(container);
const Index = () => {
  return (
    <div>
      测试<App data={[]}></App>
    </div>
  );
};

root.render(<Index></Index>);
