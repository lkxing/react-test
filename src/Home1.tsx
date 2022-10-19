import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";

const Home1 = memo(() => {
  return (
    <div>
      <div>
        <p>home1</p>
        <Link to="/home1/homepage">home1Page</Link>
        <Outlet></Outlet>
      </div>
    </div>
  );
});

export default Home1;
