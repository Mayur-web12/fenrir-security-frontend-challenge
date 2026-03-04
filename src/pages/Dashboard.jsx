import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import ScansTable from "../components/ScansTable";
import "../styles/global.css";
import { FiHome, FiRefreshCw } from "react-icons/fi";
function Dashboard() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">
        <Header />
        <div className="header-info">
          <div className="info-item">
            <span className="label">Org:</span>
            <span className="value">Project X</span>
          </div>

          <div className="divider-vertical"></div>

          <div className="info-item">
            <span className="label">Owner:</span>
            <span className="value">Nammagiri</span>
          </div>

          <div className="divider-vertical"></div>

          <div className="info-item">
            <span className="label">Total Scans:</span>
            <span className="value">100</span>
          </div>

          <div className="divider-vertical"></div>

          <div className="info-item">
            <span className="label">Scheduled:</span>
            <span className="value">1000</span>
          </div>

          <div className="divider-vertical"></div>

          <div className="info-item">
            <span className="label">Rescans:</span>
            <span className="value">100</span>
          </div>

          <div className="divider-vertical"></div>

          <div className="info-item">
            <span className="label">Failed Scans:</span>
            <span className="value">100</span>
          </div>

          <div className="refresh">
            <FiRefreshCw size={16} />
            <span>10 mins ago</span>
          </div>

        </div>
        <div className="stats-section">
          <StatsCard title="Critical" count={86} trend="2%" color="red" direction="up" />
          <StatsCard title="High" count={16} trend="0.9%" color="orange" direction="up" />
          <StatsCard title="Medium" count={26} trend="0.9%" color="yellow" direction="down" />
          <StatsCard title="Low" count={16} trend="0.9%" color="green" direction="up" />
        </div>

        <ScansTable />

      </div>
    </div>
  );
}

export default Dashboard;