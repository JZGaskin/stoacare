export default {
  name: "companylogoimg",
  title: "Company Logo",
  type: "image",

  options: {
    hotspot: true, // <-- Defaults to false
  },
  fields: [
    {
      name: "caption",
      title: "Caption",
      type: "string",
      options: {
        isHighlighted: false, // <-- make this field easily accessible
      },
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: "attribution",
      type: "string",
      title: "Attribution",
    },
  ],
}
