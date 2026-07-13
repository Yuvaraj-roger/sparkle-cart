import { useEffect, useState } from "react";
import { products } from "../data/products";
import { LiveActivity } from "../types";

const NAMES = ["Aarav", "Priya", "Meera", "Karthik", "Divya", "Rahul", "Sneha", "Vikram", "Anjali", "Rohan"];
const CITIES = ["Tiruppur", "Chennai", "Bengaluru", "Coimbatore", "Hyderabad", "Mumbai", "Pune", "Kochi"];

/** Streams a new simulated purchase notification every few seconds. */
export function useLiveActivityFeed(intervalMs = 7000) {
  const [activity, setActivity] = useState<LiveActivity | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      const product = products[Math.floor(Math.random() * products.length)];
      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      const city = CITIES[Math.floor(Math.random() * CITIES.length)];
      setActivity({
        id: `${Date.now()}`,
        name,
        city,
        productName: product.name,
        timestamp: Date.now()
      });
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return activity;
}
