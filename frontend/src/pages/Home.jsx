import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-white to-emerald-200">

      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          ExpenseSplit 🌍
        </h1>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-5 py-2.5 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-xl font-semibold text-gray-800 hover:bg-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold shadow hover:opacity-90 transition"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Split Expenses <br />
            <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
              Without Breaking Friendships
            </span>
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Manage group, track expenses, and settle payments easily —
            all in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/register"
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              Get Started ✈️
            </Link>

            <Link
              to="/login"
              className="px-7 py-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-xl font-semibold text-gray-800 hover:bg-white transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="relative h-[350px] rounded-3xl bg-gradient-to-br from-sky-500 to-emerald-500 shadow-2xl overflow-hidden">

          <div className="absolute bottom-0 left-0 w-full h-32 bg-black/20 rounded-t-[100px]" />
          <div className="absolute bottom-0 left-10 w-48 h-24 bg-white/20 rounded-t-[80px]" />
          <div className="absolute bottom-0 right-10 w-64 h-32 bg-white/15 rounded-t-[100px]" />
          <div className="absolute top-10 left-12 w-20 h-20 bg-yellow-200 rounded-full blur-sm" />

          <div className="absolute right-10 top-16 text-white text-xl font-bold">
            Track • Split • Settle 💸
          </div>
        </div>

      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h3 className="text-2xl font-bold text-gray-900 text-center">
          Why Use ExpenseSplit ?
        </h3>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

          {[
            {
              title: "Create Groups",
              desc: "Organize group and invite friends in seconds.",
            },
            {
              title: "Track Expenses",
              desc: "Add who paid, who joined, and split automatically.",
            },
            {
              title: "Settle Instantly",
              desc: "Know who owes whom with final invoices.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl shadow-lg border border-white/50"
            >
              <h4 className="font-bold text-gray-900 text-lg">
                {f.title}
              </h4>
              <p className="text-gray-600 mt-2 text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h3 className="text-2xl font-bold text-gray-900 text-center">
          How It Works ⚙️
        </h3>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

          {[
            "Create a group for your trip",
            "Add members & expenses",
            "Settle payments easily",
          ].map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-xl shadow-lg border border-white/50"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 text-white flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <p className="mt-4 font-semibold text-gray-800">
                {step}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* FOOTER ILLUSTRATION */}
      <div className="relative h-44 bg-gradient-to-br from-sky-500 to-emerald-500 overflow-hidden">

        <div className="absolute bottom-0 left-0 w-full h-24 bg-black/20 rounded-t-[100px]" />
        <div className="absolute bottom-0 left-10 w-48 h-20 bg-white/20 rounded-t-[80px]" />
        <div className="absolute bottom-0 right-10 w-64 h-32 bg-white/15 rounded-t-[100px]" />
        <div className="absolute top-8 left-12 w-16 h-16 bg-yellow-200 rounded-full blur-sm" />

        <div className="absolute right-10 top-16 text-white font-bold">
          “Split Smart. Live Easy.” 🌍
        </div>
      </div>

    </div>
  );
}
