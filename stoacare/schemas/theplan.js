export default {
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
}
