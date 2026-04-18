export default function Footer() {
  return (
    <footer className="bg-black text-white p-8 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-bold">About Us</h4>
          <p>Your trusted destination for fashion.</p>
        </div>

        <div>
          <h4 className="font-bold">Quick Links</h4>
          <p>Home</p>
          <p>Products</p>
        </div>

        <div>
          <h4 className="font-bold">Customer Service</h4>
          <p>Contact</p>
        </div>

        <div>
          <h4 className="font-bold">Follow Us</h4>
          <p>Social Media</p>
        </div>
      </div>
    </footer>
  );
}