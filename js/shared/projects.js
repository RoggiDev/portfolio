import { projects } from "../../data/content/projectData.js";
import "../../components/cards/ProjectCard.js";

export const renderProjects = () => {
  const projectsContainer = document.getElementById("projectsContainer");

  if (!projectsContainer) return;

  projects.forEach(({ id, image, technologies, liveUrl, githubUrl }, index) => {
    const projectCard = document.createElement("custom-project-card");

    projectCard.projectIndex = index;
    projectCard.projectId = id;
    projectCard.image = image;
    projectCard.technologies = technologies;
    projectCard.liveUrl = liveUrl;
    projectCard.githubUrl = githubUrl;

    projectsContainer.appendChild(projectCard);
  });
};
