import Link from "next/link";
import Image from "next/image";
import { RiArrowRightLine } from "@remixicon/react";

export default function Services() {
  return (
    <section className="dark bg-background text-foreground py-32">
      <div>
        <div className="container-md mb-8 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-8xl">Notre expertise</h2>
        </div>
        <div className="border-y">
          <ul className="container-md !px-0 md:grid md:grid-cols-6 border-x">
            <li className="group col-span-6 lg:col-span-3 p-4 md:p-6 lg:p-8 border-r border-b">
              <Link
                href="/services"
                className="flex flex-col justify-between gap-16 h-full"
              >
                <Image
                  src="/sample.svg"
                  alt="image"
                  width={400}
                  height={400}
                  className="w-16 h-16 md:w-24 md:h-24"
                />
                <div className="flex justify-between items-end gap-3">
                  <div className="max-w-md">
                    <h3 className="text-2xl lg:text-3xl mb-2 transition-[padding-left] ease-(--ease) border-l border-l-0 border-blue-600 group-hover:pl-3 group-hover:border-l-3">
                      IA & Automatisations
                    </h3>
                    <p className=" text-muted-foreground">
                      Passer de l&apos;IA grand public à des solutions IA
                      métiers, sur&#x2011;mesure et connectées à vos données
                    </p>
                  </div>

                  <div className="relative h-12 w-12 shrink-0">
                    <RiArrowRightLine className="absolute inset-[50%] -translate-x-[50%] -translate-y-[50%] z-1" />
                    <div className="bg-secondary rounded-full w-full h-full transition-transform ease-(--ease) duration-400 group-hover:scale-120 group-hover:bg-blue-600"></div>
                  </div>
                </div>
              </Link>
            </li>
            <li className="group col-span-3 p-4 md:p-6 lg:p-8 border-b">
              <Link
                href="/services"
                className="flex flex-col justify-between gap-16 h-full"
              >
                <Image
                  src="/sample.svg"
                  alt="image"
                  width={400}
                  height={400}
                  className="w-16 h-16 md:w-24 md:h-24"
                />
                <div className="flex justify-between items-end gap-3">
                  <div className="max-w-md">
                    <h3 className="text-2xl lg:text-3xl mb-2 transition-[padding-left] ease-(--ease) border-l border-l-0 border-blue-600 group-hover:pl-3 group-hover:border-l-3">
                      Site Web
                    </h3>
                    <p className=" text-muted-foreground">
                      Création de sites vitrine ou e-commmerce pour développer
                      votre entreprise sur internet
                    </p>
                  </div>
                  <div className="relative h-12 w-12 shrink-0">
                    <RiArrowRightLine className="absolute inset-[50%] -translate-x-[50%] -translate-y-[50%] z-1" />
                    <div className="bg-secondary rounded-full w-full h-full transition-transform ease-(--ease) duration-400 group-hover:scale-120 group-hover:bg-blue-600"></div>
                  </div>
                </div>
              </Link>
            </li>
            <li className="group col-span-3 lg:col-span-2 p-4 md:p-6 lg:p-8 border-r">
              <Link
                href="/services"
                className="flex flex-col justify-between gap-16 h-full"
              >
                <Image
                  src="/sample.svg"
                  alt="image"
                  width={400}
                  height={400}
                  className="w-16 h-16 md:w-24 md:h-24"
                />
                <div className="flex justify-between items-end gap-3">
                  <div className="max-w-md">
                    <h3 className="text-2xl lg:text-3xl mb-2 transition-[padding-left] ease-(--ease) border-l border-l-0 border-blue-600 group-hover:pl-3 group-hover:border-l-3">
                      Product Design
                    </h3>
                    <p className=" text-muted-foreground">
                      SaaS, application, site web
                    </p>
                  </div>
                  <div className="relative h-12 w-12 shrink-0">
                    <RiArrowRightLine className="absolute inset-[50%] -translate-x-[50%] -translate-y-[50%] z-1" />
                    <div className="bg-secondary rounded-full w-full h-full transition-transform ease-(--ease) duration-400 group-hover:scale-120 group-hover:bg-blue-600"></div>
                  </div>
                </div>
              </Link>
            </li>
            <li className="group col-span-3 lg:col-span-2 p-4 md:p-6 lg:p-8 border-r">
              <Link
                href="/services"
                className="flex flex-col justify-between gap-16 h-full"
              >
                <Image
                  src="/sample.svg"
                  alt="image"
                  width={400}
                  height={400}
                  className="w-16 h-16 md:w-24 md:h-24"
                />
                <div className="flex justify-between items-end gap-3">
                  <div className="max-w-md">
                    <h3 className="text-2xl lg:text-3xl mb-2 transition-[padding-left] ease-(--ease) border-l border-l-0 border-blue-600 group-hover:pl-3 group-hover:border-l-3">
                      Marketing Digital
                    </h3>
                    <p className=" text-muted-foreground">
                      Ads, SMO, Webmarketing
                    </p>
                  </div>
                  <div className="relative h-12 w-12 shrink-0">
                    <RiArrowRightLine className="absolute inset-[50%] -translate-x-[50%] -translate-y-[50%] z-1" />
                    <div className="bg-secondary rounded-full w-full h-full transition-transform ease-(--ease) duration-400 group-hover:scale-120 group-hover:bg-blue-600"></div>
                  </div>
                </div>
              </Link>
            </li>
            <li className="group col-span-3 lg:col-span-2 p-4 md:p-6 lg:p-8">
              <Link
                href="/services"
                className="flex flex-col justify-between gap-16 h-full"
              >
                <Image
                  src="/sample.svg"
                  alt="image"
                  width={400}
                  height={400}
                  className="w-16 h-16 md:w-24 md:h-24"
                />
                <div className="flex justify-between items-end gap-3">
                  <div className="max-w-md">
                    <h3 className="text-2xl lg:text-3xl mb-2 transition-[padding-left] ease-(--ease) border-l border-l-0 border-blue-600 group-hover:pl-3 group-hover:border-l-3">
                      Identité de marque
                    </h3>
                    <p className=" text-muted-foreground">
                      Logo, identité complète, refonte
                    </p>
                  </div>
                  <div className="relative h-12 w-12 shrink-0">
                    <RiArrowRightLine className="absolute inset-[50%] -translate-x-[50%] -translate-y-[50%] z-1" />
                    <div className="bg-secondary rounded-full w-full h-full transition-transform ease-(--ease) duration-400 group-hover:scale-120 group-hover:bg-blue-600"></div>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
