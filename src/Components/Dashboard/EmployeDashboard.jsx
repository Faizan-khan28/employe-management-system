import Header from "../Others/Header";
import TaskDetails from "../Others/TaskDetails";
import TaskList from "../TaskList/TaskList";

export default function EmployeDashboard() {
  return (
    <div className="bg-[#1c1c1c] min-h-screen p-5 md:p-20">
      <div>
        <Header />
        <TaskDetails/>
        <TaskList />
      </div>
    </div>
  );
}