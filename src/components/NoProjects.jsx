import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjects({ onCreateProject }) {
  return (
    <section className="flex flex-col items-center w-2/3 mt-24">
      <img src={noProjectImg} alt="No projects image" className="w-24 h-24" />
      <h2 className="text-stone-700 text-2xl font-bold text-center mt-5">
        You have no projects
      </h2>
      <p className="text-stone-400 text-center mt-2">
        Please click the button below to get started.
      </p>
      <Button onClick={onCreateProject}>Create a new Project</Button>
    </section>
  );
}
