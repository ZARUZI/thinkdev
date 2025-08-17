export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-20">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang ThinkDev</h1>
        <p className="text-neutral-400 leading-relaxed mb-8">
          ThinkDev adalah studio digital yang lahir dari semangat untuk 
          mengubah <span className="text-blue-400">ide sederhana</span> 
          menjadi <span className="text-blue-400">produk digital bernilai nyata</span>.  
          Kami percaya bahwa teknologi harus dekat dengan manusia, bukan 
          sekadar barisan kode.
        </p>

        <h2 className="text-2xl font-semibold mb-4">🌟 Visi Kami</h2>
        <p className="text-neutral-400 leading-relaxed mb-8">
          Menjadi partner strategis dalam menghadirkan inovasi digital 
          yang relevan, modern, dan berdampak bagi bisnis maupun individu.
        </p>

        <h2 className="text-2xl font-semibold mb-4">💡 Apa yang Kami Lakukan</h2>
        <ul className="list-disc pl-6 space-y-2 text-neutral-400 mb-8">
          <li>Web & Mobile Development</li>
          <li>Integrasi AI dan Chatbot</li>
          <li>UI/UX & Branding</li>
          <li>Dashboard & Sistem Manajemen</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">🤝 Kenapa Pilih ThinkDev?</h2>
        <p className="text-neutral-400 leading-relaxed mb-8">
          Karena kami tidak hanya menulis kode, tapi juga membantu 
          merancang pengalaman, strategi, dan impact yang ingin dicapai.
        </p>

        <p className="text-center mt-12">
          <a
            href="/contact"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-lg font-medium"
          >
            Hubungi Kami
          </a>
        </p>
      </section>
    </main>
  );
}
