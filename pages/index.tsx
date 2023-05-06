import {
	Button,
	Container,
	Flex,
	Image,
	SimpleGrid,
	Stack,
	Text,
	Title,
	createStyles,
	rem,
} from "@mantine/core";

import { GetInTouch } from "@/components/GetInTouch";
import { LandingCarousel } from "@/components/LandingCarousel";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
	root: {
		backgroundColor: "#11284b",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundImage:
			"linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://static.wixstatic.com/media/a7a74e_1f9a5f9bdffa42f78c73212f8c4da8bb~mv2.jpg/v1/fill/w_1354,h_841,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a7a74e_1f9a5f9bdffa42f78c73212f8c4da8bb~mv2.jpg)",
		paddingTop: `calc(${theme.spacing.xl} * 3)`,
		paddingBottom: `calc(${theme.spacing.xl} * 3)`,
	},

	inner: {
		display: "flex",
		justifyContent: "space-between",

		[theme.fn.smallerThan("md")]: {
			flexDirection: "column",
		},
	},

	image: {
		[theme.fn.smallerThan("md")]: {
			display: "none",
		},
	},

	content: {
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
		marginRight: `calc(${theme.spacing.xl} * 3)`,

		[theme.fn.smallerThan("md")]: {
			marginRight: 0,
		},
	},

	title: {
		color: theme.white,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 900,
		lineHeight: 1.05,
		maxWidth: rem(500),
		fontSize: rem(48),

		[theme.fn.smallerThan("md")]: {
			maxWidth: "100%",
			fontSize: rem(34),
			lineHeight: 1.15,
		},
	},

	description: {
		color: theme.white,
		opacity: 0.75,
		maxWidth: rem(500),

		[theme.fn.smallerThan("md")]: {
			maxWidth: "100%",
		},
	},

	control: {
		paddingLeft: rem(50),
		paddingRight: rem(50),
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: rem(22),

		[theme.fn.smallerThan("md")]: {
			width: "100%",
		},
	},
}));

const HomePage = () => {
	const { classes } = useStyles();
	return (
		<>
			<div className={classes.root}>
				<Container size="md">
					<div className={classes.inner}>
						<div className={classes.content}>
							<Title className={classes.title}>
								Your portal to{" "}
								<Text
									component="span"
									inherit
									variant="gradient"
									gradient={{ from: "pink", to: "blue" }}
								>
									accessible scholastic resources
								</Text>
							</Title>

							<Text className={classes.description} mt={30}>
								Here in Cielito Zamora SHS we aim to provide a platform for
								students to access scholastic resources in a more accessible
								manner.
							</Text>

							<Link href="/academics">
								<Button
									variant="gradient"
									gradient={{ from: "pink", to: "blue" }}
									size="xl"
									className={classes.control}
									mt={40}
								>
									See our academic courses
								</Button>
							</Link>
						</div>
					</div>
				</Container>
			</div>
			<Container mt={100}>
				<SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
					<Stack>
						<Title order={2} align="center">
							Our Mission
						</Title>
						<Image src="https://static.wixstatic.com/media/a7a74e_5dafcf48e3424ebb904583df725d09b3~mv2_d_1600_1600_s_2.jpg/v1/crop/x_0,y_67,w_1600,h_1467/fill/w_613,h_562,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a7a74e_5dafcf48e3424ebb904583df725d09b3~mv2_d_1600_1600_s_2.jpg" />
					</Stack>
					<Stack>
						<Title order={2} align="center">
							Our Vision and Values
						</Title>
						<Image src="https://static.wixstatic.com/media/a7a74e_9de9bb0b56574d56b88a84ab9985ba52~mv2_d_1600_1600_s_2.jpg/v1/fill/w_614,h_662,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a7a74e_9de9bb0b56574d56b88a84ab9985ba52~mv2_d_1600_1600_s_2.jpg" />
					</Stack>
				</SimpleGrid>
			</Container>
			<Container mt={100}>
				<LandingCarousel />
				<GetInTouch />
			</Container>
		</>
	);
};

export default HomePage;
