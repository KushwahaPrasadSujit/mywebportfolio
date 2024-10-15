"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function BackToDashboard() {
  const router = useRouter();
  return (
    <div
      className="flex flex-row gap-3 items-center"
      onClick={() => router.back()}
      style={{ cursor: "pointer" }} // Ensure cursor changes to pointer on hover
    >
      <FaArrowLeft />
      <h2 className="text-body-semibold">Sujit Prasad Kushwaha</h2>
    </div>
  );
}
