import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { FEATURED_PROJECT_QUERY } from "@/sanity/lib/queries";

import { Button } from "@/components/ui/button";

const options = { next: { revalidate: 60 } };

export default async function FeaturedProjectScreen() {
  const setting = await client.fetch(FEATURED_PROJECT_QUERY, {}, options);

  return (
    <section className="bg-primary">
      <div className="flex flex-col justify-center items-center relative md:h-screen">
        <Image
          src={setting.featuredProject.coverImage.asset.url}
          alt={"placeholder"}
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          draggable="false"
        />
        <div className="absolute inset-0 w-full h-full bg-linear-[10deg,black,transparent_70%,transparent_100%] opacity-60"></div>

        <div className="relative z-1 flex justify-center">
          <div className="container py-16">
            <div className="bg-background p-4 flex items-start gap-2 md:gap-3">
              <div className="w-2 h-2 md:w-4 md:h-4 bg-black"></div>
              <h3 className="text-2xl md:text-4xl lg:text-5xl">
                {setting.featuredProject.client}
              </h3>
            </div>
            <div className="aspect-video border-x-16 border-white"></div>
            <div className="p-4 bg-background flex flex-col justify-start items-end md:flex-row md:justify-between md:items-center gap-4">
              <p className="text-lg md:text-2xl lg:text-3xl max-w-2xl">
                {setting.featuredProject.excerpt}
              </p>
              <Button asChild>
                <Link href={`/projets/${setting.featuredProject.slug.current}`}>
                  Lire &#40;2min&#41;
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
