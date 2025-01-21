import { useState } from "react";

export default function Header(props) {
  // const [userName, setUserName] = useState("")
  // if(!data) {
  //   setUserName('Admin')
  // }else {
  //   setUserName(data.firstName)
  // }

  let logOUtUser = () => {
    localStorage.setItem("loggedInUser","")
    // window.location.reload()
    props.changeUser("")
    
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between p-4">
      <h1 className="text-xl sm:text-2xl font-medium">
        Hello <br />
        <span className="text-2xl sm:text-3xl font-semibold">userName 😊</span>
      </h1>
      <button onClick={logOUtUser} className="mt-2 sm:mt-0 bg-red-600 px-4 sm:px-5 py-2 rounded-md text-base sm:text-lg font-medium">
        Log Out
      </button>
    </div>
  );
}
