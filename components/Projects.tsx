import { FaArrowRightLong } from "react-icons/fa6";
import ProjectCard from "./shared/ProjectCard";
import RedirectToFullProjectpage from "./RedirectToFullProjectpage";

export default function Projects() {
  return (
    <section className="section" id="projectSection">
      <div>
        {exp?.slice(0, 1).map((item, index) => {
          return <ProjectCard key={item?.id} {...item} />;
        })}
      </div>
      <RedirectToFullProjectpage
        linkToFullPage="projectList"
        text="View Full Project Archive"
      />
    </section>
  );
}

export const exp = [
  {
    id: 1,
    projectLink: "https://www.dhunitech.io/",
    projectName: "Jobquest",
    description: `JobQuest is an intuitive and comprehensive job portal designed to
    streamline the job search process for both job seekers and employers.
    With its user-friendly interface and robust features, JobQuest aims to
    bridge the gap between talented individuals seeking employment and
    organizations looking for skilled professionals.`,
    skills: ["HTML", "JavaScript", "React.js", "ANTD", "Sass", "Css"],
  },
  {
    id: 2,
    projectLink: "https://www.dhunitech.io/",
    projectName: "Jobquest",
    description: `Translated intricate Figma designs into meticulously crafted code, built and maintained responsive, user-friendly web interfaces, collaborated with design teams to implement visual and interactive elements, optimized web applications for speed and performance, participated in API development and third-party service integrations, and gained experience with version control systems like Git.`,
  },
];
