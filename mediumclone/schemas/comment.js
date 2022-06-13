export default {
  name: "comment",
  type: "document",
  title: "Comment",
  fields: [
    { name: "name", type: "string" },
    {
      title: "Approved",
      name: "approved",
      type: "boolean",
      description:
        "Comments must be approved by an admin before they are visible",
    },
    {
      name: "email",
      type: "string",
    },
    {
      name: "comment",
      type: "text",
    },
    {
      name: "post",
      type: "reference",
      to: [{ type: "post" }],
    },
  ],
};
