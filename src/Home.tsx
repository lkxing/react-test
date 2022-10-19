import React, { memo } from "react";
import { useNavigate } from "react-router";

const Home = memo((props) => {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        22222222
      </button>
    </div>
  );
});

export default Home;
