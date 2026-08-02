import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black">
        <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
          <h1 className="text-5xl font-bold tracking-wide md:text-6xl">
            Welcome to GoldMart
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-gray-600">
            A premium marketplace where buyers discover quality products
            and sellers grow their businesses.
          </p>

          <button className="mt-8 rounded-full bg-yellow-600 px-8 py-3 text-white transition hover:bg-black">
            Explore Marketplace
          </button>
        </section>
      </main>
    </>
  );
}
