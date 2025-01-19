export default {
  name: 'category',
  type: 'document',
  title: 'Food Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category Name',
      description: 'Name of the category (e.g., Appetizers, Main Courses, Desserts)',
      validation: (Rule:any) => Rule.required().max(100).warning('Category name should not exceed 100 characters.'),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Unique identifier for the category, used in URLs',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule:any) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Category Description',
      description: 'A short description of what this category includes (e.g., “Delicious appetizers for every occasion.”)',
      validation: (Rule:any) => Rule.max(300).warning('Description should not exceed 300 characters.'),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Category Image',
      description: 'A representative image for the category (e.g., a photo of appetizers or desserts)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'parentCategory',
      type: 'reference',
      to: [{ type: 'category' }],
      title: 'Parent Category',
      description: 'If this category is a subcategory, select its parent category (e.g., "Main Courses" under "Food Types")',
    },
    {
      name: 'foodTypes',
      type: 'array',
      title: 'Food Types',
      description: 'List of food types in this category (e.g., Vegetarian, Non-Vegetarian, Vegan, Gluten-Free)',
      of: [{ type: 'string' }],
    },
    {
      name: 'mealType',
      type: 'string',
      title: 'Meal Type',
      description: 'Indicates the type of meal this category represents',
      options: {
        list: [
          { title: 'Breakfast', value: 'breakfast' },
          { title: 'Lunch', value: 'lunch' },
          { title: 'Dinner', value: 'dinner' },
          { title: 'Snack', value: 'snack' },
          { title: 'Dessert', value: 'dessert' },
          { title: 'Beverage', value: 'beverage' },
        ],
      },
    },
    {
      name: 'allergenInfo',
      type: 'array',
      title: 'Allergen Information',
      description: 'Allergens typically found in this category (e.g., Dairy, Nuts, Gluten)',
      of: [{ type: 'string' }],
    },
    {
      name: 'mealPreferences',
      type: 'array',
      title: 'Meal Preferences',
      description: 'Meal preferences for customers (e.g., Vegan, Low Carb, Low Sugar)',
      of: [{ type: 'string' }],
    },
    {
      name: 'available',
      type: 'boolean',
      title: 'Category Availability',
      description: 'Indicates whether this category of food is available for ordering',
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured Category',
      description: 'Indicates whether this category is featured on the main page or menu',
    },
    {
      name: 'priority',
      type: 'number',
      title: 'Category Priority',
      description: 'A priority value to determine the display order of categories (lower values appear first)',
      validation: (Rule:any) => Rule.min(0).warning('Priority should be a positive number.'),
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Category Tags',
      description: 'Tags to help customers filter and find this category (e.g., Healthy, Quick Meals, Special Offers)',
      of: [{ type: 'string' }],
    },
    {
      name: 'promotions',
      type: 'array',
      title: 'Category Promotions',
      description: 'Special promotions or discounts for this category (e.g., “20% off on all Main Courses!”)',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'promotionTitle', type: 'string', title: 'Promotion Title' },
            { name: 'promotionDetails', type: 'text', title: 'Promotion Details' },
            { name: 'discountPercentage', type: 'number', title: 'Discount Percentage', validation: (Rule:any) => Rule.min(0).max(100) },
            { name: 'validUntil', type: 'datetime', title: 'Valid Until' },
          ],
        },
      ],
    },
    {
      name: 'specialOffers',
      type: 'array',
      title: 'Special Offers',
      description: 'Special offers available for this category (e.g., “Buy One Get One Free”)',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'offerTitle', type: 'string', title: 'Offer Title' },
            { name: 'offerDescription', type: 'text', title: 'Offer Description' },
            { name: 'offerValidity', type: 'datetime', title: 'Offer Validity' },
          ],
        },
      ],
    },
  ],
};
