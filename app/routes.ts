import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
	index("./routes/_index.tsx"),
	route("/account", "./routes/account.tsx"),
	route("/callback", "./routes/callback.ts"),
	route("/login", "./routes/login.ts"),
] satisfies RouteConfig;
