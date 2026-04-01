import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  layout("components/Layout.tsx", [
    index("pages/Home.tsx"),
    route("about", "pages/About.tsx"),
    route("solutions", "pages/Solutions.tsx"),
    route("careers", "pages/Careers.tsx"),
  ]),
] satisfies RouteConfig;
