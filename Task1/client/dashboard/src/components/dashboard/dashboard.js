import Sidebar from "../sidebar/sidebar";
import Mainbody from "../mainbody/mainbody";

function Dashboard() {
  return (
    <div className="Dashboard flex">
      <div className="navbarComponent w-2/12">
        <Sidebar></Sidebar>
      </div>
      <div className="mainComponent w-10/12">
        <Mainbody></Mainbody>
      </div>
    </div>
  );
}

export default Dashboard;
