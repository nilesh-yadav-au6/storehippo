import React from 'react'
import Sidebar from "./Sidebar"
import "../styles/Products.css"
import {
    Button,
    Table
  } from "react-bootstrap";
import { shirt } from "../images/s.jpg"

function Products() {
    return (
        <>
      <div className="product-main">
        <Sidebar />
        <div
          style={{ display: "flex", flexDirection: "column", width: "100Vw" }}
        >
          <div className="main-dash">
            <p>Products</p>
            <div>
            <button className="button">Add New</button>
            <button className="button">Help</button>    
            </div>  
          </div>
          <div className="product-funtion">
          <Button variant="light">PUBLISHED</Button>
          <Button variant="light">UNPUBLISHED</Button>
          <Button variant="light">PENDING APROVAL</Button>
          <Button variant="light">REJECTED</Button>
          </div>
          <form>
            <input type="text" placeholder="Search By Name ,Category, Brand, Collections"  className="form1"/>
          </form>
          <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Image</th>
      <th>Price</th>
      <th>Publish</th>
      <th>Sellers</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Prodcut 1</td>
      <td><img src={shirt} alt="shirt" /></td>
      <td>1500</td>
      <td>
        <label class="switch">
    <input type="checkbox" checked />
    <span class="slider round"></span>
    </label>
      </td>
      <td>someshop</td>
      <td>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
      </td>
    </tr>
    <tr>
    <td>1</td>
      <td>Prodcut 1</td>
      <td><img src={shirt} alt="shirt" /></td>
      <td>1500</td>
      <td>
        <label class="switch">
    <input type="checkbox" checked />
    <span class="slider round"></span>
    </label>
      </td>
      <td>someshop</td>
      <td>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
      </td>
    </tr>
  </tbody>
</Table>
        </div>
      </div>
    </>
    )
}

export default Products
