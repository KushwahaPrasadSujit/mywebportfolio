import Image from "next/image";
import Link from "next/link";
import { IoArrowRedoSharp } from "react-icons/io5";

type IProjectProps = {
  id: number;
  thumbnails?: string;
  projectLink: string;
  projectName: string;
  skills?: string[];
  description: string;
};

export default function ProjectCard(props: IProjectProps) {
  const { id, projectLink, projectName, skills, thumbnails, description } =
    props;
  return (
    <div
      key={id}
      className="grid md:grid-flow-col gap-4 p-4 text-body-normal hover:bg-[#68667f] rounded-2xl duration-300 cursor-pointer"
    >
      <div>
        <Image
          src="https://media.licdn.com/dms/image/D563DAQF9zGaVFpIazQ/image-scale_191_1128/0/1694581585134/vocalpanda_cover?e=1713168000&v=beta&t=OZuXssKDER6RiXjcbINeXQoOqYJpg4yXIueR31vFyZg"
          alt="thumbnail"
          width={150}
          height={1}
          style={{
            height: 70,
            objectFit: "cover",
          }}
          className="border border-gray-500 rounded-sm p-[1px]"
        />
      </div>

      <div>
        <div className="flex flex-row gap-2 items-center mb-2">
          <Link href={projectLink} target="_blank">
            {projectName}
          </Link>
          <IoArrowRedoSharp className="opacity-40" />
        </div>
        <div className="text-base-normal">{description}</div>

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
  );
}
