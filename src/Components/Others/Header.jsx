
export default function Header(props) {
  let logOUtUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-800 rounded-md">
      <h1 className="text-lg sm:text-xl font-medium text-white">
        Hello 
        <span className="text-xl pl-2 sm:text-2xl font-bold">{props.data.firstName}😊</span>
      </h1>
      <button
        onClick={logOUtUser}
        className="mt-2 sm:mt-0 bg-red-600 px-4 sm:px-5 py-2 rounded-md text-sm sm:text-base font-medium hover:bg-red-700"
      >
        Log Out
      </button>
    </div>
  );
}