import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <section>
      <NewTask onAddTask={onAddTask} />
      {tasks.length > 0 ? (
        <ul className="mt-4">
          {tasks.map((task) => {
            return (
              <li
                key={task.id}
                className="px-6 py-3 bg-stone-200 text-stone-800 first:rounded-t-lg last:rounded-b-lg flex justify-between items-center"
              >
                {task.taskName}
                <button
                  className="text-stone-800"
                  onClick={() => onDeleteTask(task.id)}
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-stone-400 mt-4">No tasks available.</p>
      )}
    </section>
  );
}
