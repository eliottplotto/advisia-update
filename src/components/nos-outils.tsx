import { Briefcase, Shield, HeartHandshake } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    title: "On comprend votre métier avant de toucher à la tech.",
    subtitle: "Chaque projet commence par une analyse de vos enjeux, pas de vos outils.",
  },
  {
    icon: Shield,
    title: "Vous gardez le contrôle et l'autonomie sur vos outils.",
    subtitle: "Formation incluse, documentation livrée, aucune dépendance forcée.",
  },
  {
    icon: HeartHandshake,
    title: "On reste disponibles après la livraison.",
    subtitle: "Support continu, évolutions, accompagnement mensuel si vous le souhaitez.",
  },
];

export default function NosOutils() {
  return (
    <section
      className="select-none py-12 md:py-16"
      style={{ background: "transparent", color: "var(--text-primary)" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <h2
          className="font-mono text-xs text-center uppercase tracking-[0.15em] mb-10"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Comment on travaille
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(201,254,110,0.08)", border: "1px solid rgba(201,254,110,0.15)" }}
              >
                <item.icon size={22} style={{ color: "#c9fe6e" }} />
              </div>
              <div>
                <p className="font-semibold text-white text-base leading-snug mb-1">{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
