import { useState, useRef } from "react";
import NewTask from "./NewTask.jsx";

export default function Tasks({ onAdd, onDelete, tasks }) {
  // const [tasks, setTasks] = useState([]);
  // function handleClearTask(taskId) {
  //   setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  // }

  return (
    <section>
      <NewTask onAdd={onAdd} />

      {tasks && tasks.length > 0 ? (
        <ul className="mt-4">
          {tasks.map((task) => (
            <li
              key={task.taskId}
              className="flex justify-between bg-stone-200 p-4 first:rounded-t-lg last:rounded-b-lg"
            >
              <p>{task.task}</p>
              <button
                className="text-stone-600 hover:text-red-500 transition"
                onClick={() => onDelete(task.taskId)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-stone-400 mt-4">No tasks added yet.</p>
      )}
    </section>
  );
}
