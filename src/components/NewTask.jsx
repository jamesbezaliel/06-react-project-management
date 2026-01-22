import { useState, useRef } from "react";
import Modal from "./Modal";

export default function NewTask({ onAddTask }) {
  const [task, setTask] = useState("");
  const modalRef = useRef();

  function handleInputTask(event) {
    setTask(event.target.value);
  }

  function handleClickAddTask() {
    if (task.trim() === "") {
      modalRef.current.open();
      return;
    }

    onAddTask(task);
    setTask("");
  }

  return (
    <>
      <Modal ref={modalRef}>
        <h2>Please Input Task field</h2>
      </Modal>
      <h1 className="text-2xl text-stone-800 font-bold my-4">Tasks</h1>
      <input
        value={task}
        onChange={handleInputTask}
        className="bg-stone-200 p-1 focus:outline-none rounded w-1/2"
        type="text"
      />
      <button onClick={handleClickAddTask} className="ms-4 text-stone-800">
        Add Task
      </button>
    </>
  );
}
