
export default {
    name: 'chef',
    type: 'document',
    title: 'Chef',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Chef Name',
        description: 'Full name of the chef',
      },
      {
        name: 'position',
        type: 'string',
        title: 'Position',
        description: 'Role or title of the chef (e.g., Head Chef, Sous Chef, Line Cook)',
      },
      {
        name: 'experience',
        type: 'number',
        title: 'Years of Experience',
        description: 'Number of years the chef has worked in the culinary field',
      },
      {
        name: 'specialty',
        type: 'array',
        title: 'Specialties',
        description: 'Culinary specializations of the chef (e.g., Italian Cuisine, Pastry)',
        of: [{ type: 'string' }],
      },
      {
        name: 'image',
        type: 'image',
        title: 'Chef Image',
        description: 'Upload an image of the chef',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Short bio or introduction about the chef, highlighting achievements and background',
      },
      {
        name: 'available',
        type: 'boolean',
        title: 'Currently Active',
        description: 'Whether the chef is currently active or available for work',
      },
      {
        name: 'contactDetails',
        type: 'object',
        title: 'Contact Details',
        fields: [
          {
            name: 'email',
            type: 'string',
            title: 'Email Address',
            description: 'Email address of the chef',
          },
          {
            name: 'phone',
            type: 'string',
            title: 'Phone Number',
            description: 'Contact phone number of the chef',
          },
          {
            name: 'socialMedia',
            type: 'array',
            title: 'Social Media Links',
            description: 'Links to the chefs social media profiles (e.g., Instagram, LinkedIn)',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'platform',
                    type: 'string',
                    title: 'Platform',
                    description: 'Name of the social media platform (e.g., Instagram)',
                  },
                  {
                    name: 'url',
                    type: 'url',
                    title: 'Profile URL',
                    description: 'Link to the chefs profile',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'awards',
        type: 'array',
        title: 'Awards & Recognitions',
        description: 'List of awards or recognitions received by the chef',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                type: 'string',
                title: 'Award Title',
                description: 'Name of the award or recognition',
              },
              {
                name: 'year',
                type: 'number',
                title: 'Year Received',
                description: 'Year when the award was received',
              },
            ],
          },
        ],
      },
      {
        name: 'recipes',
        type: 'array',
        title: 'Signature Recipes',
        description: 'List of signature recipes created by the chef',
        of: [
          {
            type: 'reference',
            to: [{ type: 'recipe' }],
          },
        ],
      },
      {
        name: 'availabilitySchedule',
        type: 'array',
        title: 'Availability Schedule',
        description: 'Weekly availability of the chef',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'day',
                type: 'string',
                title: 'Day',
                options: {
                  list: [
                    { title: 'Monday', value: 'monday' },
                    { title: 'Tuesday', value: 'tuesday' },
                    { title: 'Wednesday', value: 'wednesday' },
                    { title: 'Thursday', value: 'thursday' },
                    { title: 'Friday', value: 'friday' },
                    { title: 'Saturday', value: 'saturday' },
                    { title: 'Sunday', value: 'sunday' },
                  ],
                },
              },
              {
                name: 'time',
                type: 'string',
                title: 'Available Time',
                description: 'Time slot when the chef is available (e.g., 9 AM - 5 PM)',
              },
            ],
          },
        ],
      },
      {
        name: 'languages',
        type: 'array',
        title: 'Languages Spoken',
        description: 'Languages the chef can communicate in',
        of: [{ type: 'string' }],
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Chef Rating',
        description: 'Overall rating for the chef (out of 5)',
        validation: (Rule:any) => Rule.min(0).max(5),
      },
    ],
  };
  
  