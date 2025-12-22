// app/view/(panel)/contributions/page.tsx
import { Metadata } from "next";
import ContributionsView from "./contributions_view";

export const metadata: Metadata = {
  title: "Contributions",
  description: "Overview of your class contributions and expenses.",
};

export default function ContributionsPage() {
  return <ContributionsView />;
}