import Sidebar from "../sidebar/sidebar";
import Mainbody from "../mainbody/mainbody";

function Dashboard() {
  return (
    <div className="Dashboard flex">
      <div className="navbarComponent w-1/5">
        <Sidebar></Sidebar>
      </div>
      <div className="mainComponent w-4/5">
        <Mainbody></Mainbody>
      </div>
    </div>
  );
}

export default Dashboard;
