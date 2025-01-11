import { useEffect } from "react"
import Login from "./Components/Auth/Login"
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import EmployeDashboard from "./Components/Dashboard/EmployeDashboard"
import { getLocalStoage, setLocalStorage } from "./Utils/localStorage"


function App() {

  useEffect(() => {
    // setLocalStorage();
    getLocalStoage();
  })

  return (
    <>
      {/* <Login/> */}
      <EmployeDashboard/>
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App
