import React from "react";
import Sidebar from "./Sidebar";
import "../styles/Marketing.css";

function Marketing() {
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
            <p style={{margin:"auto 2rem"}}>Discounts</p>
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
            <p style={{width:"auto"}}>No Records Found</p>
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
  );
}

export default Marketing;
