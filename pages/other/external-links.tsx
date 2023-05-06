import {
	Anchor,
	Button,
	Card,
	Container,
	Image,
	SimpleGrid,
	Text,
	Title,
} from "@mantine/core";

type ExternalLinks = {
	title: string;
	href: string;
	image?: string;
};

const externalLinks: ExternalLinks[] = [
	{
		title: "DepEd Learner's Information System",
		href: "https://lis.deped.gov.ph/",
		image: "https://agape0928.files.wordpress.com/2017/05/deped-lis.jpg?w=676",
	},
	{
		title: "DepEd Official Website",
		href: "http://www.deped.gov.ph/",
		image:
			"https://www.teacherph.com/wp-content/uploads/2020/02/What-Is-the-Difference-Between-DepEd-Seal-and-DepEd-Logo.png",
	},
	{
		title: "DepEd EhRis",
		href: "https://fo.ehris.deped.gov.ph/index.php/",
		image:
			"https://static.wixstatic.com/media/a7a74e_368b1ef503dc4e10aa0ec0f630c669da~mv2.png/v1/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a7a74e_368b1ef503dc4e10aa0ec0f630c669da~mv2.png",
	},
	{
		title: "DepEd Caloocan",
		href: "https://depedcaloocan.com/",
		image:
			"https://static.wixstatic.com/media/a7a74e_a01db70c846d46119f07233fa17397ac~mv2.png/v1/fill/w_133,h_133,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a7a74e_a01db70c846d46119f07233fa17397ac~mv2.png",
	},
	{
		title: "Cielito Zamora High School Facebook Page",
		href: "https://www.facebook.com/cielitozamoraseniorhigh2016",
		image: "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png",
	},
	{
		title: "DepEd Learning Resource Management and Development System",
		href: "https://lrmds.deped.gov.ph/",
		image: "https://lrmds.deped.gov.ph/images/logo-01.svg",
	},
	{
		title: "Cielito Zamora SHS-SSG Facebook Page",
		href: "https://www.facebook.com/SeniorCielitiansSSG",
		image:
			"https://static.wixstatic.com/media/a7a74e_bf593726387c460da50c6f8f908360bb~mv2.jpg/v1/fill/w_126,h_129,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/98731874_106448421082737_3183879215237824512_n.jpg",
	},
	{
		title: "DepEd Caloocan Learning Resource Portal",
		href: "https://lrcaloocan.wixsite.com/portal",
		image:
			"https://static.wixstatic.com/media/a7a74e_a77ef6c76955431093d744a0d8467f2e~mv2.jpg/v1/fill/w_238,h_52,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screenshot%202021-09-15%20191900.jpg",
	},
	{
		title: "Cielito Zamora Senior High School Youtube Channel",
		href: "https://www.youtube.com/channel/UCRavEIRI_9EGrUZvrRpTEMQ",
		image:
			"https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500",
	},
];

const ExternalLinksPage = () => {
	return (
		<Container>
			<Title mt={75}>External Links</Title>

			<SimpleGrid
				cols={3}
				mt="xl"
				breakpoints={[
					{ maxWidth: "sm", cols: 1 },
					{ maxWidth: "md", cols: 2 },
				]}
			>
				{externalLinks.map((link) => (
					<Anchor
						key={link.title}
						href={link.href}
						target="_blank"
						style={{ textDecoration: "none" }}
					>
						<Card shadow="lg">
							<Card.Section>
								<Image
									src={link.image || "https://via.placeholder.com/300x150"}
									height={150}
									style={{ objectFit: "cover", objectPosition: "center" }}
								/>
							</Card.Section>

							<Text size="xl" fw="bold" mt="sm">
								{link.title}
							</Text>
						</Card>
					</Anchor>
				))}
			</SimpleGrid>
		</Container>
	);
};

export default ExternalLinksPage;