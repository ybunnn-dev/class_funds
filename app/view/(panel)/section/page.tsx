// app/view/(panel)/section/page.tsx
import { Metadata } from "next";
import ClassView from "./class_list";

export const metadata: Metadata = {
  title: "Section",
  description: "Overview of your classmates/students.",
};

export default function ClassListPage() {
  return <ClassView />;
}