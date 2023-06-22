const sponsorship = {
  name: "sponsorship",
  title: "Sponsorship",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Enter the Name",
      type: "string",
    },
    {
      name: "designation",
      title: "Enter the Designation",
      type: "string",
    },
    {
      name: "gitUrl",
      title: "Enter the Github URL",
      type: "url",
    },
    {
      name: "linkedInUrl",
      title: "Enter the LinkedIn URL",
      type: "url",
    },
    {
      name: "portfolioUrl",
      title: "Enter the Portfolio URL",
      type: "url",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      Options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
        },
      ],
    },
  ],
};

export default sponsorship;