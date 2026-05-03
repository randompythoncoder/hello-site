export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="border-b border-gray-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-xl font-bold tracking-tight">ShaunSite</div>

          <nav className="hidden gap-8 text-sm font-medium text-gray-600 md:flex">
            <a href="#" className="hover:text-black">Home</a>
            <a href="#" className="hover:text-black">About</a>
            <a href="#" className="hover:text-black">Projects</a>
            <a href="#" className="hover:text-black">Contact</a>
          </nav>

          <a
            href="#"
            className="rounded-xl bg-black px-5 py-2 text-sm font-semibold text-white hover:opacity-80"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full border border-gray-200 bg-gray-50 px-4 py-1 text-sm text-gray-600">
              Modern • Clean • Fast
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight">
              Build something people trust.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Welcome to my website. This is a clean modern homepage built with Next.js and
              deployed on Vercel. More features and pages coming soon.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/products"
                className="rounded-xl bg-black px-6 py-3 text-center text-sm font-semibold text-white hover:opacity-80"
              >
                View Products
              </a>

              <a
                href="#"
                className="rounded-xl border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-900 hover:bg-gray-100"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex gap-6 text-sm text-gray-500">
              <div>
                <p className="font-semibold text-black">Fast</p>
                <p>Hosted on Vercel</p>
              </div>
              <div>
                <p className="font-semibold text-black">Secure</p>
                <p>Modern web stack</p>
              </div>
              <div>
                <p className="font-semibold text-black">Scalable</p>
                <p>Built for growth</p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-10 shadow-sm">
            <h2 className="text-xl font-semibold">Quick Overview</h2>

            <p className="mt-3 text-gray-600">
              This site is a starting point for bigger things — projects, dashboards, and tools.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <p className="text-sm font-semibold text-black">📌 Portfolio</p>
                <p className="mt-1 text-sm text-gray-600">
                  Showcase your skills, projects, and experience.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <p className="text-sm font-semibold text-black">📊 Dashboard</p>
                <p className="mt-1 text-sm text-gray-600">
                  Build live analytics and trading tools later.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <p className="text-sm font-semibold text-black">⚡ Fast Deploy</p>
                <p className="mt-1 text-sm text-gray-600">
                  Every push to GitHub updates your live site instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ShaunSite. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-black">GitHub</a>
            <a href="#" className="hover:text-black">LinkedIn</a>
            <a href="#" className="hover:text-black">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
