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
		title: "Pre-Calculus",
		description:
			"Pre-Calculus is a course that combines reviews of algebra, geometry, and functions into a preparatory course for calculus.",
	},
	{
		title: "Basic Calculus",
		description:
			"Calculus is a branch of mathematics that deals with derivatives and integrals of functions, by methods originally based on the summation of infinitesimal differences.",
	},
	{
		title: "General Chemistry 1",
		description:
			"General Chemistry 1 is a course that deals with the study of the composition, structure, properties, and reactions of matter, especially of atomic and molecular systems.",
	},
	{
		title: "General Chemistry 2",
		description:
			"General Chemistry 2 is a course that deals with the study of the composition, structure, properties, and reactions of matter, especially of atomic and molecular systems.",
	},
	{
		title: "General Physics 1",
		description:
			"General Physics 1 is a course that deals with the study of matter and energy and the interaction between them.",
	},
	{
		title: "General Physics 2",
		description:
			"General Physics 2 is a course that deals with the study of matter and energy and the interaction between them.",
	},
	{
		title: "General Biology 1",
		description:
			"General Biology 1 is a course that deals with the study of living organisms, divided into many specialized fields that cover their morphology, physiology, anatomy, behavior, origin, and distribution.",
	},
	{
		title: "General Biology 2",
		description:
			"General Biology 2 is a course that deals with the study of living organisms, divided into many specialized fields that cover their morphology, physiology, anatomy, behavior, origin, and distribution.",
	},
];

const STEMPage = () => {
	return (
		<Container mt={75}>
			<Flex direction="column" gap="md">
				<Title>Science, Technology, Engineering, and Mathematics</Title>
				<Image
					height={200}
					radius="lg"
					src="https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				/>
				<Text>
					STEM is a curriculum based on the idea of educating students in four
					specific disciplines — science, technology, engineering and
					mathematics — in an interdisciplinary and applied approach. Rather
					than teach the four disciplines as separate and discrete subjects,
					STEM integrates them into a cohesive learning paradigm based on
					real-world applications.
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
					Interested in STEM? Apply Now!
				</Button>
			</Anchor>
		</Container>
	);
};

export default STEMPage;