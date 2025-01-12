import { useState } from "react"
import Login from "./Components/Auth/Login"
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import EmployeDashboard from "./Components/Dashboard/EmployeDashboard"


function App() {

  let [user , setUser] = useState(null)

  let handleLogin = (email , password) => {
    if(email === "admin@gmail.com" && password === "123") {
      setUser("admin")
    }else if (email === "user@gmail.com" && password === "123") {
      setUser("employee")
    }else {
      console.log("wrong Cradantianls");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ""}
      { user === "admin" && <AdminDashboard/>}
      {user === "employee" && <EmployeDashboard/>}
    </>
  )
}

export default App
