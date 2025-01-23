import { AuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";

export default function AllTask() {
  let [userData, setUserData] = useContext(AuthContext);

  return (
    <div
      id="AllTask"
      className="bg-gray-800 p-4 sm:p-5 mt-5 rounded h-60 sm:h-80 overflow-auto"
    >
      <div className="bg-gray-700 mb-2 py-2 px-4 grid grid-cols-5 sm:grid-cols-5 gap-2 rounded text-white  text-center">
        <h2 className="text-xs sm:text-lg">Employee Name</h2>
        <h3 className="text-xs sm:text-lg">New Task</h3>
        <h5 className="text-xs sm:text-lg">Active Task</h5>
        <h5 className="text-xs sm:text-lg">Complete Task</h5>
        <h5 className="text-xs sm:text-lg">Failed Task</h5>
      </div>
      <div id="emp">
        {userData &&
          userData.map((employee) => (
            <div
              key={employee.id}
              className="bg-gray-700 mb-2 py-2 px-4 grid grid-cols-5 sm:grid-cols-5 gap-2 text-center rounded"
            >
              <h2 className="text-xs sm:text-lg">{employee.firstName}</h2>
              <h2 className="text-xs sm:text-lg">{employee.taskCount.newTask}</h2>
              <h2 className="text-xs sm:text-lg">{employee.taskCount.active}</h2>
              <h2 className="text-xs sm:text-lg">{employee.taskCount.completed}</h2>
              <h2 className="text-xs sm:text-lg">{employee.taskCount.failed}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}