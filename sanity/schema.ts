import { type SchemaTypeDefinition } from "sanity";
import announcements from "./schemas/announcements";
import author from "./schemas/author";
import dll from "./schemas/dll";
import studentGuides from "./schemas/student-guides";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [announcements, author, dll, studentGuides],
};
