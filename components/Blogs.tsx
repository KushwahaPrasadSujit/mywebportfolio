import RedirectToFullProjectpage from "./RedirectToFullProjectpage";
import BlogCard from "./shared/BlogCard";
import ProjectCard from "./shared/ProjectCard";

export default function Blogs() {
  return (
    <section className="section" id="blogsSection">
      <div>
        {exp?.map((item, index) => {
          return <BlogCard key={item?.id} {...item} />;
        })}
      </div>
      <RedirectToFullProjectpage
        linkToFullPage="blogList"
        text="View Full Blog Archive"
      />
    </section>
  );
}

export const exp = [
  {
    id: 1,
    redirectLink:
      "https://medium.com/javascript-in-plain-english/bottom-sheet-drawer-with-react-native-gesture-handler-and-react-native-reanimated-160cc60532b5",
    blogTitle: "Blog 1",
    publishedYear: 2020,
  },
  {
    id: 2,
    redirectLink:
      "https://medium.com/javascript-in-plain-english/bottom-sheet-drawer-with-react-native-gesture-handler-and-react-native-reanimated-160cc60532b5",
    blogTitle: "Blog 2",
    publishedYear: 2020,
  },
];
