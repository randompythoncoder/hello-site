export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 text-center">
      <h1 className="text-5xl font-bold">Home</h1>

      <p className="text-lg text-gray-500 max-w-xl">
        Welcome to my website. More stuff coming very soon.
      </p>

      <div className="flex gap-4">
        <a
          href="/about"
          className="rounded-xl bg-black px-6 py-3 text-white hover:opacity-80"
        >
          About
        </a>

        <a
          href="/contact"
          className="rounded-xl border border-gray-300 px-6 py-3 hover:bg-gray-100"
        >
          Contact
        </a>
      </div>
    </main>
  );
}
