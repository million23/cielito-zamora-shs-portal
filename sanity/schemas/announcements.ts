export default {
	name: "announcements",
	title: "Announcements",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Announcement Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
				slugify: (input: string) =>
					input
						.toLowerCase()
						// Replace spaces with dashes, remove all special characters except dashes and forward slashes
						.replace(/\s+/g, "-")
						.replace(/[^a-zA-Z0-9\/\-]/g, "")
						.slice(0, 200),
			},
		},
		{
			name: "authors",
			title: "Authors",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "author" }],
				},
			],
		},
		{
			name: "description",
			title: "Announcement Description",
			type: "array",
			of: [{ type: "block" }],
		},
	],
};