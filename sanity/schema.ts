import { type SchemaTypeDefinition } from "sanity";
import announcements from "./schemas/announcements";
import author from "./schemas/author";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [announcements, author],
};
