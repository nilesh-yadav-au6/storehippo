import React from 'react'
import Sidebar from "./Sidebar"

function Reports() {
    return (
        <>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div
            style={{ display: "flex", flexDirection: "column", width: "100Vw" }}
          >
            <div className="main-dash">
              <p>Report/Views</p>
              <div>
              <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>   
              </div>  
            </div>
          </div>
        </div>
      </>
    )
}

export default Reports
