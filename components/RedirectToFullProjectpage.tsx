"use client";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

type IFullPageProps = {
  text: string;
  linkToFullPage: string;
};

export default function RedirectToFullProjectpage(props: IFullPageProps) {
  const { text, linkToFullPage } = props;

  const router = useRouter();
  const redirecToFullPage = () => {
    router.push(`/${linkToFullPage}`);
  };

  return (
    <div className="seeFullProjectLink" onClick={redirecToFullPage}>
      <div className="text-base-medium">{text}</div>
      <FaArrowRightLong className="rightIcon" />
    </div>
  );
}
