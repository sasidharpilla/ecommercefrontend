export default function Categories() {
  const categories = ["Men", "Women", "Kids", "Accessories"];

  return (
    <section className="p-4 sm:p-6 md:p-10 bg-gray-50">
      <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
        Shop by Category
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-white p-4 sm:p-6 md:p-8 text-center rounded-xl shadow hover:shadow-lg cursor-pointer"
          >
            <h4 className="text-lg sm:text-xl font-semibold">{cat}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}