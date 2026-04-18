import ProductCard from "./productCard";

export default function NewArrivals() {
  const items = [
    {
      title: "Smart Watch Pro",
      price: "$179.99",
      image: "https://images.unsplash.com/photo-1511732351661-36e5f6b56a6b",
    },
    {
      title: "Spring Dress",
      price: "$69.99",
      image: "https://images.unsplash.com/photo-1521336575822-6da63fb45455",
    },
    {
      title: "Leather Jacket",
      price: "$159.99",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    },
    {
      title: "Sport Sneakers",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1528701800489-20be3c7f8d02",
    },
  ];

  return (
    <section className="p-10">
      
       <h3 className="text-3xl font-bold mb-6">New Arrivals ✨</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <ProductCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}