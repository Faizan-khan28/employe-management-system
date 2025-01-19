import { useContext, useEffect, useState } from "react"
import Login from "./Components/Auth/Login"
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import EmployeDashboard from "./Components/Dashboard/EmployeDashboard"
import { AuthContext } from "./Context/AuthProvider"


function App() {

  let [user , setUser] = useState(null)
  let [loggedUserData,setLoggedUserData] = useState(null)

  let authData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser) {
      let userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedUserData(userData.data)
    }
  }, [])


  let handleLogin = (email , password) => {
    if(email === "admin@gmail.com" && password === "123") {
      setUser("admin")
      localStorage.setItem("loggedInUser",JSON.stringify({role : 'admin'}) )
    }else if (authData) {
      let employee = authData.Employees.find((e) => email == e.email && e.password == password)
      if(employee) {
        setUser("employee")
        setLoggedUserData(employee);
        localStorage.setItem("loggedInUser",JSON.stringify({role : 'employee',data:employee}) )
      }
    }else {
      console.log("wrong Credentials");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ""}
      {user === "admin" && <AdminDashboard/>}
      {user === "employee" && <EmployeDashboard data={loggedUserData}/>}
    </>
  )
}

export default App
