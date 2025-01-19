
export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'orderId',
        type: 'string',
        title: 'Order ID',
        description: 'Unique identifier for the order',
      },
      {
        name: 'customer',
        type: 'object',
        title: 'Customer Information',
        fields: [
          {
            name: 'name',
            type: 'string',
            title: 'Customer Name',
            description: 'Name of the customer who placed the order',
          },
          {
            name: 'email',
            type: 'string',
            title: 'Customer Email',
            description: 'Email address of the customer',
          },
          {
            name: 'phone',
            type: 'string',
            title: 'Customer Phone Number',
            description: 'Contact number of the customer',
          },
          {
            name: 'address',
            type: 'text',
            title: 'Customer Address',
            description: 'Complete address of the customer',
          },
        ],
      },
      {
        name: 'items',
        type: 'array',
        title: 'Ordered Items',
        of: [
          {
            type: 'object',
            name: 'item',
            title: 'Item',
            fields: [
              {
                name: 'food',
                type: 'reference',
                to: [{ type: 'food' }],
                title: 'Food Item',
                description: 'Reference to the food item in the Food schema',
              },
              {
                name: 'quantity',
                type: 'number',
                title: 'Quantity',
                description: 'Number of units ordered for this item',
              },
              {
                name: 'price',
                type: 'number',
                title: 'Price',
                description: 'Price of the item at the time of order',
              },
              {
                name: 'notes',
                type: 'string',
                title: 'Special Instructions',
                description: 'Special instructions or preferences for this item',
              },
            ],
          },
        ],
        description: 'List of food items ordered by the customer',
      },
      {
        name: 'totalAmount',
        type: 'number',
        title: 'Total Amount',
        description: 'Total price of the order, including taxes and discounts',
      },
      {
        name: 'discount',
        type: 'number',
        title: 'Discount',
        description: 'Discount applied to the order, if any',
      },
      {
        name: 'tax',
        type: 'number',
        title: 'Tax',
        description: 'Tax applied to the total order amount',
      },
      {
        name: 'status',
        type: 'string',
        title: 'Order Status',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'In Progress', value: 'in_progress' },
            { title: 'Out for Delivery', value: 'out_for_delivery' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Cancelled', value: 'cancelled' },
          ],
        },
        description: 'Current status of the order',
      },
      {
        name: 'orderDate',
        type: 'datetime',
        title: 'Order Date',
        description: 'Date and time when the order was placed',
      },
      {
        name: 'deliveryDetails',
        type: 'object',
        title: 'Delivery Details',
        fields: [
          {
            name: 'deliveryAddress',
            type: 'text',
            title: 'Delivery Address',
            description: 'Address where the order needs to be delivered',
          },
          {
            name: 'deliveryTime',
            type: 'datetime',
            title: 'Expected Delivery Time',
            description: 'Time by which the order is expected to be delivered',
          },
          {
            name: 'deliveryStatus',
            type: 'string',
            title: 'Delivery Status',
            options: {
              list: [
                { title: 'Preparing', value: 'preparing' },
                { title: 'Out for Delivery', value: 'out_for_delivery' },
                { title: 'Delivered', value: 'delivered' },
                { title: 'Failed', value: 'failed' },
              ],
            },
            description: 'Current status of the delivery',
          },
        ],
      },
      {
        name: 'paymentDetails',
        type: 'object',
        title: 'Payment Details',
        fields: [
          {
            name: 'paymentMethod',
            type: 'string',
            title: 'Payment Method',
            options: {
              list: [
                { title: 'Cash on Delivery', value: 'cod' },
                { title: 'Credit/Debit Card', value: 'card' },
                { title: 'Online Payment', value: 'online' },
              ],
            },
            description: 'Mode of payment for the order',
          },
          {
            name: 'paymentStatus',
            type: 'string',
            title: 'Payment Status',
            options: {
              list: [
                { title: 'Pending', value: 'pending' },
                { title: 'Paid', value: 'paid' },
                { title: 'Failed', value: 'failed' },
              ],
            },
            description: 'Current status of the payment',
          },
          {
            name: 'transactionId',
            type: 'string',
            title: 'Transaction ID',
            description: 'Unique ID for the payment transaction',
          },
        ],
      },
    ],
  };
  
  
  