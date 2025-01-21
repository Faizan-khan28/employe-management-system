
export default function AcceptTask({data}) {
  
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-blue-500 cursor-pointer rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded font-medium">{data.category}</h3>
        <h4 className="font-medium">{data.taskDate}</h4>
      </div>
      <h2 className="font-medium text-2xl mt-5">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
        {data.tasksdescription}
      </p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm rounded">Mark as Completed</button>
        <button className="bg-red-500 py-1 px-2 text-sm rounded">Mark as Failed</button>
      </div>
    </div>
  );
}
