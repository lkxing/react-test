import React, { useEffect, useRef } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import Home from "./Home";
import Home1 from "./Home1";
import HomePage from "./HomePage";
import List from "./List";

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
      <BrowserRouter>
        <div>
          <Link to="/home">home</Link>
          <Link to="/home1">home1</Link>
          <Link to="/home1/12">list</Link>
          <Link to="/home1/14">form</Link>
        </div>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/home1" element={<Home1></Home1>}>
            <Route
              path="/home1/homepage"
              element={<HomePage></HomePage>}
            ></Route>
            <Route element={<List />} path="/home1/:id"></Route>
          </Route>
        </Routes>
        <Outlet></Outlet>
      </BrowserRouter>
    </div>
  );
};

export default App;
