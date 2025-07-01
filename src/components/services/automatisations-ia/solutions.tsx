import { RiCheckFill, RiGitCommitFill, RiRobot3Fill } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/RevealText";

export default function Solutions() {
  return (
    <section>
      <div className="main-layout">
        <div></div>
        <div className="global-padding-x lg:border-x py-16 lg:pt-32 text-center">
          <RevealText
            as="h2"
            className="text-4xl md:text-6xl max-w-4xl mx-auto"
          >
            Intégrer et <span className="underline">tirer profit</span> de
            l&apos;IA dans votre organisation
          </RevealText>
          <p className="max-w-2xl mx-auto mt-6 text-muted-foreground">
            Nos solutions d&apos;intelligence artificielle s&apos;adaptent à vos
            besoins spécifiques pour maximiser votre retour sur investissement.
          </p>
        </div>
      </div>

      <div className="main-layout border-t">
        <div></div>
        <div className="pb-16">
          {/* Solutions */}
          <div>
            <div className="w-[50%] mx-auto flex flex-col items-center">
              <div className="h-12 border border-dashed"></div>
              <div className="w-full border border-dashed"></div>
              <div className="w-full mx-auto flex justify-between">
                <div className="h-12 border border-dashed"></div>
                <div className="h-12 border border-dashed"></div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-x-2">
              <div className="bg-secondary flex flex-col justify-between">
                <div className="bg-[#DFF24B] h-64 lg:h-80 bg-ascii-2 flex justify-center items-center">
                  <RiGitCommitFill size={128} className="text-blue-600" />
                </div>
                <div className="p-8 mb-4">
                  <h5 className="text-2xl lg:text-3xl mb-4">
                    Automatisations de processus
                  </h5>
                  <p className="text-muted-foreground">
                    Libérez vos équipes des tâches répétitives en automatisant
                    vos workflows avec l&apos;IA.
                  </p>
                  <ul className="adv_list-icon mt-6">
                    <li>
                      <RiCheckFill />
                      Workflows intelligents
                    </li>
                    <li>
                      <RiCheckFill /> Intégration avec vos outils existants
                    </li>
                    <li>
                      <RiCheckFill /> Traitement automatique des documents
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:hidden h-12 w-0 mx-auto border border-dashed"></div>
              <div className="bg-secondary flex flex-col justify-between">
                <div className="bg-[#DFF24B] h-64 lg:h-80 bg-ascii-2 flex justify-center items-center">
                  <RiRobot3Fill size={128} className="text-blue-600" />
                </div>
                <div className="p-8 mb-4">
                  <h5 className="text-2xl lg:text-3xl mb-4">Agents IA</h5>
                  <p className="text-muted-foreground">
                    Un assistant autonome connecté à vos outils internes
                    &#40;SAV, RH, commercial...&#41; Développez votre activité,
                    même pendant que vous dormez.
                  </p>
                  <ul className="adv_list-icon mt-6">
                    <li>
                      <RiCheckFill />
                      Workflows intelligents
                    </li>
                    <li>
                      <RiCheckFill /> Intégration avec vos outils existants
                    </li>
                    <li>
                      <RiCheckFill /> Traitement automatique des documents
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-[50%] mx-auto flex flex-col items-center">
              <div className="w-full mx-auto flex justify-between">
                <div className="h-12 border border-dashed"></div>
                <div className="h-12 border border-dashed"></div>
              </div>
              <div className="w-full border border-dashed"></div>
              <div className="h-12 border border-dashed"></div>
            </div>
          </div>
          {/* CTA */}
          <div className="flex justify-center">
            <Button size="lg">Contacter un expert IA</Button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
