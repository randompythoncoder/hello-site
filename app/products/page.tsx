export default function Products() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-bold">Products</h1>

      <p className="mt-6 text-gray-600 text-lg">
        This is your products page.
      </p>

      <a
        href="/"
        className="mt-10 rounded-xl border px-6 py-3 text-sm hover:bg-gray-100"
      >
        Go Back Home
      </a>
    </main>
  );
}
