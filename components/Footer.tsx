import {
	ActionIcon,
	Container,
	Group,
	Text,
	createStyles,
	rem,
} from "@mantine/core";

import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
	footer: {
		marginTop: rem(120),
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.colors.dark[6]
				: theme.colors.gray[0],
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
		}`,
	},

	logo: {
		maxWidth: rem(200),

		[theme.fn.smallerThan("sm")]: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		},
	},

	description: {
		marginTop: rem(5),

		[theme.fn.smallerThan("sm")]: {
			marginTop: theme.spacing.xs,
			textAlign: "center",
		},
	},

	inner: {
		display: "flex",
		justifyContent: "space-between",

		[theme.fn.smallerThan("sm")]: {
			flexDirection: "column",
			alignItems: "center",
		},
	},

	groups: {
		display: "flex",
		flexWrap: "wrap",

		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},

	wrapper: {
		width: rem(160),
	},

	link: {
		display: "block",
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[1]
				: theme.colors.gray[6],
		fontSize: theme.fontSizes.sm,
		paddingTop: rem(3),
		paddingBottom: rem(3),

		"&:hover": {
			textDecoration: "underline",
		},
	},

	title: {
		fontSize: theme.fontSizes.lg,
		fontWeight: 700,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		marginBottom: `calc(${theme.spacing.xs} / 2)`,
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
	},

	afterFooter: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: theme.spacing.xl,
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
		}`,

		[theme.fn.smallerThan("sm")]: {
			flexDirection: "column",
		},
	},

	social: {
		[theme.fn.smallerThan("sm")]: {
			marginTop: theme.spacing.xs,
		},
	},
}));

interface FooterLinksProps {
	data: {
		title: string;
		links: { label: string; link: string }[];
	}[];
}

export function FooterLinks({ data }: FooterLinksProps) {
	const { classes } = useStyles();
	const router = useRouter();

	const groups = data.map((group) => {
		const links = group.links.map((link, index) => (
			<Text<"a">
				key={`footer-link-${index}`}
				className={classes.link}
				component="a"
				href={link.link}
				onClick={(event) => event.preventDefault()}
			>
				{link.label}
			</Text>
		));

		return (
			<div className={classes.wrapper} key={group.title}>
				<Text className={classes.title}>{group.title}</Text>
				{links}
			</div>
		);
	});

	return (
		<footer
			style={{ display: router.pathname.includes("studio") ? "none" : "block" }}
			className={classes.footer}
		>
			<Container className={classes.inner}>
				<div className={classes.logo}>
					<p>Cielito Zamora SHS Portal</p>
					<Text size="xs" color="dimmed" className={classes.description}>
						An online portal for Cielito Zamora Senior High School
					</Text>
				</div>
				<div className={classes.groups}>{groups}</div>
			</Container>
			<Container className={classes.afterFooter}>
				<Text color="dimmed" size="sm">
					© {new Date().getFullYear()} Cielito Zamora SHS Portal
				</Text>
			</Container>
		</footer>
	);
}
