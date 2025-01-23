import Header from "../Others/Header";
import TaskDetails from "../Others/TaskDetails";
import TaskList from "../TaskList/TaskList";

export default function EmployeDashboard(props) {
  
  return (
    <div className="bg-gray-900 min-h-screen p-5 md:p-20">
      <div>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskDetails data={props.data}/>
        <TaskList data={props.data} />
      </div>
    </div>
  );
}