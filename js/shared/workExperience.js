import { workExperience } from "../../data/content/workExperienceData.js";
import "../../components/cards/WorkExperienceCard.js";

export const renderWorkExperience = () => {
  const workExperienceContainer = document.getElementById(
    "workExperienceContainer",
  );

  if (!workExperienceContainer) return;

  workExperience.forEach(
    ({ id, company, startDate, endDate, technologies }) => {
      const WorkExperienceCard = document.createElement(
        "custom-work-experience-card",
      );

      WorkExperienceCard.jobId = id;
      WorkExperienceCard.company = company;
      WorkExperienceCard.startDate = startDate;
      WorkExperienceCard.endDate = endDate;
      WorkExperienceCard.technologies = technologies;

      workExperienceContainer.appendChild(WorkExperienceCard);
    },
  );
};
