import React from "react";
// import'./Header.css'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
    </>

    // <div  className='header-container'>
    //   <div>
    //     <h1>Team Maker</h1>
    //   </div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <a href="/sing-up">Sing up</a>
    //       </li>
    //       <li>
    //         <a href="/log-in">Log in</a>
    //       </li>
    //       <li>
    //         <a href="/premium">Premium</a>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
  );
};

export default Header;
