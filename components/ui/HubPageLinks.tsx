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
      className="mb-8 flex flex-col gap-3 rounded-[8px] border border-[#CBD5E1] bg-[#F5F7FA] p-4 sm:flex-row sm:flex-wrap sm:gap-4 sm:p-5"
    >
      {showIndependence && (
        <Link
          href="/expert-independence-framework"
          className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-[4px] bg-white px-4 py-2 text-center text-sm font-semibold text-[#2C3E50] shadow-sm hover:text-[#B87333] sm:flex-none"
        >
          Expert Independence Framework
        </Link>
      )}
      {showNetwork && (
        <Link
          href="/network"
          className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-[4px] bg-white px-4 py-2 text-center text-sm font-semibold text-[#2C3E50] shadow-sm hover:text-[#B87333] sm:flex-none"
        >
          Network Directory
        </Link>
      )}
    </nav>
  );
}
