// app/view/(panel)/contributions/page.tsx
import { Metadata } from "next";
import ProfileView from "./my_profile";

export const metadata: Metadata = {
  title: "Profile Settings",
  description: "Overview of your class contributions and expenses.",
};

export default function ProfilePage() {
  return <ProfileView />;
}