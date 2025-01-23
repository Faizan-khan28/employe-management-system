import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

export default function CreateTask() {
  let [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTO, setAssignTO] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [newTask, setNewTask] = useState({});

  let handleTaskSubmit = (event) => {
    event.preventDefault();
    setNewTask({
      taskTitle,
      taskDate,
      assignTO,
      category,
      description,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData;

    data.forEach((employee) => {
      if (assignTO === employee.firstName) {
        employee.tasks.push(newTask);
        employee.taskCount.newTask += 1;
      }
    });
    setUserData(data);

    setTaskTitle("");
    setTaskDate("");
    setAssignTO("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="bg-gray-800 mt-5 p-4 sm:p-6 rounded-lg">
      <form
        onSubmit={handleTaskSubmit}
        className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-between gap-4"
      >
        <div className="w-full sm:w-1/2">
          <div>
            <h3 className="text-xs sm:text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              className="text-xs sm:text-sm py-1 px-2 w-full sm:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              placeholder="Make A UI Design"
              required
            />
          </div>

          {/* Other Inputs */}

          <div>
            <h3 className="text-xs sm:text-sm text-gray-300 mb-1">Date</h3>
            <input
             value={taskDate}
             onChange={(e)=> {
              setTaskDate( e.target.value)
             }}
              required
              type="date"
              className="text-xs sm:text-sm py-1 px-2 w-full sm:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>

          <div>
            <h3 className="text-xs sm:text-sm text-gray-300 mb-1">Assign To</h3>
            <input
             value={assignTO}
             onChange={(e)=> {
              setAssignTO( e.target.value)
             }}
              required
              type="text"
              className="text-xs sm:text-sm py-1 px-2 w-full sm:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm text-gray-300 mb-1">Category</h3>
            <input
             value={category}
             onChange={(e)=> {
              setCategory( e.target.value)
             }}
              required
              type="text"
              className="text-xs sm:text-sm py-1 px-2 w-full sm:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              placeholder="Development, Design..."
            />
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-xs sm:text-sm text-gray-300 mb-1">Description</h3>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full h-32 sm:h-44 text-xs sm:text-sm py-2 px-4 rounded outline-none bg-gray-700 border border-gray-500"
          ></textarea>

          <button className="bg-red-600 py-2 sm:py-3 hover:bg-red-700 px-4 sm:px-5 rounded text-xs sm:text-sm mt-4 font-medium w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}