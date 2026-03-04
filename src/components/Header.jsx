import React from 'react'
import { SlHome } from "react-icons/sl";


function Header() {
  return (
    <div className="dashboard-header">

      {/* Top Row */}
      <div className="header-top">
        <div className="breadcrumb">
          <span className="bold">Scan</span>
          <span><SlHome /></span>
          <span className="separator">
             /</span>
          <span>Private Assets</span>
          <span className="separator">/</span>
          <span className="active-link">New Scan</span>
        </div>

        <div className="header-actions">
          <button className="btn-outline">
            Export Report
          </button>

          <button className="btn-danger">
            Stop Scan
          </button>
        </div>
      </div>

   
    </div>
  );
}

export default Header;