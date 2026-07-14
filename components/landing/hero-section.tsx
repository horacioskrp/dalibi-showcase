import { ArrowRight, BarChart3, BookOpen, CheckCircle2, GraduationCap, NotebookPen, UserCheck, Users, Wallet } from "lucide-react";

const modules = [
  { label: "Élèves", icon: Users, grad: "from-blue-500 to-blue-600" },
  { label: "Notes & Bulletins", icon: NotebookPen, grad: "from-violet-500 to-purple-600" },
  { label: "Examens", icon: GraduationCap, grad: "from-indigo-500 to-blue-600" },
  { label: "Présences", icon: UserCheck, grad: "from-emerald-500 to-teal-600" },
  { label: "Comptabilité", icon: Wallet, grad: "from-amber-500 to-orange-600" },
  { label: "Statistiques", icon: BarChart3, grad: "from-sky-500 to-blue-600" },
];

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

          {/* Colonne aperçu produit — fidèle au tableau de bord Dalibi */}
          <div className="relative gs-fade-up">
            <div className="absolute -inset-6 bg-linear-to-tr from-brand-3/20 to-brand-1/10 blur-3xl rounded-[2rem] -z-10" />

            {/* Pastilles décoratives */}
            <span className="hidden md:block absolute -top-3 right-12 w-3 h-3 rounded-full bg-brand-2/60" aria-hidden />
            <span className="hidden md:block absolute bottom-10 -left-3 w-2.5 h-2.5 rounded-full bg-emerald-400/70" aria-hidden />

            {/* Carte flottante : bulletin validé */}
            <div className="float-soft hidden sm:flex items-center gap-3 absolute -top-5 -right-3 md:-right-6 z-20 card px-3.5 py-2.5 shadow-xl">
              <div className="inline-flex p-2 rounded-xl bg-linear-to-br from-violet-500 to-purple-500 text-white shadow-md shadow-violet-500/30">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold leading-none">Bulletin validé</div>
                <div className="text-[11px] text-muted mt-0.5">Moyenne 14,2 · 3ᵉ A</div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            </div>

            {/* Carte flottante : paiement reçu */}
            <div className="float-soft-delayed hidden sm:flex items-center gap-3 absolute -bottom-5 -left-3 md:-left-6 z-20 card px-3.5 py-2.5 shadow-xl">
              <div className="inline-flex p-2 rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/30">
                <Wallet className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold leading-none">Paiement reçu</div>
                <div className="text-[11px] text-muted mt-0.5">+ 75 000 F · reçu n°1042</div>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-600 -rotate-45" />
            </div>

            {/* Carte flottante : élèves */}
            <div className="float-soft hidden sm:flex items-center gap-3 absolute top-16 -left-4 md:-left-9 z-20 card px-3.5 py-2.5 shadow-xl">
              <div className="inline-flex p-2 rounded-xl bg-linear-to-br from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/30">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold leading-none">Nouvel élève</div>
                <div className="text-[11px] text-muted mt-0.5">Inscription enregistrée</div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
            </div>

            {/* Fenêtre application — page d'accueil */}
            <div className="card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-amber-400/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
                <span className="ml-3 text-xs text-muted">Dalibi — Accueil</span>
              </div>

              <div className="p-4 sm:p-5 space-y-4">
                {/* En-tête façon page d'accueil */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-blue-600">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm font-bold">Dalibi</span>
                  </div>
                  <span className="inline-flex items-center text-[10px] font-medium text-white bg-blue-600 rounded-lg px-2 py-1">
                    Se connecter
                  </span>
                </div>

                {/* Titre */}
                <div className="text-center pt-1">
                  <div className="text-base font-bold">
                    Bienvenue sur <span className="text-blue-600">Dalibi</span>
                  </div>
                  <div className="text-[11px] text-muted mt-0.5">Choisissez un module pour commencer.</div>
                </div>

                {/* Cartes de modules */}
                <div className="grid grid-cols-3 gap-2.5">
                  {modules.map((m) => (
                    <div key={m.label} className="rounded-xl border border-border p-2.5">
                      <div className={`inline-flex p-1.5 rounded-lg bg-linear-to-br ${m.grad} text-white shadow-sm`}>
                        <m.icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-[11px] font-semibold mt-1.5 leading-tight">{m.label}</div>
                      <div className="mt-1 inline-flex items-center gap-0.5 text-[9px] font-medium text-blue-600">
                        Se connecter <ArrowRight className="w-2.5 h-2.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
