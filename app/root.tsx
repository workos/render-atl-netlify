// Import the base CSS styles for the radix-ui components.
import "@radix-ui/themes/styles.css";
import { Theme, Card, Container, Flex, Button, Box } from "@radix-ui/themes";
import {
	Links,
	Link,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useRouteLoaderData,
	data,
} from "react-router";
import Footer from "./components/footer";
import SignInButton from "./components/sign-in-button";
import type { Route } from "./+types/root";

export const links: Route.LinksFunction = () => [];

export function loader(_: Route.LoaderArgs) {
	// Called when the form in SignInButton is submitted
	const user = {
		firstName: "John",
		lastName: "Doe",
		email: "john.doe@example.com",
		id: "123",
	};
	return data({ user });
}

export async function action(_: Route.ActionArgs) {
	// Called when the form in SignInButton is submitted
	return data({ user: null });
}

export function useRootLoaderData() {
	return useRouteLoaderData<typeof loader>("root");
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<ScrollRestoration />
				<Scripts />
				<Theme
					accentColor="iris"
					panelBackground="solid"
					style={{ backgroundColor: "var(--gray-1)" }}
				>
					<Container style={{ backgroundColor: "var(--gray-1)" }}>
						<Flex direction="column" gap="5" p="5" height="100vh">
							<Box asChild flexGrow="1">
								<Card size="4">
									<Flex direction="column" height="100%">
										<Flex asChild justify="between">
											<header>
												<Flex gap="4">
													<Button asChild variant="soft">
														<Link to="/">Home</Link>
													</Button>

													<Button asChild variant="soft">
														<Link to="/account">Account</Link>
													</Button>
												</Flex>

												<SignInButton />
											</header>
										</Flex>

										<Flex flexGrow="1" align="center" justify="center">
											<main>
												<Outlet />
											</main>
										</Flex>
									</Flex>
								</Card>
							</Box>
							<Footer />
						</Flex>
					</Container>
				</Theme>
			</body>
		</html>
	);
}
