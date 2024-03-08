export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Procuct Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Procuct Description',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Procuct Price',
      type: 'number',
    },
    {
      name: 'price_id',
      title: 'Stripe Procuct Price ID',
      type: 'string',
    },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'slug',
      title: 'Product Slug',
      type: 'slug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
  ],
}