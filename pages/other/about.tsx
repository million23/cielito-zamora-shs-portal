import {
	Container,
	Flex,
	Grid,
	Image,
	Input,
	SimpleGrid,
	Text,
	Textarea,
	Title,
} from "@mantine/core";

const AboutPage = () => {
	return (
		<Container>
			<Title mt={75}>Contact Us</Title>
			<Grid grow columns={2} mt={20}>
				<Grid.Col span={1}>
					<Input.Wrapper label="Your Name" required>
						<Input />
					</Input.Wrapper>
				</Grid.Col>
				<Grid.Col span={1}>
					<Input.Wrapper label="Your Email" required>
						<Input />
					</Input.Wrapper>
				</Grid.Col>
				<Grid.Col span={2}>
					<Input.Wrapper label="Subject" required>
						<Input />
					</Input.Wrapper>
				</Grid.Col>
				<Grid.Col span={2}>
					<Textarea
						autosize
						minRows={5}
						mih={200}
						maxRows={10}
						label="Message"
						required
					/>
				</Grid.Col>
			</Grid>

			<Title mt={75}>About</Title>
			<Flex direction="column" gap={"xl"}>
				<Text size="xl" mt={25} mb={10}>
					Welcome to Cielito Zamora Senior High School&apos;s website!
				</Text>
				<Text mb={10}>
					Cielito Zamora Senior High School is a premier educational institution
					in the Philippines, known for its commitment to academic excellence,
					character formation, and community service. We offer a comprehensive
					and well-rounded senior high school program that prepares our students
					for success in their chosen career paths and in life.
				</Text>
				<Text mb={10}>
					Our school was established in [insert year] with a vision to provide
					high-quality education to the youth of our community. Over the years,
					we have grown and expanded our academic offerings to meet the changing
					needs of our students and the demands of the modern world.
				</Text>
				<Image
					src="https://static.wixstatic.com/media/a7a74e_1f9a5f9bdffa42f78c73212f8c4da8bb~mv2.jpg/v1/fill/w_980,h_816,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a7a74e_1f9a5f9bdffa42f78c73212f8c4da8bb~mv2.jpg"
					height={200}
				/>
				<Text mb={10}>
					Our faculty members are highly qualified and experienced professionals
					who are passionate about teaching and mentoring our students. They use
					a variety of teaching methodologies and resources to ensure that our
					students receive a well-rounded education that is relevant, engaging,
					and meaningful.
				</Text>
				<Text mb={10}>
					At Cielito Zamora Senior High School, we are committed to developing
					the whole person – academically, emotionally, socially, and
					spiritually. We believe that education is not just about acquiring
					knowledge and skills, but also about developing character, values, and
					a sense of responsibility towards others and the world around us
				</Text>
				<Text mb={10}>
					Our school offers a wide range of co-curricular activities that enable
					our students to develop their talents and interests outside the
					classroom. We have clubs and organizations that cater to different
					interests such as sports, music, arts, and community service. These
					activities help our students to build confidence, leadership skills,
					and a sense of teamwork.
				</Text>
				<Image
					src="https://static.wixstatic.com/media/a7a74e_830d1383df58454eb66310776c0fdb51~mv2.jpg/v1/fill/w_291,h_388,al_c,q_80,usm_0.66_1.00_0.01/a7a74e_830d1383df58454eb66310776c0fdb51~mv2.jpg"
					height={200}
				/>
				<Text mb={10}>
					We take pride in our school&apos;s culture of excellence, integrity,
					and service. Our students are encouraged to strive for excellence in
					everything they do, to act with integrity and respect towards others,
					and to be of service to their community. We believe that these values
					are essential for our students to become responsible and compassionate
					leaders of tomorrow.
				</Text>
				<Text mb={10}>
					We are grateful for the trust and support of our students, parents,
					and the wider community. We are committed to providing the best
					possible education and opportunities for our students, and to
					nurturing a school community that is grounded in excellence,
					integrity, and service.
				</Text>
				<Text mb={10}>
					Thank you for considering Cielito Zamora Senior High School for your
					education. If you have any questions or would like to know more about
					our school, please don&apos;t hesitate to contact us. We would be
					happy to hear from you
				</Text>
			</Flex>
		</Container>
	);
};

export default AboutPage;