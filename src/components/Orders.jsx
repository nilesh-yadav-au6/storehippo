import React from 'react'
import Sidebar from "../components/Sidebar"
import {Button } from "react-bootstrap"

function Orders() {
    return (
        <>
      <div className="marketing-main">
        <Sidebar />
        <div className="mark-div">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              borderBottom:"1px solid lightgray"
            }}
          >
            <p style={{margin:"auto 2rem"}}>Orders</p>
            <div>
              <div>
                <button className="button-mark">Add New</button>
                <button className="button-mark">Help</button>
                <button>
                  <div className="dots"></div>
                  <div className="dots"></div>
                  <div className="dots"></div>
                </button>
              </div>
            </div>
          </div>
          <div className="product-funtion">
          <Button variant="light">OPEN</Button>
          <Button variant="light">CANCLED</Button>
          <Button variant="light">CLOSED</Button>
          <Button variant="light">ALL</Button>
          </div>
          <p>No Records Found</p>
        </div>
        <div className="mark-div">
        <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              borderBottom:"1px solid lightgray"
            }}
          >
            <p style={{margin:"1rem 2rem"}}>No Records Selected</p>
          </div>
            <p style={{width:"auto"}}>Please Select a Record</p>
        </div>
      </div>
    </>
    )
}

export default Orders
