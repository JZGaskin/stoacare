export default {
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
}
