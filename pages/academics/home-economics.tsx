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
		title: "Bread and Pastry Production",
		description:
			"Bread and Pastry Production is a course that deals with the study of the different bread and pastry production.",
	},
	{
		title: "Culinary Arts",
		description:
			"Culinary Arts is a course that deals with the study of the different culinary arts.",
	},
	{
		title: "Food and Beverage Services",
		description:
			"Food and Beverage Services is a course that deals with the study of the different food and beverage services.",
	},
	{
		title: "Tourism Promotion Services",
		description:
			"Tourism Promotion Services is a course that deals with the study of the different tourism promotion services.",
	},
];

const HEPage = () => {
	return (
		<Container mt={75}>
			<Flex direction="column" gap="md">
				<Title>Home Economics</Title>
				<Image
					height={200}
					radius="lg"
					src="https://images.pexels.com/photos/4107134/pexels-photo-4107134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				/>
				<Text>
					The Home Economics track is one of the K-12 tracks that grants
					students the skills and knowledge necessary for livelihood projects at
					home. It is comprised of four strands: Culinary Arts, Bread and Pastry
					Production, Food and Beverage Services, and Tourism Promotion
					Services. The Home Economics track is designed to prepare students for
					college if they choose to pursue a degree in the field of Home
					Economics, or to prepare them for a livelihood project at home.
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
					Interested in HE? Apply Now!
				</Button>
			</Anchor>
		</Container>
	);
};

export default HEPage;