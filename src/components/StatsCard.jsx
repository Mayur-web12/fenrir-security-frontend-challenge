import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import { IoWarningOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { IoBanOutline } from "react-icons/io5";
import { PiWarningCircleLight } from "react-icons/pi";

function StatsCard({ title, count, trend, color, direction }) {

  const getIcon = () => {
    switch (title) {
      case "Critical":
        return <IoBanOutline size={18} />;
      case "High":
        return <IoWarningOutline size={18} />;
      case "Medium":
        return <IoWarningOutline size={18} />;
      case "Low":
        return <PiWarningCircleLight size={18} />;
      default:
        return null;
    }
  };

  const isUp = direction === "up";

  return (
    <div className="stats-card">
      
      <div className="stats-header">
        <h4>{title} Severity</h4>
        <div className={`stats-icon ${color}`}>
          {getIcon()}
        </div>
      </div>

      <div className="state-main">
        <h2 className="stats-count">{count}</h2>

        <p className={`trend ${isUp ? "up" : "down"}`}>
          {isUp ? <FiArrowUp size={14} /> : <FiArrowDown size={14} />}
          {trend} {isUp ? "increase" : "decrease"} than yesterday
        </p>
      </div>
    </div>
  );
}

export default StatsCard;