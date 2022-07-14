import { render } from "@testing-library/react";
import React from "react";

function NavBar() {
  return(
  <nav>
    <a href="#home">Home </a>
    <a href="#about">About</a>
    </nav>
  );
  //return <nav>NavBar</nav>;
}

export default NavBar;
