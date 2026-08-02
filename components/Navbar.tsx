export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b px-6 py-4">
      <h1 className="text-2xl font-bold text-yellow-600">
        GoldMart
      </h1>

      <div className="hidden gap-6 md:flex">
        <a href="#" className="hover:text-yellow-600">
          Home
        </a>

        <a href="#" className="hover:text-yellow-600">
          Shop
        </a>

        <a href="#" className="hover:text-yellow-600">
          Sellers
        </a>

        <a href="#" className="hover:text-yellow-600">
          Categories
        </a>
      </div>

      <button className="rounded-full bg-black px-5 py-2 text-white hover:bg-yellow-600">
        Sign In
      </button>
    </nav>
  );):
}
