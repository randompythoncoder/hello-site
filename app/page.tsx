"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-cyan-50 text-slate-900">
      <header className="sticky top-0 border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold tracking-tight">FundraiserKit</h1>

          <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="/" className="transition hover:text-amber-600">Home</a>
            <a href="/products" className="transition hover:text-amber-600">Products</a>
            href="/products"
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
          <div className="mb-5 inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-sm text-amber-600">
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
