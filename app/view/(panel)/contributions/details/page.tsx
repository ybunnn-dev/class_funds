// app/view/(panel)/contributions/page.tsx
import { Metadata } from "next";
import ContributionDetails from "./contribution_details";

export const metadata: Metadata = {
  title: "Contribution Details",
  description: "Overview of your class contributions and expenses.",
};

export default function ContributionDetailPage() {
  return <ContributionDetails />;
}