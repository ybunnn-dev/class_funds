// app/view/(panel)/section/page.tsx
import { Metadata } from "next";
import StudentProfileView from "./student_profile";

export const metadata: Metadata = {
  title: "Section",
  description: "Overview of your classmates/students.",
};

export default function StudentProfilePage() {
  return <StudentProfileView />;
}