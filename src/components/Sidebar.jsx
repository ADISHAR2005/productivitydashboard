import { Link } from "react-router-dom"


const Sidebar = () => {
    const menuItems = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Tasks", path: "/tasks" },
        { name: "Notes", path: "/notes" },
        { name: "Expenses", path: "/expenses" },
        { name: "Calendar", path: "/Calendar" }
    ]
    return (
        <div className=" min-h-screen w-64 p-6 flex flex-col gap-6 bg-amber-600">
            {
                menuItems.map((item) => (
                    
                        <Link
                            key={item.name}
                            to={item.path}
                        >
                            {item.name}
                        </Link>
                    
                ))
            }
        </div>
    )
}

export default Sidebar