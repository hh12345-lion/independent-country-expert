import { SITE_REGION_NOTICE } from "@/lib/constants";

export function UkRegionBar() {
  return (
    <div
      className="border-b border-[#CBD5E1] bg-[#F5F7FA] px-4 py-2.5 text-center text-xs leading-relaxed text-[#374151] sm:text-sm"
      role="note"
      aria-label="Service region"
    >
      <span className="font-semibold text-[#2C3E50]">UK only.</span> {SITE_REGION_NOTICE}
    </div>
  );
}
