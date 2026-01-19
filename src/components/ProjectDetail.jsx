import Tasks from "./Tasks.jsx";

export default function ProjectDetail({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="ms-8 mt-20 w-1/2">
      <div className="flex justify-between">
        <h1 className="text-stone-700 font-bold text-4xl">{project.title}</h1>
        <button
          className="text-lg text-stone-600 hover:text-stone-950 transition"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
      <p className="text-xl mt-4 mb-6 text-stone-400">{formattedDate}</p>
      <p className="text-xl mt-4 mb-6 text-stone-500 whitespace-pre-wrap">
        {project.description}
      </p>
      <hr className="h-1 bg-stone-300" />

      <h2 className="text-stone-800 font-bold text-3xl my-4">Tasks</h2>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
