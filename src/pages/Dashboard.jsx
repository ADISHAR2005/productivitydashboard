import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar username="Aditya" />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6">
          Main Content
        </div>
      </div>
    </div>
  );
};

export default Dashboard;