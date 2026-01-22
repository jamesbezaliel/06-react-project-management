import Button from "./Button";
export default function Sidebar({
  onCreateProject,
  projects,
  selectedProjectId,
  selectProject,
}) {
  return (
    <aside className="w-1/4 bg-stone-950 rounded-r-2xl pt-8 px-8">
      <h2 className="text-stone-100 uppercase font-bold text-2xl">
        your projects
      </h2>
      <Button onClick={onCreateProject}>+ Add Project</Button>

      <ul>
        {projects.length > 0 &&
          projects.map((project) => {
            let className =
              "px-6 py-4 my-2 w-full rounded-lg hover:bg-stone-700 text-stone-400 cursor-pointer";

            if (project.projectId == selectedProjectId) {
              className += " bg-stone-700 text-stone-100";
            }
            return (
              <li
                key={project.projectId}
                className={className}
                onClick={() => selectProject(project.projectId)}
              >
                <button>{project.title}</button>
              </li>
            );
          })}
        {projects.length === 0 && (
          <p className="text-stone-400 mt-4">No projects available.</p>
        )}
      </ul>
    </aside>
  );
}
