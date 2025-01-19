export default function TaskDetails({data}) {
  return (
    <div className="flex flex-wrap mt-10 justify-center md:justify-between gap-4">
      <div className="rounded-xl cursor-pointer w-full md:w-[45%] py-6 px-4 md:px-9 bg-red-400 text-center">
        <h2 className="text-xl md:text-3xl font-semibold">{data.taskCount.newTask}</h2>
        <h3 className="text-lg md:text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl cursor-pointer w-full md:w-[45%] py-6 px-4 md:px-9 bg-blue-400 text-center">
        <h2 className="text-xl md:text-3xl font-semibold">{data.taskCount.completed}</h2>
        <h3 className="text-lg md:text-xl font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl cursor-pointer w-full md:w-[45%] py-6 px-4 md:px-9 bg-green-400 text-center">
        <h2 className="text-xl md:text-3xl font-semibold">{data.taskCount.active}</h2>
        <h3 className="text-lg md:text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl cursor-pointer w-full md:w-[45%] py-6 px-4 md:px-9 bg-yellow-400 text-center">
        <h2 className="text-xl md:text-3xl font-semibold">{data.taskCount.failed}</h2>
        <h3 className="text-lg md:text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
}
