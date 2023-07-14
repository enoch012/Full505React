import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from "./Nav";

function Header(props) {
  return(
    <header>
      <Container fluid className={"bg-primary p-5 text-white text-center"}>
        <h1>My First Bootstrap 5 Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </Container>
      <Nav />
    </header>
  )
}

export default Header;