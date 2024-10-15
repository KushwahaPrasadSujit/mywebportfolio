import ExperienceCard from "./shared/ExperienceCard";

export default function Experience() {
  return (
    <section className="section" id="experienceSection">
      <div>
        {exp?.map((exp) => {
          return <ExperienceCard key={exp?.id} {...exp} />;
        })}
      </div>
    </section>
  );
}

export const exp = [
  {
    id: 1,
    projectLink: "https://www.dhunitech.io/",
    projectStartDate: "Dec 2021",
    projectEndDate: "Feb 2022",
    companyName: "4 Pix Solutions Pvt. Ltd.",
    designation: "Web Developer Intern",
    description: `Translated intricate Figma designs into meticulously crafted code, built and maintained responsive, user-friendly web interfaces, collaborated with design teams to implement visual and interactive elements, optimized web applications for speed and performance, participated in API development and third-party service integrations, and gained experience with version control systems like Git.`,
    skills: ["HTML", "JavaScript", "React.js", "ANTD", "Sass", "Css"],
  },
  {
    id: 2,
    projectLink: "https://www.dhunitech.io/",
    projectStartDate: "Feb 2022",
    projectEndDate: "present",
    companyName: "Dhunitech",
    designation: "Software Developer",
    description: `
    Architect, engineer, and refine software applications, systems, and
    components, aligning closely with project specifications and
    demands. Seamlessly integrate third-party APIs and services to
    augment software capabilities and functionality. Engage in rigorous
    code reviews, offering insightful feedback to team members to uphold
    code quality and coherence throughout the development lifecycle.
    Lead and mentor a team of budding developers, providing invaluable
    guidance and support. Champion the adoption of Agile methodologies,
    fostering a culture of adaptability and efficiency. Remain abreast
    of emerging technologies and industry trends, continuously refining
    skill sets to deliver cutting-edge solutions. Author elegant,
    optimized, and sustainable codebases, ensuring ease of maintenance
    and scalability. Embrace Agile principles or similar methodologies
    to enable iterative and responsive software delivery, facilitating
    rapid adaptation to evolving requirements.`,
    skills: [
      "HTML",
      "JavaScript",
      "React.js",
      "ANTD",
      "Redux",
      "Sass",
      "Css",
      "Jira",
      "Bitbucket",
      "Git",
      "Android Studio",
    ],
  },
];
