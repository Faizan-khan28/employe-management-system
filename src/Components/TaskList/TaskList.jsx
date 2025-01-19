import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

export default function TaskList({data}) {
  return (
    <div
      id="tasklist"
      className="h-[50vh] overflow-x-auto flex justify-start items-center flex-nowrap gap-5 w-full py-5 mt-10"
    >
     {data.tasks.map((task, idx)=> {
        if(task.active) {
          return <AcceptTask key={idx} data={task}/>
        }
        if(task.newTask) {
          return <NewTask key={idx} data={task}/>
        }
        if(task.completed) {
          return <CompleteTask key={idx} data={task}/>
        }
        if(task.failed) {
          return <FailedTask key={idx} data={task}/>
        }
     })}
    </div>
  );
}
