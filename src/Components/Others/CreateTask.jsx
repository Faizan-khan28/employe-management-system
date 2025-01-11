

export default function CreateTask() {
  return (
    <div className="bg-[#1c1c1c] mt-5 p-4 sm:p-5 rounded">
      <form className="flex flex-col sm:flex-wrap sm:flex-row w-full items-start justify-between gap-4">
        <div className="w-full sm:w-1/2">
          <div>
            <h3 className="text-xs sm:text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              type="text"
              className="text-xs sm:text-sm py-1 px-2 w-full sm:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              placeholder="Make A UI Design"
            />
          </div>

          <div>
            <h3 className="text-xs sm:text-sm text-gray-300 mb-1">Date</h3>
            <input
              type="date"
              className="text-xs sm:text-sm py-1 px-2 w-full sm:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>

          <div>
            <h3 className="text-xs sm:text-sm text-gray-300 mb-1">Assign To</h3>
            <input
              type="text"
              className="text-xs sm:text-sm py-1 px-2 w-full sm:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3 className="text-xs sm:text-sm text-gray-300 mb-1">Category</h3>
            <input
              type="text"
              className="text-xs sm:text-sm py-1 px-2 w-full sm:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              placeholder="Development, Design..."
            />
          </div>
        </div>

        <div className="w-full sm:w-1/2">
          <h3 className="text-xs sm:text-sm text-gray-300 mb-1">Description</h3>
          <textarea
            className="w-full h-32 sm:h-44 text-xs sm:text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
          ></textarea>

          <button className="bg-red-600 py-2 sm:py-3 hover:bg-red-700 px-4 sm:px-5 rounded text-xs sm:text-sm mt-4 font-medium w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}