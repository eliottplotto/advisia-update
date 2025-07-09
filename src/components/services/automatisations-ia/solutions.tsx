import { RiCheckFill, RiGitCommitFill, RiRobot3Fill } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { BulletHeadline } from "@/components/ui/bullet-headline";

export default function Solutions() {
  return (
    <section className="bg-secondary">
      <div className="container-md">
        <div className="global-padding-x pt-16 pb-8 lg:pt-32 flex flex-col gap-6 justify-center items-center text-center">
          <BulletHeadline as="p">Nos solutions</BulletHeadline>
          <h2 className="text-4xl md:text-6xl max-w-3xl">
            Intégrer et <span className="text-highlight">tirer profit</span> de
            l&apos;IA dans votre organisation
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Nos solutions d&apos;intelligence artificielle s&apos;adaptent à vos
            besoins spécifiques pour maximiser votre retour sur investissement.
          </p>
        </div>
      </div>

      <div className="container-md">
        <div className="global-padding-x pb-16">
          {/* Solutions */}
          <div>
            <div className="w-[50%] mx-auto flex flex-col items-center">
              <div className="w-3 h-3 bg-foreground rounded-xs"></div>
              <div className="h-12 border border-dashed border-foreground"></div>
              <div className="w-full border border-dashed border-foreground"></div>
              <div className="w-full mx-auto flex justify-between">
                <div className="h-12 border border-dashed border-foreground"></div>
                <div className="h-12 border border-dashed border-foreground"></div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-x-2">
              <div className="bg-background flex flex-col justify-between rounded-sm">
                <div className="border-b h-64 flex justify-center items-center">
                  <RiGitCommitFill size={64} className="text-blue-600" />
                </div>
                <div className="global-padding grow">
                  <h5 className="text-2xl lg:text-3xl mb-4">Agent IA</h5>
                  <p className="text-muted-foreground">
                    Automatise vos tâches répétitives avec une mise en place
                    rapide.
                  </p>
                  <ul className="ad_list-icon mt-6">
                    <li>
                      <RiCheckFill className="text-blue-600" />
                      Déploiement plug‑and‑play rapide, sans refonte lourde
                    </li>
                    <li>
                      <RiCheckFill className="text-blue-600" /> Automatisation
                      des tâches répétitives, réduction des erreurs
                    </li>
                    <li>
                      <RiCheckFill className="text-blue-600" /> Libère vos
                      équipes pour des missions à valeur
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:hidden h-12 w-0 mx-auto border border-dashed border-foreground"></div>
              <div className="bg-background flex flex-col justify-between rounded-sm">
                <div className="border-b h-64 flex justify-center items-center">
                  <RiRobot3Fill size={64} className="text-blue-600" />
                </div>
                <div className="global-padding grow">
                  <h5 className="text-2xl lg:text-3xl mb-4">Système IA</h5>
                  <p className="text-muted-foreground">
                    Orchestre vos processus complexes grâce à une IA connectée.
                  </p>
                  <ul className="ad_list-icon mt-6">
                    <li>
                      <RiCheckFill className="text-blue-600" />
                      Connexion sécurisée à vos données et API
                    </li>
                    <li>
                      <RiCheckFill className="text-blue-600" /> Décisions
                      autonomes, apprentissage continu intégré
                    </li>
                    <li>
                      <RiCheckFill className="text-blue-600" /> Exécutions
                      multi‑étapes traçables en temps réel
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-[50%] mx-auto flex flex-col items-center">
              <div className="w-full mx-auto flex justify-between">
                <div className="h-12 border border-dashed border-foreground"></div>
                <div className="h-12 border border-dashed border-foreground"></div>
              </div>
              <div className="w-full border border-dashed border-foreground"></div>
              <div className="h-12 border border-dashed border-foreground"></div>
            </div>
          </div>
          {/* CTA */}
          <div className="flex justify-center">
            <Button size="lg">Contacter un expert IA</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
