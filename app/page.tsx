import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";

export default function Home() {
  return (
    <main className="container">
      <div className="grid md:grid-cols-3 w-full gap-y-10">
        <div className="md:col-span-1">
          <LeftSide />
        </div>
        <div className="md:col-span-2 md:pl-20">
          <RightSide />
        </div>
      </div>
    </main>
  );
}
