import {
	Button,
	Container,
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

export default () => {
	const { classes } = useStyles();
	return (
		<>
			<div className={classes.root}>
				<Container size="lg">
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
				<LandingCarousel />
				<GetInTouch />
			</Container>
		</>
	);
};
