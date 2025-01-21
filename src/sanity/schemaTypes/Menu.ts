export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the menu item',
      validation:(Rule:any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Slug for the menu item (URL friendly)',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (Rule:any) => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image of the menu item',
      options: {
        hotspot: true
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the menu item',
      validation: (Rule:any) => Rule.required().min(0)
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
      description: 'Discount percentage for the menu item',
      validation: (Rule:any) => Rule.min(0).max(100)
    },
    {
      name: 'optional',
      title: 'Optional',
      type: 'object',
      description: 'Optional customizations for the menu item',
      fields: [
        {
          name: 'size',
          title: 'Size',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Available sizes for the menu item'
        },
        {
          name: 'spice_level',
          title: 'Spice Level',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Available spice levels for the menu item'
        },
        {
          name: 'extra',
          title: 'Extras',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Available extras for the menu item'
        }
      ]
    },
    {
      name: 'special',
      title: 'Special',
      type: 'boolean',
      description: 'Indicates if this is a special menu item'
    }
  ]
};
