export default {
	name: "author",
	title: "Author",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Author Name",
			type: "string",
		},
		{
			name: "avatar",
			title: "Author Avatar",
			type: "image",
			options: {
				hotspot: true,
			},
		},
	],
};