export default {
    name: 'food',
    type: 'document',
    title: 'Food',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Food Name',
        description: 'The name of the food item (e.g., Margherita Pizza, Caesar Salad)',
        validation: (Rule:any) => Rule.required().max(100).warning('Food name should not exceed 100 characters.'),
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'Unique identifier for the food item, used for URL generation',
        options: {
          source: 'name',
          maxLength: 96,
        },
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: 'image',
        type: 'image',
        title: 'Food Image',
        description: 'A high-quality image of the food item',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'A detailed description of the food item, including flavors, ingredients, and serving suggestions',
        validation: (Rule:any) => Rule.max(500).warning('Description should not exceed 500 characters.'),
      },
      {
        name: 'category',
        type: 'reference',
        to: [{ type: 'category' }],
        title: 'Category',
        description: 'Category of the food item (e.g., Appetizers, Main Course, Desserts)',
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: 'ingredients',
        type: 'array',
        title: 'Ingredients',
        description: 'Detailed list of ingredients used in the food item',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'name',
                type: 'string',
                title: 'Ingredient Name',
                validation: (Rule:any) => Rule.required(),
              },
              {
                name: 'quantity',
                type: 'string',
                title: 'Quantity',
                description: 'The quantity of the ingredient (e.g., 200g, 1 cup)',
              },
            ],
          },
        ],
      },
      {
        name: 'nutritionalInformation',
        type: 'object',
        title: 'Nutritional Information',
        description: 'Nutritional values for the food item per serving',
        fields: [
          { name: 'calories', type: 'number', title: 'Calories (kcal)' },
          { name: 'protein', type: 'number', title: 'Protein (g)' },
          { name: 'fat', type: 'number', title: 'Fat (g)' },
          { name: 'carbohydrates', type: 'number', title: 'Carbohydrates (g)' },
          { name: 'fiber', type: 'number', title: 'Fiber (g)' },
          { name: 'sugar', type: 'number', title: 'Sugar (g)' },
          { name: 'sodium', type: 'number', title: 'Sodium (mg)' },
        ],
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
        description: 'The price of the food item',
        validation: (Rule:any) => Rule.min(0).warning('Price should be a positive number.'),
      },
      {
        name: 'availability',
        type: 'boolean',
        title: 'Available',
        description: 'Indicates whether the food item is currently available for order',
      },
      {
        name: 'spiceLevel',
        type: 'string',
        title: 'Spice Level',
        description: 'Level of spiciness (if applicable)',
        options: {
          list: [
            { title: 'Not Spicy', value: 'not_spicy' },
            { title: 'Mild', value: 'mild' },
            { title: 'Medium', value: 'medium' },
            { title: 'Hot', value: 'hot' },
            { title: 'Extra Hot', value: 'extra_hot' },
          ],
        },
      },
      {
        name: 'cuisine',
        type: 'string',
        title: 'Cuisine',
        description: 'Type of cuisine this food item belongs to (e.g., Italian, Indian, Chinese)',
      },
      {
        name: 'chef',
        type: 'reference',
        to: [{ type: 'chef' }],
        title: 'Chef',
        description: 'The chef responsible for creating this food item',
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        description: 'Keywords associated with the food item (e.g., Vegan, Gluten-Free, Best Seller)',
        of: [{ type: 'string' }],
      },
      {
        name: 'preparationTime',
        type: 'number',
        title: 'Preparation Time (Minutes)',
        description: 'Time required to prepare the food item',
        validation: (Rule:any) => Rule.min(0).warning('Preparation time should be positive.'),
      },
      {
        name: 'allergens',
        type: 'array',
        title: 'Allergens',
        description: 'List of allergens present in the food item (e.g., Nuts, Dairy, Gluten)',
        of: [{ type: 'string' }],
      },
      {
        name: 'rating',
        type: 'array',
        title: 'Ratings and Reviews',
        description: 'Customer ratings and reviews for the food item',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'reviewerName', type: 'string', title: 'Reviewer Name' },
              { name: 'reviewText', type: 'text', title: 'Review Text' },
              {
                name: 'rating',
                type: 'number',
                title: 'Rating',
                validation: (Rule:any) => Rule.min(1).max(5).warning('Rating should be between 1 and 5.'),
              },
            ],
          },
        ],
      },
      {
        name: 'caloriesPerServing',
        type: 'number',
        title: 'Calories Per Serving',
        description: 'The number of calories in a single serving of the food item',
      },
      {
        name: 'discount',
        type: 'number',
        title: 'Discount Percentage',
        description: 'Discount on the price of the food item, if applicable',
        validation: (Rule:any) => Rule.min(0).max(100).warning('Discount should be between 0 and 100%.'),
      },
      {
        name: 'stockQuantity',
        type: 'number',
        title: 'Stock Quantity',
        description: 'Number of units available in stock',
      },
    ],
  };
  
  