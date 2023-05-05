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
		title: "Creative Writing",
		description:
			"Creative Writing is a course that deals with the study of writing creatively.",
	},
	{
		title: "Introduction to World Religions",
		description:
			"Introduction to World Religions is a course that deals with the study of the different religions around the world.",
	},
	{
		title: "Creative Nonfiction",
		description:
			"Creative Nonfiction is a course that deals with the study of writing creatively.",
	},
	{
		title: "Trends, Networks, and Critical Thinking in the 21st Century",
		description:
			"Trends, Networks, and Critical Thinking in the 21st Century is a course that deals with the study of the different trends and networks in the 21st century.",
	},
	{
		title: "Disciplines and Ideas in the Social Sciences",
		description:
			"Disciplines and Ideas in the Social Sciences is a course that deals with the study of the different disciplines and ideas in the social sciences.",
	},
	{
		title: "Disciplines and Ideas in the Applied Social Sciences",
		description:
			"Disciplines and Ideas in the Applied Social Sciences is a course that deals with the study of the different disciplines and ideas in the applied social sciences.",
	},
	{
		title: "Philippine Politics and Governance",
		description:
			"Philippine Politics and Governance is a course that deals with the study of the different politics and governance in the Philippines.",
	},
	{
		title: "Community Engagement, Solidarity, and Leadership",
		description:
			"Community Engagement, Solidarity, and Leadership is a course that deals with the study of the different community engagements, solidarity, and leadership.",
	},
];

const HUMSSPage = () => {
	return (
		<Container mt={75}>
			<Flex direction="column" gap="md">
				<Title>Humanities and Social Sciences</Title>
				<Image
					height={200}
					radius="lg"
					src="https://images.pexels.com/photos/1036804/pexels-photo-1036804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				/>
				<Text>
					The Humanities and Social Sciences (HUMSS) strand is designed for
					those who wonder what is on the other side of the wall. It is designed
					to help you understand how society works, and the relationships among
					individuals in society. It prepares you for a wide range of college
					courses, including but not limited to Anthropology, Political Science,
					Communication Arts, Journalism, Education, and Law.
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
						<Card key={subject.title}>
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
					Interested in HUMSS? Apply Now!
				</Button>
			</Anchor>
		</Container>
	);
};

export default HUMSSPage;