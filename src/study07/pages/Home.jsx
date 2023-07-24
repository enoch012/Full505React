import React from 'react';
import {Link} from "react-router-dom";

function Home(props) {

  return (
    <div>
      <h1 className={'h1'}>Home Page</h1>
      <p>The First Page to See</p>
      
      <Link to={'about'}>About Page</Link>
    </div>
  );
}

export default Home;