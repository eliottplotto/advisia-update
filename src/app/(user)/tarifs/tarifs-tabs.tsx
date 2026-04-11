"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Check, Search, Zap, Globe, GraduationCap, HeartHandshake, ArrowLeftRight } from "lucide-react";
import { RiArrowRightUpLine } from "@remixicon/react";

type Category = "diagnostics" | "ia" | "web" | "formation" | "partenariat" | "cession";

interface Offre {
  nom: string;
  tagline: string;
  description: string;
  prix: string;
  prixBarre?: string;
  delai?: string;
  inclus: string[];
  benefice?: string;
  categories: Category[];
  featured?: boolean;
  slug: string;
}

const offres: Offre[] = [
  // DIAGNOSTICS
  {
    nom: "Diagnostic Digital & IA",
    tagline: "Savoir où investir en priorité.",
    description: "On analyse vos outils, vos tâches et votre potentiel d'automatisation. Vous repartez avec 5 actions ROI prioritaires, chiffrées.",
    prix: "490 €",
    delai: "48-72h",
    inclus: [
      "Analyse de vos outils et processus",
      "Identification des tâches automatisables",
      "Top 5 actions ROI chiffrées",
      "Rapport 3-5 pages actionnable",
      "Call de restitution 30 min",
    ],
    benefice: "Vous savez exactement où investir en priorité pour gagner du temps et réduire vos coûts.",
    categories: ["diagnostics"],
    slug: "diagnostic-digital-ia",
  },
  {
    nom: "Audit Sécurité",
    tagline: "Identifier vos failles avant qu'elles coûtent cher.",
    description: "Scan de votre code et infrastructure. Chaque vulnérabilité classée par niveau de risque avec le correctif recommandé.",
    prix: "490 €",
    delai: "24-48h",
    inclus: [
      "Scan complet code & infrastructure",
      "Rapport des vulnérabilités (CVSS)",
      "Scoring par niveau de risque",
      "Correctifs recommandés par faille",
      "Accès requis : repo + serveur",
    ],
    benefice: "Vous dormez tranquille. Vous savez quelles failles exposent votre entreprise.",
    categories: ["diagnostics"],
    slug: "audit-securite",
  },
  {
    nom: "Audit Visibilité & SEO",
    tagline: "Comprendre pourquoi vos concurrents vous devancent.",
    description: "Votre présence sur Google, les moteurs IA et les Ads. Scoring par canal, benchmark concurrents, plan d'action priorisé.",
    prix: "490 €",
    delai: "48-72h",
    inclus: [
      "Scoring SEO / SEM / GEO",
      "Benchmark 3-5 concurrents",
      "Quick wins identifiés",
      "Plan d'action par canal",
      "Call de restitution 30 min",
    ],
    benefice: "Vous comprenez pourquoi vos concurrents apparaissent avant vous sur Google.",
    categories: ["diagnostics"],
    slug: "audit-visibilite",
  },
  {
    nom: "Audit E-réputation & Sémantique",
    tagline: "Cartographier ce que le marché dit de vous.",
    description: "Cartographie de ce qui se dit sur vous et votre marché. Clusters sémantiques, poches de croissance, analyse concurrentielle approfondie.",
    prix: "990 €",
    delai: "1-2 semaines",
    inclus: [
      "Extraction textuelle multi-sources",
      "Graphe sémantique de votre marché",
      "Mots-clés classés par intention",
      "Poches de croissance identifiées",
      "Export CSV structuré",
    ],
    benefice: "Vous découvrez ce que le marché dit vraiment de vous et les angles inexploités.",
    categories: ["diagnostics"],
    slug: "audit-e-reputation",
  },
  {
    nom: "Audit Maturité Cession & Reprise",
    tagline: "Valoriser ou évaluer avant la cession.",
    description: "Scoring digital sur 5 axes, quick wins de valorisation, estimation chiffrée de l'impact sur le prix de cession.",
    prix: "990 €",
    delai: "48-72h",
    inclus: [
      "Scoring maturité digitale sur 5 axes",
      "Top 10 actions quick wins",
      "Estimation du gain de valorisation",
      "Entretien de cadrage 1h",
      "Rapport de restitution",
    ],
    benefice: "Un rapport chiffré qui prouve la valeur digitale aux acquéreurs.",
    categories: ["diagnostics", "cession"],
    slug: "audit-maturite-cession",
  },
  {
    nom: "Pack Audit Général",
    tagline: "4 diagnostics combinés, une roadmap complète.",
    description: "4 diagnostics combinés, rapport consolidé, roadmap de transformation chiffrée sur 6-12 mois, restitution direction.",
    prix: "1990 €",
    prixBarre: "2500 €",
    delai: "2-3 semaines",
    inclus: [
      "4 diagnostics combinés",
      "Rapport consolidé cross-analyses",
      "Roadmap chiffrée 6-12 mois",
      "Restitution direction",
      "Économie de 510 € vs. prix séparés",
    ],
    benefice: "Vision complète sur tous les axes digitaux avec roadmap prête à exécuter.",
    categories: ["diagnostics"],
    featured: true,
    slug: "pack-audit-general",
  },
  {
    nom: "Pack Audit + Correction",
    tagline: "Diagnostiquer et corriger en une seule mission.",
    description: "Tout l'Audit Général + corrections appliquées : patches sécurité, corrections SEO, 1 automatisation déployée.",
    prix: "3490 €",
    prixBarre: "4500 €",
    delai: "3-4 semaines",
    inclus: [
      "Tout le Pack Audit Général inclus",
      "Patches sécurité appliqués",
      "Corrections SEO techniques",
      "1 automatisation déployée",
      "Documentation complète",
    ],
    benefice: "On ne fait pas que diagnostiquer, on corrige. Problèmes réglés, pas juste listés.",
    categories: ["diagnostics"],
    slug: "pack-audit-correction",
  },
  // IA & AUTOMATISATION
  {
    nom: "Automatisation Unitaire",
    tagline: "Supprimer une tâche manuelle récurrente.",
    description: "Une automatisation ciblée sur un processus précis. Conçue, déployée et documentée en quelques jours.",
    prix: "390 € - 990 €",
    delai: "2-3 jours",
    inclus: [
      "Analyse du processus ciblé",
      "Conception & déploiement",
      "Tests & validation",
      "Documentation + guide d'usage",
      "Formation à l'utilisation (1h)",
    ],
    benefice: "Une tâche manuelle disparaît du quotidien de vos équipes.",
    categories: ["ia"],
    slug: "auto-unitaire",
  },
  {
    nom: "Pack Automatisation",
    tagline: "Automatiser un processus métier complet.",
    description: "3 à 5 automatisations interconnectées couvrant un processus complet, avec audit des processus inclus.",
    prix: "1990 € - 3500 €",
    delai: "1-2 semaines",
    inclus: [
      "Audit des processus inclus",
      "3 à 5 automatisations déployées",
      "Formation équipes (1h)",
      "Documentation complète",
      "Support 30 jours",
    ],
    benefice: "Un processus métier entier tourne sans intervention humaine.",
    categories: ["ia"],
    featured: true,
    slug: "pack-auto",
  },
  {
    nom: "Assistant IA Standard",
    tagline: "Retrouver une info en 10 secondes au lieu de 20 minutes.",
    description: "Agent IA connecté à vos documents internes. Réponses en langage naturel, contextualisées à votre métier.",
    prix: "1990 € - 4990 €",
    delai: "2-4 semaines",
    inclus: [
      "Intégration 50 à 200 documents",
      "Interface de chat dédiée",
      "Base de connaissances structurée",
      "Formation à l'usage",
      "Acces multi-utilisateurs",
    ],
    benefice: "Vos équipes trouvent en 10 secondes ce qui prenait 20 minutes.",
    categories: ["ia"],
    slug: "assistant-ia-standard",
  },
  {
    nom: "Assistant IA Avancé",
    tagline: "Toute votre connaissance accessible instantanément.",
    description: "Système intelligent qui lit vos documents en temps réel, enchaînements automatisés, gestion des permissions par utilisateur.",
    prix: "5000 € - 15000 €",
    delai: "4-8 semaines",
    inclus: [
      "Connexion multi-sources (ERP, CRM, docs)",
      "Mise à jour automatique des données",
      "Gestion des permissions par utilisateur",
      "Interface aux couleurs de votre charte",
      "Formation complète + documentation",
    ],
    benefice: "Toute la connaissance de votre entreprise instantanement accessible.",
    categories: ["ia"],
    slug: "assistant-ia-avance",
  },
  {
    nom: "Projet IA Structurant",
    tagline: "Transformation IA de A à Z sur mesure.",
    description: "Architecture IA complète, agents multiples, refonte d'un processus métier par l'IA.",
    prix: "Sur devis",
    delai: "2-6 mois",
    inclus: [
      "Diagnostic de transformation inclus",
      "Architecture IA sur mesure",
      "Agents multiples interconnectés",
      "Dashboards de pilotage",
      "Formation & accompagnement",
    ],
    benefice: "Avantage compétitif durable. L'IA démultiplie vos équipes.",
    categories: ["ia"],
    slug: "projet-ia",
  },
  // WEB & APPS
  {
    nom: "Landing Page",
    tagline: "Une page qui transforme vos visiteurs en contacts.",
    description: "Page de conversion optimisée pour Ads ou lancement produit. Design personnalisé, SEO natif, tracking inclus.",
    prix: "690 € - 1490 €",
    delai: "3-5 jours",
    inclus: [
      "Design & développement Next.js",
      "Responsive mobile-first",
      "SEO on-page natif",
      "Tracking analytics configuré",
      "Formulaire & CTA optimisés",
    ],
    benefice: "Une page qui transforme vos visiteurs en contacts qualifiés en moins d'une semaine.",
    categories: ["web"],
    slug: "landing-page",
  },
  {
    nom: "Site Vitrine",
    tagline: "Un site pro, rapide, modifiable sans développeur.",
    description: "4 à 8 pages, rapide, SEO technique, modifiable sans développeur.",
    prix: "1990 € - 4990 €",
    delai: "2-4 semaines",
    inclus: [
      "Design & développement Next.js (4-8 pages)",
      "Lighthouse 95+ sur tous les indicateurs",
      "SEO complet (technique + contenu)",
      "Formulaire avec notifications",
      "Formation admin + documentation",
    ],
    benefice: "Un site qui donne envie de vous contacter, modifiable sans toucher au code.",
    categories: ["web"],
    featured: true,
    slug: "site-vitrine",
  },
  {
    nom: "Site E-commerce",
    tagline: "Vos produits en vente en ligne 24h/24.",
    description: "Boutique catalogue, panier, paiement Stripe, gestion des commandes.",
    prix: "4990 € - 12000 €",
    delai: "4-8 semaines",
    inclus: [
      "Catalogue produits illimité",
      "Panier & paiement Stripe",
      "Gestion des commandes",
      "SEO produit optimisé",
      "Formation & documentation",
    ],
    benefice: "Vos produits en vente 24h/24 avec paiement sécurisé et SEO qualifié.",
    categories: ["web"],
    slug: "site-ecommerce",
  },
  {
    nom: "Application Sur Mesure",
    tagline: "Un outil fait exactement pour votre métier.",
    description: "Web app métier, intranet, portail client, CRM, dashboard — architecture évolutive.",
    prix: "Sur devis",
    delai: "Sur devis",
    inclus: [
      "Cahier des charges fonctionnel",
      "Design & développement sur mesure",
      "Tests & recette",
      "Déploiement & mise en production",
      "Formation, documentation, support",
    ],
    benefice: "Un outil fait exactement pour votre métier, pas un logiciel générique.",
    categories: ["web"],
    slug: "app-sur-mesure",
  },
  // FORMATION
  {
    nom: "Workshop IA Dirigeants",
    tagline: "Comprendre l'IA concrètement en une demi-journée.",
    description: "Session 2-4h pour comprendre l'IA, identifier les cas d'usage de votre secteur et repartir avec un plan.",
    prix: "490 €",
    delai: "Demi-journée",
    inclus: [
      "Session 2-4h (présentiel ou visio)",
      "Cas d'usage adaptés à votre secteur",
      "Demos live d'outils IA",
      "Session Q&A dédiée",
      "Slides + ressources + replay",
    ],
    benefice: "En une demi-journée vous savez comment l'IA s'applique à votre métier.",
    categories: ["formation"],
    slug: "workshop-ia",
  },
  {
    nom: "Formation Équipes",
    tagline: "Rendre vos équipes autonomes sur les outils IA.",
    description: "Multi-sessions sur vos outils IA déployés. Exercices pratiques, objectifs d'autonomie.",
    prix: "990 € - 2500 €",
    delai: "1-3 jours",
    inclus: [
      "Audit du niveau & des besoins",
      "Sessions sur mesure (1 à 3 jours)",
      "Supports pédagogiques personnalisés",
      "Exercices sur vos outils réels",
      "Suivi à 30 jours",
    ],
    benefice: "Vos équipes utilisent les outils IA de façon autonome.",
    categories: ["formation"],
    slug: "formation-equipes",
  },
  // PARTENARIAT
  {
    nom: "Partenariat Essentiel",
    tagline: "Vos systèmes surveillés sans que vous y pensiez.",
    description: "Maintenance, support 48h, veille mensuelle. La base pour ne pas lacher votre digital.",
    prix: "490 €/mois",
    inclus: [
      "Maintenance & monitoring",
      "Support email 48h",
      "Veille technologique mensuelle",
      "1 call de suivi par mois",
      "Rapport mensuel d'usage",
    ],
    benefice: "Vos systèmes tournent sans que vous ayez à vous en préoccuper.",
    categories: ["partenariat"],
    slug: "partenaire-essentiel",
  },
  {
    nom: "Partenariat Business",
    tagline: "Évolutions mensuelles, support prioritaire 24h.",
    description: "Tout l'Essentiel + 1 optimisation par mois, reporting performances, support 24h.",
    prix: "990 €/mois",
    inclus: [
      "Tout le Partenariat Essentiel",
      "1 optimisation/automatisation par mois",
      "Reporting performances mensuel",
      "Support prioritaire 24h",
      "Accès direct à l'équipe",
    ],
    benefice: "Votre outil évolue chaque mois sans effort. Interlocuteur dédié joignable en 24h.",
    categories: ["partenariat"],
    featured: true,
    slug: "partenaire-business",
  },
  {
    nom: "Partenariat Stratégique",
    tagline: "Un directeur technique sans le recruter.",
    description: "Direction technique externalisée — CTO as a Service. Accès illimité, comité direction mensuel.",
    prix: "1990 €/mois",
    inclus: [
      "Tout le Partenariat Business",
      "Direction technique externalisée",
      "Arbitrages architecture & outils",
      "Accès prioritaire illimité à l'équipe",
      "Participation au comité direction",
    ],
    benefice: "Un directeur technique sans recruter. Décisions tech avec quelqu'un qui connaît votre contexte.",
    categories: ["partenariat"],
    slug: "partenaire-strategique",
  },
  // CESSION
  {
    nom: "Audit Flash Cession & Reprise",
    tagline: "Un premier état des lieux en 30 minutes.",
    description: "Échange de cadrage pour comprendre votre situation, identifier les enjeux numériques clés et orienter la démarche.",
    prix: "Gratuit",
    delai: "30 min",
    inclus: [
      "Appel de cadrage 30 min",
      "Identification des enjeux clés",
      "Orientation vers la bonne offre",
      "Sans engagement",
    ],
    benefice: "Vous repartez avec une vision claire des prochaines étapes.",
    categories: ["cession"],
    slug: "audit-cession",
  },
  {
    nom: "Pack Modernisation Express",
    tagline: "Valoriser rapidement avant la cession.",
    description: "Audit maturité digitale + refonte des outils clés + 2-3 automatisations ciblées + documentation processus.",
    prix: "3500 € - 6000 €",
    delai: "3-4 semaines",
    inclus: [
      "Audit maturité digitale",
      "Refonte site ou outils clés",
      "2-3 automatisations ciblées",
      "Documentation processus",
    ],
    benefice: "Votre entreprise est plus attractive pour les acquéreurs en quelques semaines.",
    categories: ["cession"],
    slug: "pack-modernisation",
  },
  {
    nom: "Transformation Post-Reprise",
    tagline: "Moderniser rapidement après une acquisition.",
    description: "Refonte complète des outils digitaux, assistant IA métier, formation équipes, accompagnement 3 mois.",
    prix: "8000 € - 15000 €",
    delai: "6-8 semaines",
    inclus: [
      "Tout Modernisation Express",
      "Refonte complète des outils digitaux",
      "Assistant IA métier",
      "Formation équipes",
      "Accompagnement 3 mois",
    ],
    benefice: "L'entreprise reprise tourne sur des bases modernes et efficaces.",
    categories: ["cession"],
    featured: true,
    slug: "pack-transformation",
  },
  {
    nom: "Transformation + IA Métier",
    tagline: "Transformation IA complète post-acquisition.",
    description: "Agent IA avancé sur mesure, intégrations ERP/CRM complètes, roadmap IA 12 mois.",
    prix: "18000 € - 35000 €",
    delai: "8-12 semaines",
    inclus: [
      "Tout Transformation Post-Reprise",
      "Agent IA avancé sur mesure",
      "Intégrations ERP/CRM complètes",
      "Roadmap IA 12 mois",
    ],
    benefice: "Avantage compétitif durable avec une entreprise transformée par l'IA.",
    categories: ["cession"],
    slug: "pack-ia-metier",
  },
];

