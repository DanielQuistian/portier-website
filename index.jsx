export default function PortierLandingPage() {
  return (
    <main className="min-h-screen bg-[#FFFBE6] text-[#262C2D]">

      {/* HEADER */}
      <section className="px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <header className="flex items-center justify-between py-4">
            <div className="text-3xl md:text-4xl text-[#002569]" style={{ fontFamily: 'Georgia, serif' }}>
              Portier
            </div>
            <a href="#contacto" className="rounded-full border px-5 py-2 text-sm text-[#002569]">
              Contacto
            </a>
          </header>

          <div className="grid gap-14 py-16 md:grid-cols-2 md:items-center">

            {/* HERO TEXT */}
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#26619B]">
                Control · Claridad · Tiempo
              </p>

              <h1 className="text-5xl md:text-7xl" style={{ fontFamily: 'Georgia, serif' }}>
                Recupera el control de tu vida.
              </h1>

              <p className="mt-8 text-lg leading-8">
                Portier recupera control, claridad y tiempo en la vida de médicos y ejecutivos,
                para que puedan diseñar la vida que realmente quieren.
              </p>

              <div className="mt-10 flex gap-4">
                <a href="https://wa.me/528711498929" className="bg-[#002569] text-[#FFFBE6] px-7 py-3 rounded-full">
                  Solicitar una llamada
                </a>
              </div>
            </div>

            {/* HERO CARD */}
            <div className="bg-white p-8 rounded-3xl shadow">
              <p className="text-sm uppercase text-[#26619B]">Portier</p>
              <p className="mt-4 text-2xl" style={{ fontFamily: 'Georgia, serif' }}>
                Transformar el tiempo en una vida con intención.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* QUE ES */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[#26619B]">Qué es Portier</p>
          <h2 className="mt-4 text-4xl" style={{ fontFamily: 'Georgia, serif' }}>
            El éxito profesional no garantiza una vida plena.
          </h2>
          <p className="mt-6 text-lg">
            Puedes tenerlo todo y aún así no tener control de tu tiempo.
            Portier reduce fricción, recupera claridad y devuelve orden.
          </p>
        </div>
      </section>

      {/* NIVELES */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl mb-10" style={{ fontFamily: 'Georgia, serif' }}>
            Ejecutar, organizar y diseñar.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-8 bg-white rounded-3xl shadow">
              <h3 className="text-2xl text-[#002569]">Ejecutar</h3>
              <p className="mt-4">
                Resolver con precisión lo pendiente y liberar carga operativa inmediata.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl shadow">
              <h3 className="text-2xl text-[#002569]">Organizar</h3>
              <p className="mt-4">
                Crear estructura real que reduzca fricción y devuelva claridad.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl shadow">
              <h3 className="text-2xl text-[#002569]">Diseñar</h3>
              <p className="mt-4">
                Alinear tu tiempo con la vida que realmente quieres vivir.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CASOS */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="p-8 bg-white rounded-3xl shadow">
            <h3 className="text-[#002569] text-xl">Médico</h3>
            <p className="mt-3">Agenda llena, poco control.</p>
            <p className="mt-3 text-[#002569]">Más claridad y tiempo real.</p>
          </div>

          <div className="p-8 bg-white rounded-3xl shadow">
            <h3 className="text-[#002569] text-xl">Ejecutivo</h3>
            <p className="mt-3">Días saturados y dispersos.</p>
            <p className="mt-3 text-[#002569]">Estructura y control.</p>
          </div>

          <div className="p-8 bg-white rounded-3xl shadow">
            <h3 className="text-[#002569] text-xl">Empresario</h3>
            <p className="mt-3">Carga constante.</p>
            <p className="mt-3 text-[#002569]">Menos fricción, más intención.</p>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contacto" className="bg-[#262C2D] text-[#FFFBE6] px-6 py-20 text-center">
        <h2 className="text-4xl" style={{ fontFamily: 'Georgia, serif' }}>
          Recupera el control de tu tiempo.
        </h2>

        <p className="mt-6">
          Escríbeme directamente para una conversación privada.
        </p>

        <div className="mt-8">
          <a href="https://wa.me/528711498929" className="bg-[#FFFBE6] text-[#262C2D] px-8 py-3 rounded-full">
            WhatsApp
          </a>
        </div>

        <p className="mt-6 text-sm opacity-70">
          Daniel Quistian Verduzco · Torreón, Coah. · daniel@portierlife.com
        </p>
      </section>

    </main>
  );
}
