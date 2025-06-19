import Link from "next/link";
import Image from "next/image";
import { BulletHeadline } from "../ui/bullet-headline";
import { RevealText } from "../RevealText";

export default function Services() {
  const services = [
    {
      title: "IA & Automatisation",
      description:
        "Passer de l'IA grand public à des solutions IA métiers, sur-mesure et connectées à vos données",
      link: "/",
    },
  ];

  return (
    <section>
      <div className="main-layout">
        <div className="global-padding">
          <BulletHeadline as="p">Services</BulletHeadline>
        </div>
        <div className="global-padding lg:border-x">
          <RevealText
            as="h2"
            className="text-4xl md:text-6xl xl:text-7xl max-w-4xl mt-64"
          >
            Développer <span className="underline">tout le potentiel</span> de
            votre activité.
          </RevealText>
        </div>
      </div>
      <div className="main-layout">
        <div></div>
        <ul className="lg:border-x">
          <Link href="/">
            <li>
              <div>
                <p>01</p>
                <div className="grow"></div>
              </div>
              <div>
                <div>
                  <h3>IA & Automatisation</h3>
                </div>
              </div>
            </li>
          </Link>
        </ul>
        <div></div>
      </div>
    </section>
  );
}
