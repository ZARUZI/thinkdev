import Image from "next/image";

import Link from "next/link";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      {/* Hero Section + Spotlight */}

      <Spotlight>
        <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 relative overflow-hidden">
          <p className="inline-block rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs text-neutral-400">
            🚀 Open for Projects
          </p>
          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight">
            Ideas → Code → Impact
          </h1>
          <p className="mt-4 text-neutral-400 max-w-xl">
            ThinkDev membantu startup, bisnis, dan personal brand
            mengubah ide menjadi produk digital yang impactful.
          </p>
          <Link
            href="/about"
            className="mt-8 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-lg font-medium"
          >
            Mulai Proyekmu
          </Link>
        </section>
      </Spotlight>

      {/* Value Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Kenapa ThinkDev?</h2>
        <p className="text-neutral-400 text-center max-w-2xl mx-auto">
          Karena kami percaya teknologi bukan sekadar kode,
          tapi alat untuk menciptakan perubahan. ThinkDev adalah partner
          yang membimbingmu dari ide mentah hingga impact nyata.
        </p>
      </section>

      {/* Services */}
      <section className="bg-neutral-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Layanan Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                desc: "Website modern, cepat, dan responsif untuk bisnis atau personal.",
              },
              {
                title: "Mobile Apps",
                desc: "Aplikasi Android & iOS dengan pengalaman pengguna premium.",
              },
              {
                title: "AI & Automation",
                desc: "Integrasi AI, chatbot, hingga workflow otomatis.",
              },
              {
                title: "Branding & UI/UX",
                desc: "Desain elegan yang membuat brand-mu stand out.",
              },
              {
                title: "Dashboard & Tools",
                desc: "Sistem admin, analitik, dan tools custom sesuai kebutuhan.",
              },
              {
                title: "Content & Media",
                desc: "Integrasi video, artikel, hingga platform pembelajaran.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="rounded-xl border border-neutral-800 bg-neutral-950 p-6 hover:border-blue-600 transition"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Siap bangun produk digital impianmu?
        </h2>
        <p className="text-neutral-400 mb-6">
          Mari ngobrol tentang ide dan kita wujudkan bersama.
        </p>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-lg font-medium"
        >
          Hubungi Kami
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-6 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} ThinkDev. All rights reserved.
      </footer>
    </main>
  );
}

