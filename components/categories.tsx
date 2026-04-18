export default function Categories() {
  const categories = ["Men", "Women", "Kids", "Accessories"];

  return (
    <section className="p-10 bg-gray-50">
      <h3 className="text-3xl font-bold mb-6 text-center">
        Shop by Category
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-white p-8 text-center rounded-xl shadow hover:shadow-lg cursor-pointer"
          >
            <h4 className="text-xl font-semibold">{cat}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}