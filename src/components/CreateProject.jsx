import { useRef, useState } from "react";
import Input from "./Input.jsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "./Modal.jsx";

export default function CreateProject({ cancelProject, onAddProject }) {
  let title = useRef();
  let description = useRef();
  let dueDate = useRef();
  let modalRef = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }
    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} textButton={"Close"}>
        <h2 className="text-stone-800 text-2xl font-bold">Invalid Input</h2>
        <p>Please fill in all fields.</p>
      </Modal>
      <main className="w-1/2 flex justify-center">
        <div className="flex flex-col mb-10 mt-36 w-3/4">
          <div className="ms-auto">
            <button onClick={cancelProject} className="mr-4">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black px-6 py-2 text-white rounded-lg disabled:opacity-50 transition duration-300"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
          <Input
            // value={projectList.title}
            ref={title}
            type="text"
            // handleChange={handleChange}
            label="title"
          />
          <Input
            // value={projectList.description}
            ref={description}
            // handleChange={handleChange}
            label="description"
            textarea
          />
          <Input
            // value={projectList.title}
            ref={dueDate}
            type="date"
            // handleChange={handleChange}
            label="Due Date"
          />
          {/* <div className="mt-6 flex flex-col">
            <label htmlFor="description">DESCRIPTION</label>
            <textarea
              value={projectList.description}
              onChange={(event) =>
                handleChange("description", event.target.value)
              }
              name="description"
              id="description"
              className="focus:outline-none border-stone-300 focus:border-stone-500 border-b-2 bg-stone-200 transition"
            />
          </div> */}
          {/* <div className="mt-6 flex flex-col">
          <label htmlFor="due-date">DUE DATE</label>

          <DatePicker
            onKeyDown={(e) => e.preventDefault()}
            name="due-date"
            id="due-date"
            // selected={projectList.dueDate}
            onChange={(date) => handleChange("dueDate", date)}
            dateFormat="dd.MM.yyyy"
            placeholderText="dd.mm.yyyy"
            className="focus:outline-none border-stone-300 focus:border-stone-500 border-b-2 bg-stone-200 transition px-2 py-1 w-full"
          />
        </div> */}
        </div>
      </main>
    </>
  );
}
