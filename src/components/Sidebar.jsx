import { FiGrid,  FiCalendar,  FiBell,  FiSettings,} from "react-icons/fi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { LuFileChartColumnIncreasing } from "react-icons/lu";
import { RiErrorWarningLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      

      <div className="nav-top">
        <div className="logo">
        <div className="logo-dot"></div>
        <h2>aps</h2>
      </div>

        <ul>
          <li className="active">
            <Link to="/dashboard"><FiGrid size={16} />
            Dashboard</Link>
          </li>
          <li>
            
             <Link to="#"><HiOutlineClipboardCheck size={16}/>
            Projects</Link>
          </li>
          <li>
            <Link to="/scandetails"><LuFileChartColumnIncreasing size={16} />
            Scans</Link>
          </li>
          <li>
            <Link to="/scandetails"><FiCalendar size={16} />
            Schedule</Link>
          </li>
        </ul>
         <div className="divider"></div>

      <div className="nav-bottom">
        <ul>
          <li>
            
             <Link to="/scandetails"><FiBell size={16} />
            Notifications</Link>
          </li>
          <li>
            
             <Link to="/scandetails"><FiSettings size={16} />
            Settings</Link>
          </li>
          <li>
            
             <Link to="/scandetails"><RiErrorWarningLine  size={16}/>
            Support</Link>
          </li>
        </ul>
      </div>
      </div>

     

      <div className="sidebar-profile">
       <div className="sidebar-profile">
         <div ><CgProfile className="avatar"/></div>
        <div>
          <p className="email">admin@edu.com</p>
          <p className="role">Security Lead</p>
        </div>
       </div>
        <div>
          <IoIosArrowForward  size={16}/>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;