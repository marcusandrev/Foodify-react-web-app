import React from 'react'

//navbar import
import Navbar3 from '../components/navbar3';

import lastPic from '../assets/bc2/Group 2592.png'

function BreadcrumbsTwo() {
  return (
    <div>
      <Navbar3 />
      <div position="relative">
        <img src={lastPic} style={{width: '100%', height:'auto', marginTop: 135}} /> 
    </div>
    
    </div>
  )
}

export default BreadcrumbsTwo;