import ProductCard from "./productCard";

export default function Products() {
  const items = [
    { title: "Leather Jacket", price: "$89.99" },
    { title: "Summer Dress", price: "$49.99" },
    { title: "Sneakers", price: "$59.99" },
    { title: "Luxury Watch", price: "$129.99" },
  ];

  return (
    <section className="p-8">
      <h3 className="text-2xl font-semibold mb-6">Most Sold Items</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <ProductCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}