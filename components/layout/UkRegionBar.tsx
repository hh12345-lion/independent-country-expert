import { SITE_REGION_NOTICE } from "@/lib/constants";

export function UkRegionBar() {
  return (
    <div
      className="border-b border-[#B8C4BE] bg-[#E7ECE8] px-4 py-2 text-center text-xs leading-relaxed text-[#33403A] sm:text-sm"
      role="note"
      aria-label="Service region"
    >
      <span className="font-medium text-[#0F241C]">UK only.</span> {SITE_REGION_NOTICE}
    </div>
  );
}
