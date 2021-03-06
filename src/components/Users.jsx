import React from 'react'
import { Table } from "react-bootstrap"
import Sidebar from "./Sidebar"

function Users() {
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
            <p style={{margin:"auto 2rem"}}>Users</p>
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
          <form>
            <input type="text" placeholder="Search By First Name, Last Name, Email and Phone Number"  className="form1"/>
          </form>
          <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Summary</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>
          <div>
              <p><strong>Name: </strong>Nilesh Yadav</p>
              <p><strong>Role: </strong>superadmin</p>
              <p><strong>Registerd: </strong>3 days ago</p>
              <p><strong>Email: </strong>abc@gmail.com</p>
          </div>
      </td>
      
      <td>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
      </td>
    </tr>
  </tbody>
</Table>
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

export default Users
