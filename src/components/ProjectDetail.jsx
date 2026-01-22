import Tasks from "./Tasks.jsx";
import Modal from "./Modal.jsx";
import { useRef } from "react";

export default function ProjectDetail({
  project,
  onDeleteProject,
  onAddTask,
  tasks,
  onDeleteTask,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  const modalRef = useRef();

  function handleDeleteProject() {
    modalRef.current.open();
  }

  return (
    <>
      <Modal ref={modalRef} onConfirm={onDeleteProject}>
        <h2>Are you sure?</h2>
        <p>You will delete this project.</p>
      </Modal>
      <section className="w-2/5 mt-20 ms-10">
        <div className="w-full flex justify-between items-center mb-6">
          <h1 className="text-4xl text-stone-700 font-bold">{project.title}</h1>
          <button className="text-lg" onClick={handleDeleteProject}>
            Delete
          </button>
        </div>
        <div>
          <p className="text-stone-400 mt-2">{formattedDate}</p>
          <p className="text-stone-600 my-4 whitespace-pre-wrap">
            {project.description}
          </p>
        </div>
        <hr className="h-[4px] bg-stone-300" />
        <Tasks
          tasks={tasks}
          onAddTask={onAddTask}
          onDeleteTask={onDeleteTask}
        />
      </section>
    </>
  );
}
