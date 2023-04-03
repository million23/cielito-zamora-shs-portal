import {
	Button,
	Paper,
	Text,
	Title,
	createStyles,
	rem,
	useMantineTheme,
} from "@mantine/core";

import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
	card: {
		height: rem(440),
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "flex-start",
		backgroundSize: "cover",
		backgroundPosition: "center",
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 900,
		color: theme.white,
		lineHeight: 1.2,
		fontSize: rem(32),
		marginTop: theme.spacing.xs,
	},

	category: {
		color: theme.white,
		opacity: 0.7,
		fontWeight: 700,
		textTransform: "uppercase",
	},
}));

interface CardProps {
	image: string;
	title: string;
	category: string;
}

function Card({ image }: { image: string }) {
	const { classes } = useStyles();

	return (
		<Paper
			shadow="md"
			p="xl"
			radius="md"
			sx={{ backgroundImage: `url(${image})` }}
			className={classes.card}
		/>
	);
}

const data = [
	"https://static.wixstatic.com/media/a7a74e_ba18bebac52c45638cbd8214355b21f4~mv2.jpg/v1/fill/w_752,h_352,al_c,q_80,usm_0.66_1.00_0.01/a7a74e_ba18bebac52c45638cbd8214355b21f4~mv2.jpg",
	"https://static.wixstatic.com/media/a7a74e_5e35e7cf140944848038ee61dce70830~mv2.jpg/v1/fill/w_829,h_388,al_c,q_80,usm_0.66_1.00_0.01/a7a74e_5e35e7cf140944848038ee61dce70830~mv2.jpg",
	"https://static.wixstatic.com/media/a7a74e_95ecfcf70cc147f9b8d806a0b81bf702~mv2.jpg/v1/fill/w_469,h_352,al_c,q_80,usm_0.66_1.00_0.01/a7a74e_95ecfcf70cc147f9b8d806a0b81bf702~mv2.jpg",
	"https://static.wixstatic.com/media/a7a74e_f659acf447da4b4ab97e6d5a8da70cd3~mv2.jpg/v1/fill/w_752,h_352,al_c,q_80,usm_0.66_1.00_0.01/a7a74e_f659acf447da4b4ab97e6d5a8da70cd3~mv2.jpg",
	"https://static.wixstatic.com/media/a7a74e_dae0ac4af2ae49ed9c46c2accdf06f35~mv2.jpg/v1/fill/w_752,h_352,al_c,q_80,usm_0.66_1.00_0.01/a7a74e_dae0ac4af2ae49ed9c46c2accdf06f35~mv2.jpg",
	"https://static.wixstatic.com/media/a7a74e_95ecfcf70cc147f9b8d806a0b81bf702~mv2.jpg/v1/fill/w_469,h_352,al_c,q_80,usm_0.66_1.00_0.01/a7a74e_95ecfcf70cc147f9b8d806a0b81bf702~mv2.jpg",
];

export function LandingCarousel() {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);
	const slides = data.map((item, index) => (
		<Carousel.Slide key={`card_${index}`}>
			<Card image={item} />
		</Carousel.Slide>
	));

	return (
		<Carousel
			slideSize="50%"
			breakpoints={[{ maxWidth: "xl", slideSize: "100%", slideGap: rem(2) }]}
			slideGap="xl"
			align="start"
			slidesToScroll={mobile ? 1 : 2}
		>
			{slides}
		</Carousel>
	);
}
