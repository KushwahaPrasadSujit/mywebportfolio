import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

type IBlogCardProps = {
  id: string | number;
  redirectLink: string;
  publishedYear: number;
  blogTitle: string;
};

export default function BlogCard(props: IBlogCardProps) {
  const { id, blogTitle, publishedYear, redirectLink } = props;

  return (
    <Link
      key={id}
      href={redirectLink}
      target="_blank"
      className="blogCard grid md:grid-flow-col gap-4 p-4 text-body-normal hover:bg-[#68667f] rounded-2xl duration-300"
    >
      <div className="flex flex-row gap-4 items-center">
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
        <div>
          <div className="text-base-semibold text-gray-400">
            {publishedYear}
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="text-body-medium">{blogTitle}</div>
            <GoArrowUpRight className="rightIcon" />
          </div>
        </div>
      </div>
    </Link>
  );
}
