import React from 'react'
import Sidebar from "../components/Sidebar"

function Logs() {
    return (
        <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{ display: "flex", flexDirection: "column", width: "100Vw" }}
        >
          <div className="main-dash">
            <p>Email Logs</p>
            <div>
            <button className="button">Add New</button>
            <button className="button">Help</button>    
            </div>  
          </div>
        </div>
      </div>
    </>
    )
}

export default Logs
