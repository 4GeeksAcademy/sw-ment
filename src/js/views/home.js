import React from "react";
import "../../styles/home.css";
import Characters from "./Characters";
import Planets from "./Planets";

export const Home = () => (
  <div className="text-center mt-5">
    <Characters />
    <Planets />
  </div>
);
