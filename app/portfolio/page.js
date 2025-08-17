export default function PortfolioPage() {
  const projects = [
    {
      title: "STIFIn Family App",
      desc: "Aplikasi komunitas dengan fitur chat, forum, gamifikasi XP, dan dashboard admin.",
      link: "#",
      image: "https://via.placeholder.com/600x400.png?text=STIFIn+Family",
    },
    {
      title: "TIME (This Is Math Education)",
      desc: "Platform belajar matematika interaktif dengan soal harian, leaderboard, dan video pembelajaran.",
      link: "#",
      image: "https://via.placeholder.com/600x400.png?text=TIME+App",
    },
    {
      title: "Prototype ThinkDev",
      desc: "Website & dashboard modular untuk kolaborasi tim, search, profile promotor/user.",
      link: "#",
      image: "https://via.placeholder.com/600x400.png?text=Prototype+ThinkDev",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-20">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Portfolio Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden hover:border-blue-600 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-neutral-400 mb-4">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Lihat Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
