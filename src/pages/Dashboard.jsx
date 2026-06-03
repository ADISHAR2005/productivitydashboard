import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const cardItem=[
    {title:"Tasks",value:"12"},
    {title:"Notes",value:"5"},
    {title:"Expenses",value:"₹1200"},
    {title:"Events",value:"3"}
  ]
  
const Dashboard = () => {
  
  return (
    <div className="min-h-screen">
      <Navbar username="Aditya" />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6">
           <div className="grid grid-cols-2 gap-4">
            {cardItem.map((item)=>(
              <Card key={item.title} title={item.title} value={item.value}/>
            ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;