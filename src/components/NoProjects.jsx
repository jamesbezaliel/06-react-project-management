import noProjectsImage from "../assets/no-projects.png";
import Button from "./Button.jsx";

export default function NoProjects({ onCreateProject }) {
  return (
    <div className="flex items-center justify-between flex-col mb-10 mt-36 h-64 mx-auto">
      <img
        src={noProjectsImage}
        alt="No Projects"
        className="w-24 h-24 mx-auto"
      />
      <h2 className="text-stone-500 text-2xl font-bold">No Project Selected</h2>
      <p className="text-stone-400">
        Select a project or get started with a new one
      </p>
      <Button onClick={onCreateProject}>Create a new project</Button>
    </div>
  );
}
