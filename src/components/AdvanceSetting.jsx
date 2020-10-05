import React from 'react'
import Sidebar from "./Sidebar"

function AdvanceSetting() {
    return (
        <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{ display: "flex", flexDirection: "column", width: "100Vw" }}
        >
          <div className="main-dash">
            <p>Metafields</p>
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

export default AdvanceSetting
