import Sidebar from "../sidebar/sidebar";
import Mainbody from "../mainbody/mainbody";

// Entry Point Component - Includes Sidebar & Main Content Component

function Dashboard() {
  return (
    <div className="Dashboard flex">
      <div className="navbarComponent w-3/12 lg:w-2/12">
        <Sidebar></Sidebar>
      </div>
      <div className="mainComponent w-9/12 lg:w-10/12">
        <Mainbody></Mainbody>
      </div>
    </div>
  );
}

export default Dashboard;
