import ProductCard from "./productCard";

export default function Offers() {
  const items = [
    { title: "Suit Set", price: "$119.99", image: "https://images.unsplash.com/photo-1593032465171-8e3f3b8c7b1f" },
    { title: "Polo Shirt", price: "$49.99", image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070" },
    { title: "Designer Bag", price: "$99.99", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3" },
    { title: "Party Dress", price: "$39.99", image: "https://images.unsplash.com/photo-1521336575822-6da63fb45455" },
  ];

  return (
    <section className="p-10">
      <h3 className="text-3xl font-bold mb-6">Special Offers</h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <ProductCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}