export default function NewTask({data}) {
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-red-400 cursor-pointer rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded font-medium">{data.category}</h3>
          <h4 className="font-medium">{data.taskDate}</h4>
        </div>
        <h2 className="font-medium text-2xl mt-5">{data.taskTitle}</h2>
        <p className="text-sm mt-2">
        {data.description}
        </p>
        <div className="mt-4">
            <button className="bg-blue-500 py-1 px-2 rounded text-sm">Accept Task</button>
        </div>
      </div>
  )
}
