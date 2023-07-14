import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PracticeCss from '../bootpractice/Practice.css';


function Main(props) {
  return(
    <Container className={"mt-5"}>
      <Row>
        <Col sm={4}>
          <h2>About Me</h2>
          <h5>Photo of me:</h5>
          <div className={"fakeimg"}>Fake Image</div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          <h3 className={"mt-4"}>Some Links</h3>
          <p>Lorem ipsum dolor sit ame.</p>
        </Col>
        <Col sm={8}>

        </Col>
      </Row>
    </Container>
  )
}

export default Main;