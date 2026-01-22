import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProjectDetail from "./components/ProjectDetail";
import NoProjects from "./components/NoProjects";
import CreateProject from "./components/CreateProject";

// const PROJECT_DATA = {
//   selectedProjectId: "not-set",
//   projects: [],
//   tasks: [],
// };

const PROJECT_DATA = {
  selectedProjectId: "not-set",
  projects: [],
};

function App() {
  const [projectsState, setProjectsState] = useState(PROJECT_DATA);

  function handleCreateProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: "create-new",
    }));
  }

  function handleCancelProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: "not-set",
    }));
  }

  function handleAddProject(newProject) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: "not-set",
      projects: [...prevState.projects, newProject],
    }));
  }

  function handleSelectProject(projectId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: "not-set",
        projects: prevState.projects.filter((project) => {
          return project.projectId !== prevState.selectedProjectId;
        }),
      };
    });
  }

  function handleAddTask(taskName) {
    const newTask = {
      taskName: taskName,
      projectId: projectsState.selectedProjectId,
      id: Date.now().toString(),
    };
    setProjectsState((prevState) => {
      return {
        ...prevState,
        ["projects"]: prevState.projects.map((project) => {
          if (project.projectId === projectsState.selectedProjectId) {
            return {
              ...project,
              tasks: project.tasks ? [...project.tasks, newTask] : [newTask],
            };
          }
          return project;
        }),
        // ["tasks"]: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        ["projects"]: prevState.projects.map((project) => {
          if (project.projectId === projectsState.selectedProjectId) {
            return {
              ...project,
              tasks: project.tasks.filter((task) => task.id !== taskId),
            };
          }
          return project;
        }),
        // ["tasks"]: prevState.tasks.filter((task) => task.id !== taskId),
      };
    });
  }

  let selectedProjectData = projectsState.projects.find(
    (project) => project.projectId === projectsState.selectedProjectId,
  );

  let content = (
    <ProjectDetail
      project={selectedProjectData}
      onAddTask={handleAddTask}
      tasks={selectedProjectData?.tasks || []}
      onDeleteTask={handleDeleteTask}
      onDeleteProject={handleDeleteProject}
    />
  );
  if (projectsState.selectedProjectId === "not-set") {
    content = <NoProjects onCreateProject={handleCreateProject} />;
  } else if (projectsState.selectedProjectId === "create-new") {
    content = (
      <CreateProject
        onCancelProject={handleCancelProject}
        onAddProject={handleAddProject}
      />
    );
  }

  return (
    <main className="w-full h-screen flex pt-12">
      <Sidebar
        onCreateProject={handleCreateProject}
        projects={projectsState.projects}
        selectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
