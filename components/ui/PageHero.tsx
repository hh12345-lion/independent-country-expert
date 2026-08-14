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
    <section className="border-b border-[#C9C4BA] bg-[#E8EDF2] py-10 sm:py-12 md:py-14">
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <h1 className="font-display max-w-4xl break-words text-3xl tracking-tight text-[#191B22] min-[375px]:text-4xl sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#3A4148] sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
