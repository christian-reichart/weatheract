import { type RouteConfig, route } from "@react-router/dev/routes"

export default [
  route("/", "routes/home.tsx"),
  route("/actions/theme", "routes/actions/theme.tsx"),
] satisfies RouteConfig