type Props = {
  title: string;
  price: string;
};

export default function ProductCard({ title, price }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <div className="h-40 bg-gray-200 mb-2"></div>
      <h4 className="font-medium">{title}</h4>
      <p className="text-green-600">{price}</p>
      <button className="mt-2 w-full bg-black text-white py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}