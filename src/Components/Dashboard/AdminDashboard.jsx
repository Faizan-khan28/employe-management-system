import AllTask from "../Others/AllTask";
import CreateTask from "../Others/CreateTask";
import Header from "../Others/Header";


export default function AdminDashboard() {

  return (
    <div className="h-screen w-full p-10">
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  );
}
