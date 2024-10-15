import { socialMedia } from "@/constants";
import MenuBar from "./MenuBar";

export default function LeftSide() {
  return (
    <div className="flex flex-col gap-y-3 sticky top-24">
      <div className="text-heading1-bold">Sujit Prasad Kushwaha</div>
      <div className="text-heading2-bold">Software Developer II</div>
      <div className="text-base-medium mb-5">
        Turning Your Ideas Into Innovative Solutions – Let&apos;s Build Your
        Vision Together.
      </div>
      <MenuBar />
      <div className="flex flex-row gap-6 mt-10">
        {socialMedia.map((item) => {
          return (
            <a
              href={item?.link}
              target="_blank"
              className="socialMediaIcon"
              key={item?.title}
            >
              {item?.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
}
