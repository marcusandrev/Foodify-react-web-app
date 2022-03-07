import React from "react";

//navbar import
import Navbar3 from "../components/navbar3";
import Fruits1 from "../components/fruits1";
import Fruits2 from "../components/fruits2";

import unsplash_7r1HxvVC7AY from "../assets/fruitspage/unsplash_7r1HxvVC7AY.png"

import menuItems from "../components/api/recipe";

function BreadcrumbsOne() {
  return (
    <div>
      <Navbar3 />
      <div position="relative">
        <img src={unsplash_7r1HxvVC7AY} style={{width: '100%', height:'auto', marginTop: 85}} /> 
    </div>
    <Fruits1 />
    <Fruits2 />
    </div>
  );
}

export default BreadcrumbsOne;
