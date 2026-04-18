"use client";

import { useEffect, useState } from "react";

export default function TodaysSale() {
  const [time, setTime] = useState(45330); // seconds (12:45:30)

  // ⏳ Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (t: number) => {
    const h = String(Math.floor(t / 3600)).padStart(2, "0");
    const m = String(Math.floor((t % 3600) / 60)).padStart(2, "0");
    const s = String(t % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const products = [
    {
      title: "Premium Leather Jacket",
      image: "https://images.unsplash.com/photo-1520975922284-8b456906c813",
      discount: "-40%",
    },
    {
      title: "Elegant Summer Dress",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
      discount: "-42%",
    },
    {
      title: "Trendy Sneakers",
      image: "https://images.unsplash.com/photo-1528701800489-20be3c7f8d02",
      discount: "-40%",
    },
    {
      title: "Luxury Watch",
      image: "https://images.unsplash.com/photo-1519744346363-d2d8a5b6b5c6",
      discount: "-35%",
    },
  ];

  return (
    <section className="p-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4x font-bold">Today's Sale</h2>
          <p className="text-gray-600">
            Limited time offers - Don't miss out!
          </p>
        </div>

        {/* Timer */}
        <div className="bg-red-600 text-white px-6 py-4 rounded-xl text-center">
          <p className="text-white">Ends in:</p>
          <h3 className="text-2xl font-bold">{formatTime(time)}</h3>
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg"
          >
            <div className="relative">

              {/* Discount badge */}
              <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded">
                {item.discount}
              </span>

              {/* Wishlist icon */}
              <span className="absolute top-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer">
                ❤️
              </span>

              {/* Image */}
              <img
                src={item.image}
                className="h-56 w-full object-cover"
              />
            </div>

            {/* Title */}
            <div className="p-4">
              <h4 className="font-semibold">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}