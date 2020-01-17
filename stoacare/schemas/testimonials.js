export default {
  name: "testimonials",
  title: "Testimonials",
  type: "object",
  description:
    "Including three customer testimonials will greatly enhance your authority and show people that what you offer really works. Use testimonials that speak to the major objections prospective customers face. For example, if price is a factor, make sure you feature a testimonial that says what a great investment the product was, or how much more money someone’s made as a result of doing business with you.",
  fields: [
    { name: "testimonial", type: "string", title: "Testimonial" },
    { name: "name", type: "string", title: "Name" },
    { name: "company", type: "string", title: "Company" },
  ],
}
