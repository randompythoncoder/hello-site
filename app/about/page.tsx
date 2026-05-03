export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
      <h1 className="text-5xl font-bold">About</h1>

      <p className="mt-6 text-gray-600 max-w-xl">
        This is a modern Next.js website built for learning, experimenting,
        and building real projects. More features coming soon.
      </p>

      <a href="/" className="mt-10 border px-6 py-3 rounded-xl hover:bg-gray-100">
        Back Home
      </a>
    </main>
  );
}
