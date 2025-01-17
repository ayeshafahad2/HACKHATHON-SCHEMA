// schemas/recipe.js
export default {
    name: 'recipe',
    type: 'document',
    title: 'Recipe',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Recipe Title',
      },
      {
        name: 'ingredients',
        type: 'array',
        title: 'Ingredients',
        of: [{ type: 'string' }],
      },
      {
        name: 'instructions',
        type: 'text',
        title: 'Cooking Instructions',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Recipe Image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  