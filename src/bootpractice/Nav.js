import React from "react";
import Container from "react-bootstrap/Container";

function Nav(props) {
  return (
    <Container fluid className={"p-0"}>
      <nav className={"navbar navbar-expand-sm bg-dark navbar-dark p-2 px-3"}>
        <ul className={'navbar-nav'}>
          <li className={"nav-item"}>
            <a href="/src/bootpractice/practice.html" className={"nav-link active"}>Active</a>
          </li>
          <li className={"nav-item"}>
            <a href="#" className={"nav-link"}>Link</a>
          </li>
          <li className={"nav-item"}>
            <a href="#" className={"nav-link"}>Link</a>
          </li>
          <li className={"nav-item"}>
            <a href="#" className={"nav-link disabled"}>Disabled</a>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Nav;