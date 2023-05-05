import "../styles/Home.module.css";

import {
	Accordion,
	ActionIcon,
	Anchor,
	Box,
	Burger,
	Button,
	ColorScheme,
	ColorSchemeProvider,
	Container,
	Drawer,
	Flex,
	Footer,
	Group,
	Image,
	MantineProvider,
	MediaQuery,
	Menu,
	Navbar,
	Paper,
	Switch,
	Text,
} from "@mantine/core";
import { MdDarkMode, MdLightMode, MdSunny } from "react-icons/md";
import {
	useColorScheme,
	useDisclosure,
	useHotkeys,
	useLocalStorage,
} from "@mantine/hooks";

import { AppProps } from "next/app";
import { FooterLinks } from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const navbarLinks = [
	{
		title: "Academics",
		href: "/academics",
		links: [
			{ title: "Admission", href: "/academics/admission" },
			{ title: "Announcements", href: "/academics/announcements" },
			{ title: "HUMSS", href: "/academics/humanities-and-social-sciences" },
			{
				title: "STEM",
				href: "/academics/science-technology-engineering-and-mathematics",
			},
			{
				title: "ICT",
				href: "/academics/information-and-communications-technology",
			},
			{ title: "HE", href: "/academics/home-economics" },
		],
	},
	{
		title: "Services",
		links: [
			{
				title: "Library",
				href: "https://cielitozamorashslibrary.librarika.com/",
			},
			{ title: "GutenBerg", href: "http://www.gutenberg.org/" },
			{ title: "InfoPlease", href: "http://infoplease.com/" },
		],
	},
	{
		title: "Other Links",
		links: [
			// { title: "Tests and TOS", href: "/other/tests-and-tos" },
			{ title: "DLL", href: "/other/dll" },
			{ title: "Curriculum Guide", href: "/other/curriculum-guide" },
			{ title: "External Links", href: "/other/external-links" },
			{ title: "About and Contact", href: "/other/about" },
			{ title: "Content Studio", href: "/studio" },
		],
	},
];
const footerlinks = [
	{
		title: "Academics",
		links: [
			{ label: "Admission", link: "/academics/admission" },
			{ label: "Announcements", link: "/academics/announcements" },
			{ label: "HUMSS", link: "/academics/humanities-and-social-sciences" },
			{
				label: "STEM",
				link: "/academics/science-technology-engineering-and-mathematics",
			},
			{
				label: "ICT",
				link: "/academics/information-and-communications-technology",
			},
			{ label: "HE", link: "/academics/home-economics" },
		],
	},
	{
		title: "Services",
		links: [
			{
				label: "Library",
				link: "https://cielitozamorashslibrary.librarika.com/",
			},
			{ label: "GutenBerg", link: "http://www.gutenberg.org/" },
			{ label: "InfoPlease", link: "http://infoplease.com/" },
		],
	},
	{
		title: "Other Links",
		links: [
			{ label: "Tests and TOS", link: "/other/tests-and-tos" },
			{ label: "DLL", link: "/other/dll" },
			{ label: "Curriculum Guide", link: "/other/curriculum-guide" },
			{ label: "External Links", link: "/other/external-links" },
			{ label: "About and Contact", link: "/other/about" },
		],
	},
];

export default function App(props: AppProps) {
	const { Component, pageProps } = props;
	const [sideMenuOpen, { toggle: setSideMenuOpen, close: closeSideMenu }] =
		useDisclosure(false);
		const router = useRouter();
const [colorTheme, setColorTheme] = useLocalStorage<ColorScheme>({
		key: "mantine-color-scheme",
		defaultValue: "dark",
		getInitialValueInEffect: true,
	});

	const toggleTheme = (value?: ColorScheme) => {
		setColorTheme(value || (colorTheme === "dark" ? "light" : "dark"));
	};

	useHotkeys([["mod+J", () => toggleTheme()]]);

	return (
		<>
			<Head>
				<title>Cielito Zamora SHS Portal</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<link href="/School Logov2.webp" rel="icon" />
			</Head>

			<ColorSchemeProvider
				colorScheme={colorTheme}
				toggleColorScheme={toggleTheme}
			>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{
						colorScheme: colorTheme,
					}}
				>
					<Paper style={{ position: "sticky", top: 0, zIndex: 50 }}>
						{/* drawer */}
						<Drawer opened={sideMenuOpen} onClose={closeSideMenu} size="sm">
							<Accordion variant="separated" mt="sm">
								{navbarLinks.map((link) => (
									<Accordion.Item key={link.title} value={link.title}>
										<Accordion.Control>{link.title}</Accordion.Control>
										<Accordion.Panel>
											<Flex direction="column" gap="sm">
												{link.href && (
													<Link
														href={link.href}
														style={{ textDecoration: "none" }}
													>
														<Button fullWidth>{link.title} Page</Button>
													</Link>
												)}
												{link.links.map((sub) => (
													<Anchor
														href={sub.href}
														key={sub.title}
														style={{ textDecoration: "none" }}
														target={
															sub.href?.includes("/studio") ? "_blank" : ""
														}
													>
														<Button fullWidth>{sub.title}</Button>
													</Anchor>
												))}
											</Flex>
										</Accordion.Panel>
									</Accordion.Item>
								))}
							</Accordion>
						</Drawer>
						{/* navbar */}
						<Container
							bg=""
							style={{
								position: "sticky",
								top: 0,
								zIndex: 999,
								display: router.pathname.includes("studio") ? "none" : "block",
							}}
						>
							<Flex justify="space-between" align="center" py="xl">
								<Flex align="center" gap="sm">
									<MediaQuery largerThan="md" styles={{ display: "none" }}>
										<Burger opened={sideMenuOpen} onClick={setSideMenuOpen} />
									</MediaQuery>
									<Anchor href="/">
										<Flex align="center" gap="sm">
											<Image width={40} src="/School Logov2.webp" />
											<Text>Cielito Zamora SHS</Text>
										</Flex>
									</Anchor>
								</Flex>
								<MediaQuery smallerThan="md" styles={{ display: "none" }}>
									<Flex gap="sm">
										{navbarLinks.map((link) => (
											<Menu
												key={link.title}
												shadow="md"
												width={200}
												position="bottom-end"
												withArrow
												arrowPosition="center"
												trigger="hover"
											>
												<Menu.Target>
													{link.href ? (
														<Link
															href={link.href}
															style={{ textDecoration: "none" }}
														>
															<Button variant="subtle">
																{link.title} Page
															</Button>
														</Link>
													) : (
														<Button variant="subtle">{link.title}</Button>
													)}
												</Menu.Target>
												<Menu.Dropdown>
													{link.links.map((sub) => (
														<Anchor
															target={
																sub.href?.includes("/studio") ? "_blank" : ""
															}
															key={sub.title}
															href={sub.href}
															style={{ textDecoration: "none" }}
														>
															<Menu.Item>{sub.title}</Menu.Item>
														</Anchor>
													))}
												</Menu.Dropdown>
											</Menu>
										))}
										<Group position="center">
											<Switch
												checked={colorTheme === "dark"}
												onChange={() => toggleTheme()}
												size="lg"
												offLabel={<MdLightMode size="1.25rem" />}
												onLabel={<MdDarkMode size="1.25rem" />}
											/>
										</Group>
									</Flex>
								</MediaQuery>
							</Flex>
						</Container>
					</Paper>

					<Component {...pageProps} />

					<FooterLinks data={footerlinks} />
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
}
