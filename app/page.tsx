import { redirect } from "next/navigation";

export default function Home() {
  // This immediately sends the user to your login route
  redirect("/view/auth/login");
}