const categoryCards = [
  {
    id: "diagnostics" as Category,
    label: "Diagnostics",
    icon: Search,
    desc: "Analysez votre situation",
    from: "490 €",
    count: 7,
  },
  {
    id: "ia" as Category,
    label: "IA & Auto",
    icon: Zap,
    desc: "Automatisez vos tâches",
    from: "390 €",
    count: 5,
  },
  {
    id: "web" as Category,
    label: "Web",
    icon: Globe,
    desc: "Sites, e-commerce, applications",
    from: "690 €",
    count: 4,
  },
  {
    id: "formation" as Category,
    label: "Formation",
    icon: GraduationCap,
    desc: "Formez vos équipes",
    from: "490 €",
    count: 2,
  },
  {
    id: "partenariat" as Category,
    label: "Partenariat",
    icon: HeartHandshake,
    desc: "Suivi mensuel",
    from: "490 €/mois",
    count: 3,
  },
  {
    id: "cession" as Category,
    label: "Cession",
    icon: ArrowLeftRight,
    desc: "Valorisez ou évaluez",
    from: "990 €",
    count: 5,
  },
];

const VALID_CATEGORIES: Category[] = ["diagnostics", "ia", "web", "formation", "partenariat", "cession"];

export default function TarifsTabs() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [pendingScroll, setPendingScroll] = useState(false);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cat = searchParams.get("category");
    const offreSlug = searchParams.get("offre");
    if (cat && VALID_CATEGORIES.includes(cat as Category)) {
      setActiveCategory(cat as Category);
      if (offreSlug) {
        const categoryOffres = offres.filter((o) => o.categories.includes(cat as Category));
        const idx = categoryOffres.findIndex((o) => o.slug === offreSlug);
        if (idx !== -1) {
          setOpenIndex(idx);
          setPendingScroll(true);
        } else {
          setOpenIndex(null);
        }
      } else {
        setOpenIndex(null);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    if (pendingScroll && openIndex !== null) {
      const timer = setTimeout(() => {
        accordionRefs.current[openIndex]?.scrollIntoView({ behavior: "smooth", block: "center" });
        setPendingScroll(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [pendingScroll, openIndex]);

  const filtered = activeCategory ? offres.filter((o) => o.categories.includes(activeCategory)) : [];

  const handleCategoryClick = (cat: Category) => {
    if (activeCategory === cat) {
      setActiveCategory(null);
      setOpenIndex(null);
    } else {
      setActiveCategory(cat);
      setOpenIndex(null);
    }
  };

  const toggleAccordion = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <>
      {/* Category cards grid */}
      <style>{`
        .tarifs-cat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(201,254,110,0.1);
        }
        .tarifs-cat-card { transition: transform 200ms ease, box-shadow 200ms ease, background 200ms ease, border 200ms ease; }
      `}</style>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {categoryCards.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="tarifs-cat-card text-left rounded-xl p-5"
              style={{
                background: isActive ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.05)",
                border: isActive ? "2px solid #c9fe6e" : "1px solid rgba(255,255,255,0.1)",
                cursor: "pointer",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: isActive ? "rgba(201,254,110,0.15)" : "rgba(255,255,255,0.06)",
                  }}
                >
                  <Icon
                    size={18}
                    style={{ color: isActive ? "#c9fe6e" : "rgba(255,255,255,0.5)" }}
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm mb-0.5" style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.85)" }}>
                    {cat.label}
                  </p>
                  <p className="text-xs mb-2" style={{ color: "var(--text-secondary)" }}>
                    {cat.desc}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold" style={{ color: isActive ? "#c9fe6e" : "rgba(201,254,110,0.7)" }}>
                      À partir de {cat.from}
                    </span>
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {cat.count} offres
                    </span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Accordion — slide down on category select */}
      <AnimatePresence initial={false}>
        {activeCategory && (
          <motion.div
            key={activeCategory}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="flex flex-col gap-2 pt-2">
              {filtered.map((offre, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={`${activeCategory}-${i}`}
                    ref={(el) => { accordionRefs.current[i] = el; }}
                    className="rounded-xl overflow-hidden transition-all duration-200"
                    style={{
                      background: offre.featured ? "rgba(124,58,237,0.08)" : "rgba(255,255,255,0.03)",
                      border: offre.featured
                        ? isOpen ? "1px solid rgba(124,58,237,0.5)" : "1px solid rgba(124,58,237,0.3)"
                        : isOpen ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <button
                      className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors duration-150 hover:bg-white/[0.02]"
                      style={{ background: "none", border: "none", cursor: "pointer" }}
                      onClick={() => toggleAccordion(i)}
                    >
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-3">
                          {offre.featured && (
                            <span
                              className="hidden sm:inline-flex font-mono text-[0.6rem] uppercase tracking-widest px-2 py-0.5 rounded-full flex-shrink-0"
                              style={{ background: "var(--violet)", color: "#fff" }}
                            >
                              Populaire
                            </span>
                          )}
                          <span className="font-medium text-white text-sm sm:text-base leading-snug">
                            {offre.nom}
                          </span>
                        </div>
                        {!isOpen && (
                          <span className="text-[13px] mt-0.5 leading-snug" style={{ color: "rgba(255,255,255,0.38)" }}>
                            {offre.tagline}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                        <div className="text-right">
                          <span className="font-bold text-sm sm:text-base" style={{ color: "#c9fe6e" }}>
                            {offre.prix}
                          </span>
                          {offre.prixBarre && (
                            <span className="ml-2 text-xs line-through hidden sm:inline" style={{ color: "var(--text-secondary)" }}>
                              {offre.prixBarre}
                            </span>
                          )}
                        </div>
                        <ChevronDown
                          size={16}
                          className="transition-transform duration-200 flex-shrink-0"
                          style={{
                            color: "var(--text-secondary)",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                              {offre.description}
                            </p>

                            {offre.benefice && (
                              <div
                                className="mb-5"
                                style={{
                                  background: "rgba(255,255,255,0.05)",
                                  borderLeft: "2px solid #c9fe6e",
                                  padding: "12px 16px",
                                }}
                              >
                                <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] mb-1.5" style={{ color: "#c9fe6e" }}>
                                  Ce que ça vous apporte
                                </p>
                                <p className="text-sm italic" style={{ color: "#fff" }}>
                                  {offre.benefice}
                                </p>
                              </div>
                            )}

                            <div className="mb-5">
                              <p className="font-mono text-[0.65rem] uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
                                Ce qui est inclus
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
                                {offre.inclus.map((item, j) => (
                                  <div key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                                    <Check size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#c9fe6e" }} />
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="flex items-center justify-between flex-wrap gap-4">
                              <div className="flex items-center gap-6">
                                {offre.delai && (
                                  <div>
                                    <p className="font-mono text-[0.65rem] uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                                      Délai de livraison
                                    </p>
                                    <p className="text-sm font-semibold">{offre.delai}</p>
                                  </div>
                                )}
                                {offre.prixBarre && (
                                  <div>
                                    <p className="font-mono text-[0.65rem] uppercase tracking-wider mb-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                                      Prix barré
                                    </p>
                                    <p className="text-sm line-through" style={{ color: "var(--text-secondary)" }}>
                                      {offre.prixBarre}
                                    </p>
                                  </div>
                                )}
                              </div>
                              <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 hover:-translate-y-[1px]"
                                style={
                                  offre.featured
                                    ? { background: "var(--ad-1)", color: "#000" }
                                    : { border: "1px solid rgba(124,58,237,0.4)", color: "var(--text-primary)" }
                                }
                              >
                                Demander cette offre <RiArrowRightUpLine size={13} />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!activeCategory && (
        <p className="text-center py-8 text-sm" style={{ color: "var(--text-secondary)" }}>
          Sélectionnez une catégorie ci-dessus pour voir les offres.
        </p>
      )}
    </>
  );
}
