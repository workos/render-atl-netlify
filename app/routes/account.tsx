import { Text, Heading, TextField, Flex, Box } from "@radix-ui/themes";

import { data } from "react-router";
import type { Route } from "./+types/account";

export function loader(_: Route.LoaderArgs) {
	const user = {
		firstName: "John",
		lastName: "Doe",
		email: "john.doe@example.com",
		id: "123",
	};
	return data({ user, role: "admin" });
}

export default function AccountPage({ loaderData }: Route.ComponentProps) {
	const { user, role } = loaderData;

	const userFields = [
		["First name", user.firstName],
		["Last name", user.lastName],
		["Email", user.email],
		role ? ["Role", role] : [],
		["Id", user.id],
	].filter((arr) => arr.length > 0);

	return (
		<>
			<Flex direction="column" gap="2" mb="7">
				<Heading size="8" align="center">
					Account details
				</Heading>
				<Text size="5" align="center" color="gray">
					Below are your account details
				</Text>
			</Flex>

			{userFields && (
				<Flex direction="column" justify="center" gap="3" width="400px">
					{userFields.map(([label, value]) => (
						<Flex asChild align="center" gap="6" key={value}>
							<label>
								<Text weight="bold" size="3" style={{ width: 100 }}>
									{label}
								</Text>

								<Box flexGrow="1">
									<TextField.Root value={value || ""} readOnly />
								</Box>
							</label>
						</Flex>
					))}
				</Flex>
			)}
		</>
	);
}
