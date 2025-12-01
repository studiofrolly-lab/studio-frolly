export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center px-8 py-6 fixed w-full top-0 left-0 z-50 bg-black/60 backdrop-blur-sm">
        <h1 className="font-semibold text-lg">STUDIO FROLLY</h1>

        <ul className="flex gap-6 text-sm">
          <li><a href="/studio" className="hover:opacity-70">Studio Frolly</a></li>
          <li><a href="/about" className="hover:opacity-70">About</a></li>
          <li><a href="/contact" className="hover:opacity-70">Contact</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section
        id="highlights"
        className="h-screen flex items-center justify-center"
      >
        <h2 className="text-5xl font-bold tracking-tight">HIGHLIGHTS</h2>
      </section>

      {/* ARRIVAL */}
      <section id="arrival" className="h-screen flex items-center justify-center bg-neutral-900">
        <h2 className="text-5xl font-bold tracking-tight">ARRIVAL</h2>
      </section>

      {/* STAY */}
      <section id="stay" className="h-screen flex items-center justify-center bg-neutral-800">
        <h2 className="text-5xl font-bold tracking-tight">STAY</h2>
      </section>

      {/* LAYERS */}
      <section id="layers" className="h-screen flex items-center justify-center bg-neutral-900">
        <h2 className="text-5xl font-bold tracking-tight">LAYERS</h2>
      </section>

      {/* MOMENTS */}
      <section id="moments" className="h-screen flex items-center justify-center bg-neutral-800">
        <h2 className="text-5xl font-bold tracking-tight">MOMENTS</h2>
      </section>
    </main>
  );
}
