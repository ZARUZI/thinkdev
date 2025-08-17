"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 👉 nanti bisa dihubungkan ke email API (misal: EmailJS, Nodemailer, dll.)
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-20">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
        <p className="text-neutral-400 mb-12">
          Punya ide, pertanyaan, atau butuh partner teknologi?  
          Kirim pesan ke ThinkDev dan mari berdiskusi 🚀
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-neutral-900 p-8 rounded-xl border border-neutral-800"
          >
            <div>
              <label className="block mb-2 text-sm">Nama</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Pesan</label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:border-blue-600 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium"
            >
              Kirim Pesan
            </button>
          </form>
        ) : (
          <div className="text-center bg-green-900/20 border border-green-600 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-green-400 mb-3">
              ✅ Pesan Terkirim!
            </h2>
            <p className="text-neutral-400">
              Terima kasih sudah menghubungi ThinkDev.  
              Kami akan balas secepat mungkin 🚀
            </p>
          </div>
        )}

        {/* Contact Info */}
        <div className="mt-16 text-neutral-400 space-y-2">
          <p>📧 Email: hello@thinkdev.com</p>
          <p>📱 WhatsApp: +62 812-3456-7890</p>
          <p>🌐 IG: @thinkdev.id</p>
        </div>
      </section>
    </main>
  );
}
