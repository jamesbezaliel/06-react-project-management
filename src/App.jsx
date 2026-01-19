import Sidebar from "./components/Sidebar.jsx";
import CreateProject from "./components/CreateProject.jsx";
import NoProjects from "./components/NoProjects.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import { useState } from "react";

const PROJECTS_DATA = {
  selectedProject: "not-set",
  projects: [],
  tasks: [],
};
function App() {
  const [projectsState, setProjectsState] = useState(PROJECTS_DATA);

  function handleAddTask(taskInput) {
    const newTask = {
      task: taskInput,
      projectId: projectsState.selectedProject,
      taskId: Date.now().toString(),
    };
    setProjectsState((prevState) => {
      return {
        ...prevState,
        ["tasks"]: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        ["tasks"]: prevState.tasks.filter((task) => task.taskId !== taskId),
      };
    });
  }

  function handleCreateProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: "create-project",
      };
    });
  }

  function handleSubmitProject(projectData) {
    const newProject = { ...projectData, id: Date.now().toString() };
    setProjectsState((prevState) => {
      return {
        ...prevState,
        ["projects"]: [...prevState.projects, newProject],
        ["selectedProject"]: "not-set",
      };
    });
  }

  function selectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  }

  function cancelProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProject: "not-set",
      };
    });
  }

  function handleDelete() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProject,
        ),
        selectedProject: "not-set",
      };
    });
  }

  let selectedProjectData = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProject,
  );

  let projectContent = (
    <ProjectDetail
      project={selectedProjectData}
      onDelete={handleDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProject == "not-set") {
    projectContent = <NoProjects onCreateProject={handleCreateProject} />;
  } else if (projectsState.selectedProject == "create-project") {
    projectContent = (
      <CreateProject
        onAddProject={handleSubmitProject}
        cancelProject={cancelProject}
      />
    );
  }

  return (
    <main className="flex pt-10 h-screen">
      <Sidebar
        onCreateProject={handleCreateProject}
        projectList={projectsState.projects}
        selectProject={selectProject}
        selectedProjectId={projectsState.selectedProject}
      />
      {projectContent}
    </main>
  );
}

export default App;
