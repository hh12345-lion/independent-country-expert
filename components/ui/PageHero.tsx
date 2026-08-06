import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

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
    <section className="atlas-field relative overflow-hidden py-12 sm:py-14 md:py-16">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-40 lg:block"
        aria-hidden
      >
        <div
          className="h-full w-full bg-[url('/images/atlas-contours.svg')] bg-cover bg-right bg-no-repeat"
        />
      </div>
      <div className="relative mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <h1 className="font-display max-w-4xl break-words text-3xl tracking-tight text-[#E7ECE8] min-[375px]:text-4xl sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#B8C4BE] sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
