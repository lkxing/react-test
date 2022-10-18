import React, { useEffect, useRef } from "react";
import { Routes, Route, Outlet } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import Home from "./Home";
import Home1 from "./Home1";
import HomePage from "./HomePage";

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

  return (
    <div>
      <div>
        <Link to="/home">home</Link>
        <Link to="/home1">home1</Link>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={Home}></Route>
          <Route path="/home1" element={Home1}></Route>
          <Route path="/home/homepage" element={HomePage}></Route>
        </Routes>
      </BrowserRouter>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
