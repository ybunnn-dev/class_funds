// app/view/(panel)/dashboard/page.tsx
import { Metadata } from "next";
import DashboardView from "./dashboard_view";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Overview of your class contributions and expenses.",
};

export default function DashboardPage() {
  return <DashboardView />;
}