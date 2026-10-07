import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { TonedImage } from "./TonedImage";
import { images } from "@/lib/images";

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative isolate bg-[#1A4346] pb-12 pt-14 text-[#EFECE4] sm:pb-14 sm:pt-16 md:pb-16">
      <TonedImage src={images.mapPersia} strength={0.16} position="object-[70%_40%]" className="-z-10" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1A4346] via-[#1A4346]/85 to-transparent"
      />
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <h1 className="font-display max-w-4xl break-words text-3xl tracking-tight min-[375px]:text-4xl sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#E3E1DC] sm:text-lg">{subtitle}</p>
        )}
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1 bg-[#406383]" />
    </section>
  );
}
