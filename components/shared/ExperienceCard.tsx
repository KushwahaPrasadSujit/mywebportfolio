import Link from "next/link";
import React from "react";
import { IoArrowRedoSharp } from "react-icons/io5";

type IExperienceCardProps = {
  id: any;
  projectLink: string;
  projectStartDate: string;
  projectEndDate?: string;
  companyName: string;
  designation?: string;
  description?: string;
  skills?: string[];
};

const ExperienceCard = (props: IExperienceCardProps) => {
  const {
    id,
    projectLink,
    projectStartDate,
    projectEndDate,
    companyName,
    designation,
    description,
    skills,
  } = props;

  return (
    <Link href={projectLink} target="_blank" key={id}>
      <div
        className="grid md:grid-flow-col gap-10 p-4 text-body-normal transition-colors duration-300
      hover:bg-[#68667f] rounded-2xl cursor-pointer"
      >
        <div className="text-small-normal ">
          {projectStartDate} - {projectEndDate}
        </div>
        <div>
          <div className="flex flex-row gap-2 items-center">
            {companyName}
            <IoArrowRedoSharp className="opacity-40" />
          </div>
          <div>{designation}</div>
          <div className="text-small-normal mt-4 leading-relaxed">
            {description}
          </div>
          <div className="mt-5 flex flex-row gap-4 flex-wrap">
            {skills?.filter(Boolean)?.map((skill, index) => {
              return (
                <span key={index + 1} className="skillTag">
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
