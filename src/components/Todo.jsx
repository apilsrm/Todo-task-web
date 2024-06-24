import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";
const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    console.log(inputText);

    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((previous_todo) => [...previous_todo, newTodo]);
    inputRef.current.value = ""; //to clear input filed
  };

  //delete to
  const deleteTodo = (id) => {
    setTodoList((previous_todo) => {
      return previous_todo.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((previous_todo) => {
      return previous_todo.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };
  useEffect(() => {
    // console.log(todoList)
    localStorage.setItem("todos", JSON.stringify(todoList)); //array todoList is converted and stored//localst. can't sotre array
  }, [todoList]);

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
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer "
        >
          ADD +
        </button>
      </div>
      <div className="">
        {todoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
        {/* <TodoItems text="learn coding"/> */}
      </div>
    </div>
  );
};

export default Todo;
