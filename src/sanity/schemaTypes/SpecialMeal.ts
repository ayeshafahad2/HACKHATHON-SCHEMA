export default {
  name: 'specialmenu',
  title: 'Special Menu',
  type: 'document',
  fields: [
    {
      name: 'food',
      title: 'Food',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'food', // Generates the slug from the 'food' field
        maxLength: 200, // Sets the maximum length of the slug
      }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables the hotspot feature for the image
      },
    },
    {
      name: 'ratings',
      title: 'Ratings',
      type: 'object',
      fields: [
        {
          name: 'fivestar',
          title: 'Five Star',
          type: 'string',
        },
        {
          name: 'fourstar',
          title: 'Four Star',
          type: 'string',
        },
        {
          name: 'threestar',
          title: 'Three Star',
          type: 'string',
        },
      ],
    },
  ],
};
