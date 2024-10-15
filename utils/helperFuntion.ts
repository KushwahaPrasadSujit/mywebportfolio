export default function scrollIntoView({
  sectionName,
}: {
  sectionName: string;
}) {
  var experienceSection = document.getElementById(sectionName);
  if (experienceSection) {
    experienceSection.scrollIntoView({ behavior: "smooth" });
  }
}
