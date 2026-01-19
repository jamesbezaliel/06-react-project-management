import { useState, useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewTask({ onAdd }) {
  const [task, setTask] = useState("");
  const modalRef = useRef();

  function handleClick() {
    // const enteredTask = taskInputRef.current.value;
    // setTask((prevTasks) => [
    //   ...prevTasks,
    //   { id: crypto.randomUUID(), name: enteredTask },
    // ]);
    // taskInputRef.current.value = "";
    if (task.trim() === "") {
      modalRef.current.open();
      return;
    }
    onAdd(task);
    setTask("");
  }

  function handleChange(event) {
    setTask(event.target.value);
  }

  return (
    <>
      <Modal textButton="Okay" ref={modalRef}>
        <h2>Invalid Input</h2>
        <p>You should input a task.</p>
      </Modal>
      <div>
        <input
          value={task}
          onChange={handleChange}
          type="text"
          className="focus:outline-none bg-stone-200 transition mr-4 p-1 w-[45%]"
        />
        <button onClick={handleClick}>Add Task</button>
      </div>
    </>
  );
}
