import React from 'react';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
function ScanDetails() {
  return (
    <>
      <div className="dashboard-layout">

        <Sidebar />

        <div className="dashboard-content">
          <Header />
          <h1>hello</h1>


        </div>
      </div>
    </>
  )
}

export default ScanDetails;