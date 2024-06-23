import { useRef } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";
const Todo = () => {

  const inputRef = useRef();

    const add = () => {
            const inputText = inputRef.current.value.trim();
            console.log(inputText)
     
    }


  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center justify-center mt-7 gap-2">
        <img src={todo_icon} alt="" className="w-8" />
        <h1 className="text-3xl font-semibold justify-self-center">
          ToDO List
        </h1>
      </div>{" "}
      <div className="flex items-center my-7 bg-gray-900 rounded-full">
        <input
            ref={inputRef}
          type="text"
          placeholder="You task here"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-300  text-slate-200"
        />
        <button onClick={add} className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer ">
          ADD
          {" "}
          +
        </button>

      </div>
       <div className="">
        <TodoItems text="learn coding"/>
        <TodoItems text="learn w coding"/>
       </div>

    </div>
  );
};

export default Todo;
