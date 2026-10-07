import Image from "next/image";
import Link from "next/link";
import { TonedImage } from "./TonedImage";
import { images } from "@/lib/images";

export function CTASection({
  title = "Need a specialist for this jurisdiction?",
  description = "Send a short brief. We route to an independent country expert.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative isolate bg-[#1A4346] py-14 text-[#EFECE4] sm:py-20">
      <TonedImage src={images.mapAfrica} strength={0.14} className="-z-10" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-12 lg:px-8">
        <Image
          src="/brand/monogram-light.svg"
          alt=""
          width={252}
          height={352}
          unoptimized
          className="hidden w-20 md:block"
        />
        <div>
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#E3E1DC] sm:text-base">{description}</p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <Link
            href="/contact"
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[4px] bg-[#EFECE4] px-8 text-[14px] font-medium tracking-wide text-[#171D1E] shadow-[0_14px_28px_-16px_rgba(0,0,0,0.7)] transition-colors hover:bg-[#406383] hover:text-[#EFECE4]"
          >
            Route a case
            <span aria-hidden>→</span>
          </Link>
          <Link href="/how-to-instruct" className="text-sm text-[#E3E1DC] underline underline-offset-4 hover:text-[#EFECE4]">
            How we route a case
          </Link>
        </div>
      </div>
    </section>
  );
}
