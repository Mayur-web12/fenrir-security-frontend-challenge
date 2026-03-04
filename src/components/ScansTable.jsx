import React from 'react'

import { FiSearch, FiFilter, FiColumns, FiPlus } from "react-icons/fi";
import { scans } from "../data/mockData";
import StatusBadge from "./StatusBadge";
import ProgressBar from "./ProgressBar";

function ScansTable() {
  return (
    <div className="table-card">

      {/* Search Row */}
      <div className="table-top">

        <div className="search-box">
          <FiSearch size={16} />
          <input
            type="text"
            placeholder="Search scans by name or type..."
          />
        </div>

        <div className="table-actions">
          <button className="btn-light">
            <FiFilter size={16} />
            Filter
          </button>

          <button className="btn-light">
            <FiColumns size={16} />
            Column
          </button>

          <button className="btn-primary">
            <FiPlus size={16} />
            New scan
          </button>
        </div>
      </div>

      {/* Table */}
      
      <div className='table-wrapper'>
<table className="scans-table">
        <thead>
          <tr>
            <th>Scan Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Vulnerability</th>
            <th>Last Scan</th>
          </tr>
        </thead>

        <tbody>
          {scans.map((scan) => (
            <tr key={scan.id}>
              <td>{scan.name}</td>
              <td>{scan.type}</td>
              <td>
                <StatusBadge status={scan.status} />
              </td>
              <td>
                <ProgressBar
                  progress={scan.progress}
                  status={scan.status}
                />
              </td>
              <td className="vuln-cell">
                {scan.vulnerabilities.critical > 0 && (
                  <span className="chip red">{scan.vulnerabilities.critical}</span>
                )}
                {scan.vulnerabilities.high > 0 && (
                  <span className="chip orange">{scan.vulnerabilities.high}</span>
                )}
                {scan.vulnerabilities.medium > 0 && (
                  <span className="chip yellow">{scan.vulnerabilities.medium}</span>
                )}
                {scan.vulnerabilities.low > 0 && (
                  <span className="chip green">{scan.vulnerabilities.low}</span>
                )}
              </td>
              <td className="last-scan">{scan.lastScan}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      

    </div>
  );
}

export default ScansTable;