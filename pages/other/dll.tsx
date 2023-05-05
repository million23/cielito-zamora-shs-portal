import {
	ActionIcon,
	Anchor,
	Badge,
	Button,
	Card,
	Container,
	Flex,
	Group,
	SimpleGrid,
	Space,
	Stack,
	Text,
	Title,
} from "@mantine/core";

import { MdDownload } from "react-icons/md";
import { NextPage } from "next";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

type DLL = {
	_id: string;
	title: string;
	file: string;
	category: string | "core-subjects" | "specialized-subjects";
};

export const getStaticProps = async () => {
	const query = groq`
		*[_type == "dll"] | order(title asc) {
			_id,
			title,
			"file": file.asset -> url,
			category
		}	
  `;

	const data = await client.fetch(query);
	const dll = await data;

	return {
		props: {
			dll,
		},
	};
};

const DLLPage: NextPage<{ dll: DLL[] }> = ({ dll }) => {
	return (
		<>
			<Container>
				<Title mt={75}>Downloadable Daily Lesson Logs</Title>

				<Text fw="bold" fz="xl" mt={50} mb={10}>
					Core Subjects
				</Text>
				<SimpleGrid
					cols={3}
					breakpoints={[
						{ maxWidth: "sm", cols: 1 },
						{ maxWidth: "md", cols: 2 },
						{ maxWidth: "lg", cols: 3 },
					]}
				>
					{dll?.map(
						(item) =>
							item.category === "core-subjects" && (
								<Card key={item._id}>
									<Stack justify="space-between" mih={150}>
										<Flex direction="column" gap="sm">
											{(item.file.includes("docx") ||
												item.file.includes("doc")) && <Badge>Document</Badge>}
											{item.file.includes("pdf") && <Badge>PDF</Badge>}
											<Text>{item.title}</Text>
										</Flex>

										<Flex justify="end">
											<Anchor href={item.file} target="_blank">
												<ActionIcon variant="filled" size="xl">
													<MdDownload />
												</ActionIcon>
											</Anchor>
										</Flex>
									</Stack>
								</Card>
							),
					)}
				</SimpleGrid>

				<Text fw="bold" fz="xl" mt={50} mb={10}>
					Specialized Subjects
				</Text>
				<SimpleGrid
					cols={3}
					breakpoints={[
						{ maxWidth: "sm", cols: 1 },
						{ maxWidth: "md", cols: 2 },
						{ maxWidth: "lg", cols: 3 },
					]}
				>
					{dll?.map(
						(item) =>
							item.category === "specialized-subjects" && (
								<Card key={item._id}>
									<Stack justify="space-between" mih={150}>
										<Flex direction="column" gap="sm">
											{(item.file.includes("docx") ||
												item.file.includes("doc")) && <Badge>Document</Badge>}
											{item.file.includes("pdf") && <Badge>PDF</Badge>}
											<Text>{item.title}</Text>
										</Flex>

										<Flex justify="end">
											<Anchor href={item.file} target="_blank">
												<ActionIcon variant="filled" size="xl">
													<MdDownload />
												</ActionIcon>
											</Anchor>
										</Flex>
									</Stack>
								</Card>
							),
					)}
				</SimpleGrid>
			</Container>
		</>
	);
};

export default DLLPage;