import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="accueil" className="relative overflow-hidden py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          {/* Colonne texte */}
          <div>
            <h1 className="text-4xl md:text-5xl xl:text-[3.4rem] font-bold leading-[1.06] mb-5 gs-fade-up">
              Pilotez toute votre école depuis un{" "}
              <span className="title-gradient">seul tableau de bord</span>
            </h1>

            <p className="text-lg text-muted max-w-xl mb-8 gs-fade-up">
              Inscriptions, notes, bulletins, trésorerie, présences et portail parents : Dalibi
              réunit toute la vie scolaire dans une plateforme claire, rapide et sécurisée.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 gs-fade-up">
              <a href="#contact" className="btn btn-primary text-base px-6 py-3.5">
                Demander une démo gratuite <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#modules" className="btn btn-secondary text-base px-6 py-3.5">
                Voir les fonctionnalités
              </a>
            </div>
          </div>

          {/* Colonne aperçu produit — Dalibi sur ordinateur, tablette et mobile */}
          <div className="relative gs-fade-up pt-6 pb-14 sm:pb-8 md:pl-10">
            <div className="absolute -inset-6 bg-linear-to-tr from-brand-3/20 to-brand-1/10 blur-3xl rounded-[2rem] -z-10" />

            {/* Pastilles décoratives */}
            <span className="hidden md:block absolute -top-1 right-10 w-3 h-3 rounded-full bg-brand-2/60" aria-hidden />
            <span className="hidden md:block absolute bottom-16 left-2 w-2.5 h-2.5 rounded-full bg-emerald-400/70" aria-hidden />

            {/* Tablette (Web) — en retrait, derrière à gauche */}
            <div className="hidden md:block absolute top-4 -left-6 w-[46%] z-0 rotate-[-7deg]">
              <div className="rounded-[0.85rem] bg-neutral-900 p-2 shadow-2xl ring-1 ring-black/10">
                <div className="rounded-[0.6rem] overflow-hidden bg-white">
                  <img src="/dalibi-showcase-tablet.png" alt="Dalibi sur tablette" className="w-full aspect-[4/3] object-cover object-left-top" />
                </div>
              </div>
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-white shadow-md">
                Web · Tablette
              </span>
            </div>

            {/* Ordinateur (Web) — moniteur à bordure noire, élément principal */}
            <div className="relative z-10 max-w-[560px] ml-auto">
              {/* Cadre écran noir — la capture occupe tout l'écran */}
              <div className="rounded-2xl bg-neutral-900 p-2.5 shadow-2xl ring-1 ring-black/40">
                <div className="rounded-lg overflow-hidden bg-white">
                  <img src="/dalibi-showcase.png" alt="Dalibi sur ordinateur (version web)" className="w-full h-auto block" />
                </div>
              </div>
              {/* Pied / stand du moniteur */}
              <div className="hidden sm:block mx-auto h-4 w-16 bg-linear-to-b from-neutral-700 to-neutral-800" />
              <div className="hidden sm:block mx-auto h-1.5 w-40 rounded-full bg-neutral-800" />
              <span className="absolute top-16 -right-2 md:right-4 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-600 text-white shadow-md z-10">
                Web · Ordinateur
              </span>
            </div>

            {/* Téléphone (Mobile) — style iPhone 17, au premier plan */}
            <div className="absolute -bottom-3 sm:-bottom-5 right-2 sm:-right-1 md:right-4 w-[32%] max-w-[160px] z-20">
              <div className="relative rounded-[1.5rem] bg-linear-to-b from-neutral-700 to-neutral-900 p-[6px] shadow-2xl ring-1 ring-white/10">
                {/* Boutons latéraux (titane) */}
                <span className="absolute -left-[2px] top-[22%] h-9 w-[2px] rounded-full bg-neutral-600" aria-hidden />
                <span className="absolute -right-[2px] top-[30%] h-11 w-[2px] rounded-full bg-neutral-600" aria-hidden />
                {/* Écran */}
                <div className="relative rounded-[1.3rem] overflow-hidden bg-white">
                  {/* Dynamic Island */}
                  <span className="absolute top-1.5 left-1/2 -translate-x-1/2 h-3.5 w-11 rounded-full bg-black z-10 shadow-sm" aria-hidden />
                  <img src="/dalibi-showcase-mobile.png" alt="Dalibi sur mobile" className="w-full aspect-[9/18] object-cover object-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
