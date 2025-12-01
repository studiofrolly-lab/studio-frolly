export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center px-8 py-6 fixed w-full top-0 left-0 z-50 bg-black">
        <h1 className="font-semibold text-lg tracking-tight">STUDIO FROLLY</h1>

        <ul className="flex gap-6 text-sm">
          <li>
            <a href="#highlights" className="hover:opacity-70">
              Studio Frolly
            </a>
          </li>
          <li>
            <a href="#about" className="hover:opacity-70">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:opacity-70">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* HIGHLIGHTS */}
      <section
        id="highlights"
        className="h-screen flex items-center justify-center"
      >
        <h2 className="text-5xl font-bold">HIGHLIGHTS</h2>
      </section>

      {/* ARRIVAL */}
      <section
        id="arrival"
        className="h-screen flex items-center justify-center bg-neutral-900"
      >
        <h2 className="text-5xl font-bold">ARRIVAL</h2>
      </section>

      {/* STAY */}
      <section
        id="stay"
        className="h-screen flex items-center justify-center bg-neutral-800"
      >
        <h2 className="text-5xl font-bold">STAY</h2>
      </section>

      {/* LAYERS */}
      <section
        id="layers"
        className="h-screen flex items-center justify-center bg-neutral-900"
      >
        <h2 className="text-5xl font-bold">LAYERS</h2>
      </section>

      {/* MOMENTS */}
      <section
        id="moments"
        className="h-screen flex items-center justify-center bg-neutral-800"
      >
        <h2 className="text-5xl font-bold">MOMENTS</h2>
      </section>

      {/* CONTACT (임시) */}
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-black"
      >
        <h2 className="text-3xl font-semibold">CONTACT SECTION</h2>
      </section>
    </main>
  );
}
