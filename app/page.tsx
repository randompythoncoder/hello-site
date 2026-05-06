"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-amber-50 text-slate-900">
      <header className="sticky top-0 border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold tracking-tight">FundraiserKit</h1>

          <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="/" className="transition hover:text-amber-600">Home</a>
            <a href="/products" className="transition hover:text-amber-600">Products</a>
            <a href="/about" className="transition hover:text-amber-600">About</a>
            <a href="/contact" className="transition hover:text-amber-600">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-5 inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-sm text-amber-700">
            Premium Fundraising Solutions
          </div>

          <h2 className="text-6xl font-bold leading-tight tracking-tight">
            Fundraising made simple, modern, and trusted.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            FundraiserKit helps schools, sports teams, and organizations run clean and professional fundraising campaigns with ease.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="/products"
              className="rounded-2xl bg-slate-900 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-amber-600"
            >
              Get Started
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
            <div className="rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold">Premium Fundraiser Kits</h3>
              <p className="mt-2 text-sm text-yellow-50">
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
              <h4 className="font-semibold">⚡ Smooth Experience</h4>
              <p className="mt-2 text-sm text-slate-600">
                Fast, modern, and responsive design built for trust.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <h4 className="font-semibold">🤝 Elegant & Professional</h4>
              <p className="mt-2 text-sm text-slate-600">
                Clean visuals with premium gold accents and smooth animations.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
