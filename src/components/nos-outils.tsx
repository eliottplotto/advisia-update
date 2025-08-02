import LogosToolsSlider from "./logos-tools-slider";
import { BulletHeadline } from "./ui/bullet-headline";
export default function NosOutils() {
  return (
    <section className="bg-background border-t select-none">
      <div className="overflow-hidden container-md global-padding-x">
        <div className="py-12">
          <h2 className="font-mono text-sm text-center text-muted-foreground uppercase mb-12">
            Nous exploitons les meilleures outils du marché
          </h2>
          <LogosToolsSlider />
        </div>
      </div>
    </section>
  );
}
