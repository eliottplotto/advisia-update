import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { FEATURED_PROJECT_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

import { BulletHeadline } from "./ui/bullet-headline";
import { RevealText } from "./RevealText";
import { Button } from "./ui/button";
import { RiArrowRightFill } from "@remixicon/react";

export default async function EtudesDeCas() {
  const setting = await client.fetch(FEATURED_PROJECT_QUERY, {}, options);

  return (
    <section data-theme="light">
      <div className="main-layout">
        <div className="global-padding">
          <BulletHeadline>Études de cas</BulletHeadline>
        </div>
        <div className="lg:border-x">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="global-padding flex flex-col justify-between gap-8">
              <div className="flex gap-8 justify-between">
                {setting.featuredProject.client}
                <img
                  src={setting.featuredProject.coverImage.asset.url}
                  alt={setting.featuredProject.coverImage.asset.alt}
                  className="h-12"
                  draggable="false"
                />
              </div>
              <RevealText as="h3" className="text-4xl max-w-3xl">
                {setting.featuredProject.headline}
              </RevealText>
            </div>
            <div className="w-[50%] lg:w-full">
              <Image
                src={setting.featuredProject.coverImage.asset.url}
                alt={"placeholder"}
                className="aspect-square object-cover"
                width={1920}
                height={1080}
                draggable="false"
              />
            </div>
          </div>
          <div className="border-t py-16 flex items-center justify-between">
            <Image
              src="/placeholder.jpg"
              alt="placeholder"
              className="aspect-square w-32 object-cover"
              width={300}
              height={300}
              draggable="false"
            />
            <Button variant="secondary" asChild>
              <Link href="/projets">
                Explorer les projets
                <RiArrowRightFill />
              </Link>
            </Button>
            <Image
              src="/placeholder.jpg"
              alt="placeholder"
              className="aspect-square w-32 object-cover"
              width={300}
              height={300}
              draggable="false"
            />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
