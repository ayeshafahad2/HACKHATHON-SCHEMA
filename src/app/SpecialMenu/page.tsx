'use client';

import { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';

interface MenuItem {
  _id: string;
  food: string;
  price: string;
  description: string;
  image_url: string;
  ratings: {
    fivestar?: string;
    fourstar?: string;
    threestar?: string;
  };
}

const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '0sth21tn',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-19',
    useCdn: true,
  });
export default function SpecialMenu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const data = await client.fetch(`*[_type == "menuItem"]`);
      setMenuItems(data);
    };

    fetchMenuItems();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Special Menu</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl"
          >
            <img
              src={item.image_url}
              alt={item.food}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-bold">{item.food}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-sm font-semibold">Price: {item.price}</p>
            <p className="text-sm">
              Ratings: {item.ratings.fivestar || item.ratings.fourstar || item.ratings.threestar || 'No rating'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
