export default function CompleteTask({data}) {
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-yellow-500 cursor-pointer rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded font-medium">{data.category}</h3>
        <h4 className="font-medium">{data.taskDate}</h4>
      </div>
      <h2 className="font-medium text-2xl mt-5">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
      {data.taskDescription}
      </p>
      <div className="mt-4">
        <button className="w-full bg-green-500 py-1 px-2 rounded text-sm">Complete</button>
      </div>
    </div>
  );
}
