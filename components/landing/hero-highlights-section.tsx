import { Globe2 } from "lucide-react";
import { quickStats } from "./data";

export function HeroHighlightsSection() {
  const [modules, roles] = quickStats;

  return (
    <section className="pb-8 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card p-6 md:p-8 gs-fade-up grid grid-cols-1 sm:grid-cols-3 items-center divide-y divide-border sm:divide-y-0 sm:divide-x">
          <div className="flex items-center gap-3 pb-5 sm:pb-0 sm:pr-6">
            <span className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
              <Globe2 className="w-5 h-5" />
            </span>
            <p className="text-sm font-medium leading-snug">
              Conçu pour les écoles d&apos;Afrique de l&apos;Ouest
            </p>
          </div>

          <div className="py-5 sm:py-0 text-center sm:px-6">
            <div className="text-3xl md:text-4xl font-bold title-gradient">{modules.value}</div>
            <div className="text-sm text-muted mt-1">{modules.label}</div>
          </div>

          <div className="pt-5 sm:pt-0 text-center sm:pl-6">
            <div className="text-3xl md:text-4xl font-bold title-gradient">{roles.value}</div>
            <div className="text-sm text-muted mt-1">{roles.label}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
