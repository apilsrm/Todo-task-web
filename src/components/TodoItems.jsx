import tick from "../assets/tick.png";
import untick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={isComplete ? tick : untick} alt="" className="w-7" />
        <p
          className={`text-slate-700 ml-4 text-[17px] ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={delete_icon}
        className=" w-3.5 cursor-pointer bg-blue-200"
        alt=""
      />
    </div>
  );
};

export default TodoItems;
