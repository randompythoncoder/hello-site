"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-cyan-50 text-slate-900">
      <header className="sticky top-0 border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold tracking-tight">FundraiserKit</h1>

          <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="/" className="transition hover:text-cyan-700">Home</a>
            <a href="/products" className="transition hover:text-cyan-700">Products</a>
            <a href="/about" className="transition hover:text-cyan-700">About</a>
            <a href="/contact" className="transition hover:text-cyan-700">Contact</a>
          </nav>

          <a
            href="/products"
            className="rounded-xl bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105 hover:bg-cyan-700"
          >
            Get Started
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-5 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-sm text-cyan-700">
            Modern Fundraising Solutions
          </div>

          <h2 className="text-6xl font-bold leading-tight tracking-tight">
            Fundraising made clean, simple, and professional.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            FundraiserKit helps schools, teams, and organizations run beautiful, organized fundraising campaigns with less stress and better results.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="/products"
              className="rounded-2xl bg-slate-900 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-cyan-700"
            >
              View Products
            </a>

            <a
              href="/contact"
              className="rounded-2xl border border-slate-300 bg-white px-7 py-4 font-semibold transition hover:scale-105 hover:bg-slate-100"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-slate-200 bg-white/80 p-10 shadow-2xl backdrop-blur"
        >
          <div className="space-y-5">
            <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold">Premium Fundraiser Kits</h3>
              <p className="mt-2 text-sm text-cyan-50">
                Designed for schools, clubs, sports teams, and communities.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <h4 className="font-semibold">📦 Easy Setup</h4>
              <p className="mt-2 text-sm text-slate-600">
                Launch campaigns quickly with organized materials and guides.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <h4 className="font-semibold">⚡ Fast & Modern</h4>
              <p className="mt-2 text-sm text-slate-600">
                Smooth experience built with modern technology and fast hosting.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <h4 className="font-semibold">🤝 Trusted Feel</h4>
              <p className="mt-2 text-sm text-slate-600">
                Elegant design that feels reliable and professional.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
