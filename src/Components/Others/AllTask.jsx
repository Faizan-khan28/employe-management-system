import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

export default function AllTask() {
  let [userData,setUserData] = useContext(AuthContext);

  return (
    <div
      id="AllTask"
      className="bg-[#1c1c1c] cursor-pointer p-4 sm:p-5 mt-5 h-48 rounded"
    >
      <div className="bg-red-400  mb-2 font-semibold py-2 px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center rounded">
        <h2 className="text-xs sm:text-lg">Employee Name</h2>
        <h3 className="text-xs sm:text-lg">New Task</h3>
        <h5 className="text-xs sm:text-lg">Active Task</h5>
        <h5 className="text-xs sm:text-lg">Complete Task</h5>
        <h5 className="text-xs sm:text-lg">Failed Task</h5>
      </div>
      <div id="emp" className="h-[80%] overflow-auto">
        {userData &&
          userData.map(employee => {
            return (
              <div key={employee.id} className="bg-red-400 font-semibold mb-2 py-2 px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center rounded">
                <h2 className="text-xs w-1/5 text-white sm:text-lg">
                  {employee.firstName}
                </h2>
                <h3 className="text-xs w-1/5  text-blue-500 sm:text-lg">
                  {employee.taskCount.active}
                </h3>
                <h5 className="text-xs w-1/5  text-yellow-400 sm:text-lg">{employee.taskCount.newTask}</h5>
                <h5 className="text-xs w-1/5 text-green-600 sm:text-lg">{employee.taskCount.completed}</h5>
                <h5 className="text-xs w-1/5 text-red-600 sm:text-lg">{employee.taskCount.failed}</h5>
              </div>
            );
          })}
      </div>
    </div>
  );
}
