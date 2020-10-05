import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Form,
  Carousel,
} from "react-bootstrap";
import "../styles/Dashboard.css";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{ display: "flex", flexDirection: "column", width: "100Vw" }}
        >
          <div className="main-dash">
            <p>Dashboard</p>
            <div class="dropdown">
              <button class="dropbtn">Last 30 days</button>
              <div class="dropdown-content">
                <p>Link 1</p>
                <p>Link 2</p>
                <p>Link 3</p>
              </div>
            </div>
          </div>
          <Container className="container">
            <Row>
              <Col sm={6}>
                <ListGroup defaultActiveKey="#link1">
                  <div action variant="secondary" style={{height:"3rem" , backgroundColor:"lightgrey"}}>
                    <p style={{margin:"1rem 2rem"}}>To Do List</p>
                  </div>
                  <ListGroup.Item action href="#link2" disabled>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "black",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <span>
                          <Form.Check aria-label="option 1" />
                        </span>
                        <small>Make store live</small>
                      </div>
                      <div style={{ display: "flex" }}>
                        <small>Add Products</small>
                        <span>
                          <Form.Check aria-label="option 1" />
                        </span>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2" disabled>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "black",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <span>
                          <Form.Check aria-label="option 1" />
                        </span>
                        <small>Add Store Detaills</small>
                      </div>
                      <div style={{ display: "flex" }}>
                        <small>Setup Payment Getway</small>
                        <span>
                          <Form.Check aria-label="option 1" />
                        </span>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2" disabled>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "black",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <span>
                          <Form.Check aria-label="option 1" />
                        </span>
                        <small>Setup language</small>
                      </div>
                      <div style={{ display: "flex" }}>
                        <small>Set shiping charge</small>
                        <span>
                          <Form.Check aria-label="option 1" />
                        </span>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2" disabled>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "black",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <span>
                          <Form.Check aria-label="option 1" />
                        </span>
                        <small>Setup discount</small>
                      </div>
                      <div style={{ display: "flex" }}>
                        <small>Setup Taxes</small>
                        <span>
                          <Form.Check aria-label="option 1" />
                        </span>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2" disabled>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "black",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <span>
                          <Form.Check aria-label="option 1" />
                        </span>
                        <small>Set up static page </small>
                      </div>
                      <div style={{ display: "flex" }}>
                        <small>Set up Currencies</small>
                        <span>
                          <Form.Check aria-label="option 1" />
                        </span>
                      </div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={6}>
                <ListGroup defaultActiveKey="#link1">
                <div action variant="secondary" style={{height:"3rem" , backgroundColor:"lightgrey"}}>
                    <p style={{margin:"1rem 2rem"}}>Statistics</p>
                  </div>
                  <Carousel >
                    <Carousel.Item className="car-item" style={{color:"green"}}>
                     <span>BY STATUS</span>
                     <span>BY FINANCIAL STATUS</span>
                     <span>BY SHIPPING STATUS</span>
                    
                    </Carousel.Item>
                    <Carousel.Item className="car-item">
                     <span>BY DEVICE</span>
                     <span>BY PAYMENT METHOD</span>
                    </Carousel.Item>
                  </Carousel>
                </ListGroup>
              </Col>
            </Row>
            <Row>
              <Col sm>
              <ListGroup defaultActiveKey="#link1">
              <div action variant="secondary" style={{height:"3rem" , backgroundColor:"lightgrey"}}>
                    <p style={{margin:"1rem 2rem"}}>Order Summary</p>
                  </div>
                  <ListGroup.Item action style={{display:"flex" ,flexWrap:"wrap" , justifyContent:"space-around"}}>
                  <div class="box" >
                      <p style={{textAlign:"center" ,marginTop:"3rem"}}>Products</p>
                      <h1 style={{textAlign:"center"}}>7</h1>
                  </div>
                  <div class="box">
                      <p style={{textAlign:"center" ,marginTop:"3rem"}}>Users</p>
                      <h1 style={{textAlign:"center"}}>7</h1>
                  </div>
                  <div class="box">
                      <p style={{textAlign:"center" ,marginTop:"3rem"}}>Orders</p>
                      <h1 style={{textAlign:"center"}}>7</h1>
                  </div>
                  <div class="box">
                      <p style={{textAlign:"center" ,marginTop:"3rem"}}>Sellers</p>
                      <h1 style={{textAlign:"center"}}>7</h1>
                  </div>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
