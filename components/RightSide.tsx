import About from "./About";
import Blogs from "./Blogs";
import Experience from "./Experience";
import Projects from "./Projects";

export default function RightSide() {
  return (
    <div className="text-heading1-semibold flex flex-col gap-10">
      <About />
      <Experience />
      <Projects />
      <Blogs />
    </div>
  );
}
