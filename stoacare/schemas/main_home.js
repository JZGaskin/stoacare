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
    },
    {
      name: "valueproposition",
      title: "The Value Proposition",
      type: "object",
      description:
        "Companies tend to sell solutions to EXTERNAL problems, but people buy solutions to INTERNAL problems. Brands that connect their products and services to an ideal of how things should be create greater value for their products.",
      fields: [
        {
          name: "externalproblem",
          type: "string",
          title: "Client's External Problem",
          description:
            "What problem does your product or service offer to solve for the client? Example: I need a tent.",
        },
        {
          name: "internalproblem",
          type: "string",
          title: "Client's Internal Problem",
          description:
            "How does the client feel becasue they can't solve the problem? Example: I long to be the kind of person who goes on adventures.",
        },
        {
          name: "philosophicalproblem",
          type: "string",
          title: "Client's Philosophical Problem",
          description:
            "Explain why the client shouldn't have to deal with the problem. Example: With all our modern problems, people should spend more time in nature.",
        },
      ],
    },
    {
      name: "theplan",
      title: "The Plan",
      type: "object",
      description:
        "Spell out a three-point plan that shows customers how to do business with you. Keep it simple.",
      fields: [
        {
          name: "planstep1",
          type: "string",
          title: "Step 1",
          description: "Example: 'Consult with an expert.'",
        },
        {
          name: "planstep2",
          type: "string",
          title: "Step 2",
          description: "Example: 'Receive a customized plan.'",
        },
        {
          name: "planstep3",
          type: "string",
          title: "Step 3",
          description: "Example: 'Look great to the world.'",
        },
      ],
    },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "object",
      description:
        "Including three customer testimonials will greatly enhance your authority and show people that what you offer really works. Use testimonials that speak to the major objections prospective customers face. For example, if price is a factor, make sure you feature a testimonial that says what a great investment the product was, or how much more money someone’s made as a result of doing business with you.",
      fields: [
        {
          name: "testimonialsgroup1",
          type: "object",
          title: "Testimonials 1",
          fields: [
            { name: "testimonial_1", type: "string" },
            { name: "name1", type: "string", title: "Name 1" },
            { name: "company1", type: "string", title: "Company 1" },
          ],
        },
        {
          name: "testimonialsgroup2",
          type: "object",
          title: "Testimonials 2",
          fields: [
            { name: "testimonial_2", type: "string" },
            { name: "name2", type: "string", title: "Name 2" },
            { name: "company2", type: "string", title: "Company 2" },
          ],
        },
        {
          name: "testimonialsgroup3",
          type: "object",
          title: "Testimonials 3",
          fields: [
            { name: "testimonial_3", type: "string" },
            { name: "name3", type: "string", title: "Name 3" },
            { name: "company3", type: "string", title: "Company 3" },
          ],
        },
      ],
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
