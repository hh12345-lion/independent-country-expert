import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thank You | Independent Country Expert",
  description: "Your instruction request has been received.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-[#191B22] py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0B6E99]/20"
            aria-hidden="true"
          >
            <svg className="h-8 w-8 text-[#0B6E99]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display mt-6 text-3xl tracking-tight text-[#E8EDF2] sm:text-4xl">Thank you</h1>
          <p className="mt-4 text-lg text-white/80">
            Your instruction request has been received. We will respond within one business day with routing to
            the appropriate jurisdiction-specific expert.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-[44px] min-w-[200px] items-center justify-center rounded-[8px] bg-[#0B6E99] px-8 py-3 font-semibold text-white transition hover:bg-[#085578]"
            >
              Return to Homepage
            </Link>
            <Link
              href="/expert-independence-framework"
              className="inline-flex min-h-[44px] min-w-[200px] items-center justify-center rounded-[8px] border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Expert Independence Framework
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#E8EDF2] py-12">
        <div className="mx-auto max-w-2xl px-4 text-center text-[#3A4148] sm:px-6">
          <h2 className="text-lg font-semibold text-[#191B22]">What happens next?</h2>
          <ul className="mt-4 space-y-3 text-left text-sm leading-relaxed">
            <li>We review your case details and identify the right jurisdiction-specific expert in our network.</li>
            <li>You receive a response within one business day with proposed scope, timeline, and fee estimate.</li>
            <li>Legal Aid cases: confirm LAA prior authority before the expert begins work.</li>
          </ul>
          <Link
            href="/how-to-instruct"
            className="mt-6 inline-flex min-h-[44px] items-center font-semibold text-[#0B6E99] hover:underline"
          >
            How we route a case
          </Link>
        </div>
      </section>
    </>
  );
}
