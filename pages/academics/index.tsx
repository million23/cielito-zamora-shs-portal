import {
	Badge,
	Button,
	Card,
	Container,
	Group,
	Image,
	Overlay,
	SimpleGrid,
	Text,
	Title,
	createStyles,
	rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
	hero: {
		position: "relative",
		backgroundImage:
			"url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
		backgroundSize: "cover",
		backgroundPosition: "center",
	},

	container: {
		height: "80vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "flex-start",
		paddingBottom: `calc(${theme.spacing.xl} * 6)`,
		zIndex: 1,
		position: "relative",

		[theme.fn.smallerThan("sm")]: {
			height: rem(500),
			paddingBottom: `calc(${theme.spacing.xl} * 3)`,
		},
	},

	title: {
		color: theme.white,
		fontSize: rem(60),
		fontWeight: 900,
		lineHeight: 1.1,

		[theme.fn.smallerThan("sm")]: {
			fontSize: rem(40),
			lineHeight: 1.2,
		},

		[theme.fn.smallerThan("xs")]: {
			fontSize: rem(28),
			lineHeight: 1.3,
		},
	},

	description: {
		color: theme.white,
		maxWidth: 600,

		[theme.fn.smallerThan("sm")]: {
			maxWidth: "100%",
			fontSize: theme.fontSizes.sm,
		},
	},

	control: {
		marginTop: `calc(${theme.spacing.xl} * 1.5)`,

		[theme.fn.smallerThan("sm")]: {
			width: "100%",
		},
	},
}));

const AcademicItems = [
	{
		title: "Science, Technology, Engineering, and Mathematics",
		image:
			"https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		description:
			"STEM courses cover science, technology, engineering, and math subjects, offering practical learning experiences and preparing students for careers in related fields.",
	},
	{
		title: "Information and Communications Technology",
		image:
			"https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		description:
			"These courses provide students with the skills and knowledge necessary to work with modern technology and information systems. In today's digital age, ICT skills are highly sought after by employers in various industries. ",
	},
	{
		title: "Home Economics",
		image:
			"https://images.pexels.com/photos/5638676/pexels-photo-5638676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		description:
			"These courses aim to equip students with the knowledge and skills necessary to maintain a healthy and functional home environment. Home economics courses can also cover topics related to personal finance, child development, and family relationships. ",
	},
	{
		title: "Humanities and Social Sciences",
		image:
			"https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		description:
			"These courses aim to provide students with critical thinking skills and a broad understanding of human behavior and society. Humanities and social sciences courses often involve reading, writing, and analysis, and offer opportunities for students to develop their research and communication skills",
	},
];

export default function AcademicsPage() {
	const { classes } = useStyles();

	return (
		<>
			<div className={classes.hero}>
				<Overlay
					gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
					opacity={1}
					zIndex={0}
				/>
				<Container className={classes.container}>
					<Title className={classes.title}>Welcome to the Academics Page</Title>
					<Text className={classes.description} size="xl" mt="xl">
						Here, you can find information about the courses we offer, the
						professors who teach them, and the research we do.
					</Text>
				</Container>
			</div>

			<Container mt={100}>
				<Title>What we offer</Title>

				<SimpleGrid
					breakpoints={[
						{ minWidth: "sm", cols: 1 },
						{ minWidth: "md", cols: 2 },
					]}
				>
					{AcademicItems.map((item) => (
						<Card shadow="sm" padding="lg" radius="md" withBorder>
							<Card.Section>
								<Image src={item.image} height={250} alt={item.title} />
							</Card.Section>

							<Text mt="lg" weight={500}>
								{item.title}
							</Text>

							<Text size="sm" color="dimmed" mt="sm">
								{item.description}
							</Text>
						</Card>
					))}
				</SimpleGrid>

				<Button mt="xl" fullWidth size="xl">
					Interested? Click here to learn about our admissions process.
				</Button>
			</Container>
		</>
	);
}
