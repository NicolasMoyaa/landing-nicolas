import { waLink } from "../lib/site";

export default function FinalCta() {
  return (
    <>
      <section id="contacto" className="bg-emerald-500 text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            ¿Listo para vender todos los días?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-emerald-50">
            Escribime ahora por WhatsApp. Te respondo yo personalmente, sin
            bots ni formularios eternos.
          </p>
          <a
            href={waLink(
              "Hola Nicolás, estoy listo para llevar mi negocio al siguiente nivel. ¿Hablamos?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-neutral-950 px-10 py-4 text-lg font-bold text-white shadow-xl transition hover:bg-neutral-800"
          >
            Hablar por WhatsApp ahora
          </a>
          <p className="mt-4 text-sm text-emerald-50">
            Presupuesto sin compromiso — respuesta directa
          </p>
        </div>
      </section>
      <footer className="bg-neutral-950 text-neutral-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm sm:flex-row">
          <p>© 2026 Nicolás Moya — San Miguel de Tucumán, Argentina</p>
          <p>Sitios web que venden, hechos con Next.js</p>
        </div>
      </footer>
    </>
  );
}
