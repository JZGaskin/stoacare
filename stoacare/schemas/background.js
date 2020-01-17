export default {
  name: "background",
  title: "Background",
  type: "image",
  description:
    "Use images that communicate the transformation you offer. For example, if you’re a professional organizer, show the mom playing with her kid in front of the neatly arranged shelves.",
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
