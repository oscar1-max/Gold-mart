export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold tracking-wide">
          GoldMart
        </h1>

        <p className="mt-4 max-w-xl text-lg text-gray-600">
          A premium marketplace connecting buyers and sellers with
          a modern shopping experience.
        </p>

        <button className="mt-8 rounded-full bg-black px-8 py-3 text-white transition hover:bg-yellow-600">
          Start Shopping
        </button>
      </section>
    </main>
  );
}
