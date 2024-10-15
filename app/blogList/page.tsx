import BackToDashboard from "@/components/BackToDashboard";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";

export default function page() {
  return (
    <div className="min-h-screen p-[8vw]">
      <BackToDashboard />
      <div className="text-heading1-bold text-[48px] tracking-wide">
        All Blogs
      </div>
      <table className="w-full mt-20">
        <thead>
          <tr>
            <th>Year</th>
            <th>Project</th>
            <th>Made at</th>
            <th>Build with</th>
            <th>link</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <tr key={index}>
                <td>2023</td>
                <td>Emerson Collective</td>
                <td>Upstatement</td>
                <td className="flex flex-wrap gap-4">
                  {[
                    "HTML",
                    "JavaScript",
                    "React.js",
                    "ANTD",
                    "Sass",
                    "Css",
                  ].map((item, index) => {
                    return (
                      <span key={index} className="skillTag">
                        {item}
                      </span>
                    );
                  })}
                  ``
                </td>
                <td>
                  <div className="flex gap-2 items-center">
                    <Link href={"https://www.vocalpanda.com"} target="_blank">
                      vocalpanda
                    </Link>
                    <FaCaretRight />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
