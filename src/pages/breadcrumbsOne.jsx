import React from "react";

//navbar import
import Navbar3 from "../components/navbar3";

import menuItems from "../components/api/menuitems";

function BreadcrumbsOne() {
  return (
    <div>
      <Navbar3 />
      <h1>Hey</h1>
      <menuItems />
    </div>
  );
}

export default BreadcrumbsOne;
