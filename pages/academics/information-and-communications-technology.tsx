import {
	Anchor,
	Button,
	Card,
	Container,
	Flex,
	Image,
	SimpleGrid,
	Text,
	Title,
} from "@mantine/core";

const coresubjects = [
	{
		title: "Java Programming",
		description:
			"Java Programming is a course that deals with the study of the different programming languages.",
	},
	{
		title: "Web Development",
		description:
			"Web Development is a course that deals with the study of the different web development languages.",
	},
	{
		title: "Database Management",
		description:
			"Database Management is a course that deals with the study of the different database management languages.",
	},
	{
		title: "Computer Systems",
		description:
			"Computer Systems is a course that deals with the study of the different computer systems.",
	},
	{
		title: "Networks and Security",
		description:
			"Networks and Security is a course that deals with the study of the different networks and securities.",
	},
	{
		title: "Multimedia and Graphics",
		description:
			"Multimedia and Graphics is a course that deals with the study of the different multimedia and graphics.",
	},
	{
		title: "Mobile Development",
		description:
			"Mobile Development is a course that deals with the study of the different mobile development languages.",
	},
	{
		title: "Software Engineering",
		description:
			"Software Engineering is a course that deals with the study of the different software engineering languages.",
	},
];

const ICTPage = () => {
	return (
		<Container mt={75}>
			<Flex direction="column" gap="md">
				<Title>Information and Communications Technology</Title>
				<Image
					height={200}
					radius="lg"
					src="https://images.pexels.com/photos/57007/pexels-photo-57007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				/>
				<Text>
					Information and communications technology (ICT) is an extensional term
					for information technology (IT) that stresses the role of unified
					communications and the integration of telecommunications (telephone
					lines and wireless signals) and computers, as well as necessary
					enterprise software, middleware, storage and audiovisual, that enable
					users to access, store, transmit, and manipulate information.
				</Text>
			</Flex>

			<Flex direction="column" my={50} gap="sm">
				<Text size="xl" fw="bold">
					Core Subjects
				</Text>

				<SimpleGrid
					breakpoints={[
						{ minWidth: "sm", cols: 1 },
						{ minWidth: "md", cols: 2 },
					]}
				>
					{coresubjects.map((subject) => (
						<Card>
							<Text size="lg" fw="bold">
								{subject.title}
							</Text>
							<Text>{subject.description}</Text>
						</Card>
					))}
				</SimpleGrid>
			</Flex>

			<Anchor href="/academics/admission">
				<Button size="lg" fullWidth>
					Interested in ICT? Apply Now!
				</Button>
			</Anchor>
		</Container>
	);
};

export default ICTPage;