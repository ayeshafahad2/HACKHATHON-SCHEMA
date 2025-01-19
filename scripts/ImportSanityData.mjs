import { createClient } from "@sanity/client";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Sanity client configuration
const client = createClient({
  projectId: "sth21tn", // Replace with your actual project ID
  dataset: "production", // Replace with your dataset name, typically 'production'
  apiVersion: "2025-01-19", // Use the current or relevant date
  token: process.env.SANITY_TOKEN, // Token loaded from environment variables
  useCdn: false, // Set to false to fetch fresh data
});

// Debugging: Verify environment variables are loaded correctly
if (!process.env.SANITY_TOKEN) {
  console.error("Error: SANITY_TOKEN is not defined in your environment variables.");
  process.exit(1); // Exit if token is missing
}

console.log("Sanity Token Loaded Successfully.");

// Fetch data from Sanity
(async () => {
  try {
    const response = await client.fetch('*[_type == "specialmenu"]'); // Replace "s" with your actual schema type
    console.log("Sanity Data:", response);
  } catch (error) {
    console.error("Sanity Client Error:", error.message);
    process.exit(1); // Exit with error
  }
})();
