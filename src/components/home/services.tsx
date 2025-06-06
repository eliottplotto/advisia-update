import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { RiArrowRightLine, RiCheckFill } from "@remixicon/react";

export default function Services() {
  return (
    <section className="relative lg:grid lg:grid-cols-2 bg-background">
      <div className="text-foreground container py-16">
        <div className="lg:sticky top-32">
          <h2 className="text-4xl md:text-6xl lg:text-8xl">Nos expertises</h2>
        </div>
      </div>
      <ul className="border-l border-black">
        <li className=" relative sticky top-16 bg-background text-foreground px-4 py-16 flex flex-col items-start justify-center gap-8 border-t border-black overflow-hidden">
          <Image
            src="/sample.svg"
            alt="image"
            width={400}
            height={400}
            className="w-32 h-32"
          />

          <div className="flex flex-col gap-6 items-start">
            <h3 className="text-4xl lg:text-5xl">IA & automatisations</h3>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#F280CA] flex items-center justify-center">
                <RiCheckFill size={16} />
              </div>
              Agents IA sur-mesure
            </li>
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#F280CA] flex items-center justify-center">
                <RiCheckFill size={16} />
              </div>
              Automatisation des processus métier
            </li>
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#F280CA] flex items-center justify-center">
                <RiCheckFill size={16} />
              </div>
              Solutions d'analyse
            </li>
          </ul>
          <Button asChild>
            <Link href="/contact">
              En savoir plus
              <RiArrowRightLine />
            </Link>
          </Button>
        </li>
        <li className=" relative sticky top-16 bg-background text-foreground px-4 py-16 flex flex-col items-start justify-center gap-8 border-t border-black overflow-hidden">
          <Image
            src="/sample.svg"
            alt="image"
            width={400}
            height={400}
            className="w-32 h-32"
          />

          <div className="flex flex-col gap-6 items-start">
            <h3 className="text-4xl lg:text-5xl">IA & automatisations</h3>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#F280CA] flex items-center justify-center">
                <RiCheckFill size={16} />
              </div>
              Agents IA sur-mesure
            </li>
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#F280CA] flex items-center justify-center">
                <RiCheckFill size={16} />
              </div>
              Automatisation des processus métier
            </li>
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#F280CA] flex items-center justify-center">
                <RiCheckFill size={16} />
              </div>
              Solutions d'analyse
            </li>
          </ul>
          <Button asChild>
            <Link href="/contact">
              En savoir plus
              <RiArrowRightLine />
            </Link>
          </Button>
        </li>
        <li className=" relative sticky top-16 bg-background text-foreground px-4 py-16 flex flex-col items-start justify-center gap-8 border-t border-black overflow-hidden">
          <Image
            src="/sample.svg"
            alt="image"
            width={400}
            height={400}
            className="w-32 h-32"
          />

          <div className="flex flex-col gap-6 items-start">
            <h3 className="text-4xl lg:text-5xl">IA & automatisations</h3>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#F280CA] flex items-center justify-center">
                <RiCheckFill size={16} />
              </div>
              Agents IA sur-mesure
            </li>
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#F280CA] flex items-center justify-center">
                <RiCheckFill size={16} />
              </div>
              Automatisation des processus métier
            </li>
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#F280CA] flex items-center justify-center">
                <RiCheckFill size={16} />
              </div>
              Solutions d'analyse
            </li>
          </ul>
          <Button asChild>
            <Link href="/contact">
              En savoir plus
              <RiArrowRightLine />
            </Link>
          </Button>
        </li>
        <li className=" relative sticky top-16 bg-background text-foreground px-4 py-16 flex flex-col items-start justify-center gap-8 border-t border-black overflow-hidden">
          <Image
            src="/sample.svg"
            alt="image"
            width={400}
            height={400}
            className="w-32 h-32"
          />

          <div className="flex flex-col gap-6 items-start">
            <h3 className="text-4xl lg:text-5xl">IA & automatisations</h3>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#F280CA] flex items-center justify-center">
                <RiCheckFill size={16} />
              </div>
              Agents IA sur-mesure
            </li>
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#F280CA] flex items-center justify-center">
                <RiCheckFill size={16} />
              </div>
              Automatisation des processus métier
            </li>
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#F280CA] flex items-center justify-center">
                <RiCheckFill size={16} />
              </div>
              Solutions d'analyse
            </li>
          </ul>
          <Button asChild>
            <Link href="/contact">
              En savoir plus
              <RiArrowRightLine />
            </Link>
          </Button>
        </li>
        <li className=" relative sticky top-16 bg-background text-foreground px-4 py-16 flex flex-col items-start justify-center gap-8 border-t border-black overflow-hidden">
          <Image
            src="/sample.svg"
            alt="image"
            width={400}
            height={400}
            className="w-32 h-32"
          />

          <div className="flex flex-col gap-6 items-start">
            <h3 className="text-4xl lg:text-5xl">IA & automatisations</h3>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#F280CA] flex items-center justify-center">
                <RiCheckFill size={16} />
              </div>
              Agents IA sur-mesure
            </li>
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#F280CA] flex items-center justify-center">
                <RiCheckFill size={16} />
              </div>
              Automatisation des processus métier
            </li>
            <li className="flex items-center gap-4">
              <div className="w-6 h-6 shrink-0 bg-[#F280CA] flex items-center justify-center">
                <RiCheckFill size={16} />
              </div>
              Solutions d'analyse
            </li>
          </ul>
          <Button asChild>
            <Link href="/contact">
              En savoir plus
              <RiArrowRightLine />
            </Link>
          </Button>
        </li>
      </ul>
    </section>
  );
}
