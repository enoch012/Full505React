import React from 'react';
import {Link} from "react-router-dom";

function About(props) {

  return (
    <div>
      <h1>About Page</h1>
      <p>Move to React Router</p>
      <Link to={'/pages'}>Move to Home</Link>
    </div>
  )
}

export default About;