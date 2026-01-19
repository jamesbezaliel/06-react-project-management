import Button from "./Button.jsx";

export default function Sidebar({
  onCreateProject,
  projectList,
  selectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 bg-black text-white p-4 rounded-r-2xl">
      <h2 className="text-3xl font-bold my-10">YOUR PROJECTS</h2>

      <Button onClick={onCreateProject}>+ Add Project</Button>

      <ul className="mt-8 space-y-4">
        {projectList.length === 0 ? (
          <p className="text-stone-400">No projects available.</p>
        ) : (
          projectList.map((project) => {
            let classNames =
              "w-full text-left p-4 rounded hover:bg-stone-800 hover:text-stone-200 cursor-pointer transition";

            if (project.id === selectedProjectId) {
              classNames += " bg-stone-800 active:text-stone-200";
            } else {
              classNames += " text-stone-400";
            }

            return (
              <li key={project.id} onClick={() => selectProject(project.id)}>
                <button className={classNames}>{project.title}</button>
              </li>
            );
          })
        )}
      </ul>
    </aside>
  );
}
