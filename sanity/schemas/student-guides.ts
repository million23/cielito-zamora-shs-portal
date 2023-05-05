export default {
	name: "student-guides",
	title: "Curriculum Guides",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "strand",
			title: "Strand",
			type: "string",
			options: {
				sortable: true,
				list: [
					{ title: "All", value: "all" },
					{ title: "Humanities and Social Sciences", value: "humss" },
					{
						title: "Science, Technology, Engineering, and Mathematics",
						value: "stem",
					},
					{ title: "General Academic Strand", value: "gas" },
					{ title: "Information and Communications Technology", value: "ict" },
					{ title: "Home Economics", value: "he" },
				],
			},
		},
		{
			name: "category",
			title: "Category",
			type: "string",
			options: {
				list: [
					{ title: "Core Subjects", value: "core-subjects" },
					{ title: "Specialized Subjects", value: "specialized-subjects" },
					{
						title: "Contextualized Subjects",
						value: "contextualized-subjects",
					},
				],
			},
		},
		{
			name: "file",
			title: "File",
			type: "file",
			options: {
				storeOriginalFilename: false,
			},
		},
	],
};