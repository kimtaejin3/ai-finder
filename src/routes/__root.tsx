import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Container from "../components/container";
import Header from "../components/header";

export const Route = createRootRoute({
	component: () => (
		<>
			<Container>
				<Header />
				<Outlet />
			</Container>
			<TanStackRouterDevtools />
		</>
	),
});
