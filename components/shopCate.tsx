export default function ShopByCategories() {
  const categories = [
    "Watches",
    "Clothing",
    "Shoes",
    "Active Wear",
    "Inners",
    "Casuals",
    "Formals",
  ];

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Shop by Category
      </h2>

      <p className="text-center p=10">
        Explore our wide range of products
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg cursor-pointer"
          >
            <h3 className="font-semibold">{cat}</h3>
           
          </div>
        ))}
      </div>
    </section>
  );
}