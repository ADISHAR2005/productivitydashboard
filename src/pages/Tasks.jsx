import { useState, useEffect } from "react"
import InputField from "../components/InputField"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"


export const Tasks = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        try {
            const savedTasks = localStorage.getItem("tasks");
            if (savedTasks) {
                setTasks(JSON.parse(savedTasks));
            }
        } catch (error) {
            console.error(error);
            localStorage.removeItem("tasks")
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        )
    }, [tasks])

    const handleAddTask = (e) => {
        e.preventDefault();
        if (!task.trim())
            return;
        setTasks([...tasks, task])
        setTask("")
    }

    const deleteTask = (indexToDelete) => {
        setTasks(
            tasks.filter(
                (_, index) => index !== indexToDelete
            )
        );
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div>
                    <h1>Task form</h1>
                    <form onSubmit={handleAddTask}>
                        <InputField
                            type="text"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            placeholder="Enter Task"
                        />
                        <button

                            className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
                        >
                            Add task
                        </button>
                    </form>
                    <div>
                        <h1>Task List</h1>
                        <div className="px-5">
                            {
                                tasks.map((item, index) => (
                                    <div key={index}
                                        className="flex justify-between"
                                    >

                                        <li>
                                            {item}
                                        </li>
                                        <button
                                            onClick={() => deleteTask(index)}
                                        >
                                            Delete
                                        </button>

                                    </div>
                                ))

                            }
                        </div>
                        <div>
                            <p>Total Tasks:{tasks.length}</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
