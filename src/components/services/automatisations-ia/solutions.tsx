import { Check, GitCommit, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BulletHeadline } from "@/components/ui/bullet-headline";
import { RevealText } from "@/components/reveal-text";
import Link from "next/link";

export default function Solutions() {
  return (
    <section className="dark text-foreground" style={{ background: "transparent" }}>
      <div className="container-md">
        <div className="global-padding-x py-8 lg:py-16 space-y-8">
          <div className="flex flex-col gap-6 justify-center items-center text-center">
            <BulletHeadline as="p">Nos solutions</BulletHeadline>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl max-w-4xl">
              <RevealText>
                Intégrer et <span className="text-highlight">tirer profit</span>{" "}
                de l&apos;IA dans votre organisation
              </RevealText>
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              On intègre l&apos;IA dans vos outils existants. Pas de refonte,
              pas de migration. Juste des gains immédiats.
            </p>
          </div>
          {/* Solutions */}
          <div className="max-w-6xl mx-auto">
            <div>
              <div className="w-[50%] mx-auto flex flex-col items-center">
                <div className="w-3 h-3 bg-muted-foreground rounded-xs"></div>
                <div className="h-12 border border-dashed border-muted-foreground"></div>
                <div className="w-full border border-dashed border-muted-foreground"></div>
                <div className="w-full mx-auto flex justify-between">
                  <div className="h-12 border border-dashed border-muted-foreground"></div>
                  <div className="h-12 border border-dashed border-muted-foreground"></div>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 lg:gap-x-2">
                <div className="bg-background flex flex-col justify-between rounded-md border">
                  <div className="border-b h-48 flex justify-center items-center">
                    <Bot size={64} className="text-ad-1" />
                  </div>
                  <div className="global-padding grow">
                    <h5 className="text-2xl lg:text-3xl mb-4">Agent IA</h5>
                    <p className="text-muted-foreground">
                      Répond à vos clients, trie vos emails, qualifie vos contacts entrants.
                      Opérationnel en quelques jours, 24h/24.
                    </p>
                    <ul className="ad_list-icon mt-6">
                      <li>
                        <Check className="text-ad-1" />
                        Mise en service rapide, sans refonte lourde
                      </li>
                      <li>
                        <Check className="text-ad-1" /> Automatisation des
                        tâches répétitives, réduction des erreurs
                      </li>
                      <li>
                        <Check className="text-ad-1" /> Libère vos équipes
                        pour des missions qui nécessitent vraiment leur expertise
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:hidden h-12 w-0 mx-auto border border-dashed border-muted-foreground"></div>
                <div className="bg-background flex flex-col justify-between rounded-md border">
                  <div className="border-b h-48 flex justify-center items-center">
                    <GitCommit size={64} className="text-ad-1" />
                  </div>
                  <div className="global-padding grow">
                    <h5 className="text-2xl lg:text-3xl mb-4">Système IA</h5>
                    <p className="text-muted-foreground">
                      Vos outils communiquent entre eux. Vos reportings se
                      génèrent seuls. Vos équipes se concentrent sur le terrain.
                    </p>
                    <ul className="ad_list-icon mt-6">
                      <li>
                        <Check className="text-ad-1" />
                        Synchronisation de vos logiciels métier
                      </li>
                      <li>
                        <Check className="text-ad-1" /> Le système s&apos;améliore avec le temps sans intervention
                      </li>
                      <li>
                        <Check className="text-ad-1" /> Chaque tâche automatisée est visible et auditable en temps réel
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-[50%] mx-auto flex flex-col items-center">
                <div className="w-full mx-auto flex justify-between">
                  <div className="h-12 border border-dashed border-muted-foreground"></div>
                  <div className="h-12 border border-dashed border-muted-foreground"></div>
                </div>
                <div className="w-full border border-dashed border-muted-foreground"></div>
                <div className="h-12 border border-dashed border-muted-foreground"></div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button size="lg" asChild><Link href="/prendre-rendez-vous">Contacter un expert IA</Link></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
