import Link from "next/link";

/** Rule A (SEO-ARCHITECTURE.md): hub pages link to independence pillar + network directory */
export function HubPageLinks({
  showIndependence = true,
  showNetwork = true,
}: {
  showIndependence?: boolean;
  showNetwork?: boolean;
}) {
  if (!showIndependence && !showNetwork) return null;

  return (
    <nav
      aria-label="Site hubs"
      className="mb-8 flex flex-col gap-3 border-y border-[#B8C4BE] py-4 sm:flex-row sm:flex-wrap sm:gap-6"
    >
      {showIndependence && (
        <Link
          href="/expert-independence-framework"
          className="inline-flex min-h-[44px] items-center text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0F241C] hover:text-[#2B7A78]"
        >
          Independence framework →
        </Link>
      )}
      {showNetwork && (
        <Link
          href="/network"
          className="inline-flex min-h-[44px] items-center text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0F241C] hover:text-[#2B7A78]"
        >
          Network directory →
        </Link>
      )}
    </nav>
  );
}
