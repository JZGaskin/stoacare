export default {
  name: "main_home",
  title: "Main Home Page",
  type: "document",
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "header",
      title: "Header",
      type: "string",
      description:
        "The best way to make sure your homepage is clear and simple is to start with a header that spells out exactly what you offer. This area is the first thing your visitors will see. Make sure it explains, in about two seconds, what you offer. For example: 'We help you plan the perfect vacation.' or 'A new roof, on time and on budget.'. If you confuse people here, they’re gone.",
    },
    {
      name: "subheader",
      title: "Sub-Header",
      type: "string",
      description:
        "You may also put a few words underneath the header about what the company offers, such as 'Best Prices', 'Quality Craftsmanship', etc. This is not the time to be cute, clever, or vague. Again, if you confuse people here, they’re gone.",
    },
    {
      name: "calltoaction",
      title: "Call to Action",
      type: "string",
      description:
        "Examples: Call Today, By Now, Schedule a Call, Download Now, Sign Up, Subscribe, Try for Free, Get Started, Learn More, Join Us, Continue, etc. ",
    },
    {
      name: "background",
      title: "Background",
      type: "background",
    },
    {
      name: "valueproposition",
      title: "The Value Proposition",
      type: "valueproposition",
    },
    {
      name: "theplan",
      title: "The Plan",
      type: "theplan",
    },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "testimonials",
    },
  ],
  preview: {
    select: {
      title: "company",
      subtitle: "header",
      description: "calltoaction",
      media: "background",
    },
  },
}
