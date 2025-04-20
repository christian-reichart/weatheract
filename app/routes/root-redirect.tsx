import { redirect } from "react-router"

export async function loader() {
  return redirect("/home")
}

export default function RootRedirect() {
  return null
}
