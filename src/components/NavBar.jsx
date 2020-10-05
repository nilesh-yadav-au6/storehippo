import React from "react";
import storehippo from "../images/hippo.jpg";
import notification from "../images/notification.png"
import profileuser from "../images/profile-user.png"
import right from "../images/right.png"
import question from "../images/question.png"
import "../styles/NavBar.css";
import { Navbar, Nav} from "react-bootstrap";

function NavBar() {
  return (
    <div >
        
      <Navbar className="navbar" expand="lg">
        <img className="logoimage" src={storehippo} alt="logoinmage" />
        <form className="form">
          <input type="text" placeholder="Entre to Search"  />
        </form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link  style={{color:"black"}} href="#home"><small  style={{color:"black" , marginRight:"1rem"}} href="#home">Feedback</small></Nav.Link>
            <Nav.Link style={{color:"black"}} href="#link"><img src={notification} alt="logoinmage" /></Nav.Link>
            <Nav.Link style={{color:"black"}} href="#home"><small style={{color:"black" , marginRight:"1rem"}} href="#home">Design Theme</small></Nav.Link>
            <Nav.Link style={{color:"black"}} href="#link"><img src={right} alt="logoinmage" /></Nav.Link>
            <Nav.Link style={{color:"black"}} href="#home"><img src={question} alt="logoinmage" /></Nav.Link>
            <Nav.Link style={{color:"black"}} href="#link"><img src={profileuser} alt="logoinmage" /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
