import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function CreateProject({ onCancelProject, onAddProject }) {
  const title = useRef(); // or let
  const description = useRef(); // or let
  const dueDate = useRef(); // or let
  const modalRef = useRef(); // or let

  function handleClickSave() {
    const titleData = title.current.value;
    const descriptionData = description.current.value;
    const dueDateData = dueDate.current.value;

    if (
      titleData.trim() === "" ||
      descriptionData.trim() === "" ||
      dueDateData.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }
    const newProject = {
      title: titleData,
      description: descriptionData,
      dueDate: dueDateData,
      projectId: Date.now().toString(),
    };
    onAddProject(newProject);
  }

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="font-bold text-xl text-stone-600">Invalid Input</h2>
        <p>Please fill in all fields.</p>
      </Modal>

      <section className="w-2/5 mt-32 ms-8">
        <div className="flex gap-6 ml-auto justify-end">
          <button className="text-stone-950" onClick={onCancelProject}>
            Cancel
          </button>
          <button
            className="text-stone-100 bg-stone-900 rounded px-6 py-3"
            onClick={handleClickSave}
          >
            Save
          </button>
        </div>
        <Input ref={title} type="text" label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input ref={dueDate} type="date" label="Due Date" />
      </section>
    </>
  );
}
