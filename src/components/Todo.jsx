 import todo_icon from "../assets/todo_icon.png"
const Todo = () => {
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center justify-center mt-7 gap-2">
        <img src={todo_icon} alt=""  className="w-8"/>
        <h1 className="text-3xl font-semibold justify-self-center">ToDO List</h1>
      </div>
     <div className="flex"></div>

    </div>
  )
}

export default Todo
