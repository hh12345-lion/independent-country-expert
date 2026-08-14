import { SITE_REGION_NOTICE } from "@/lib/constants";

export function UkRegionBar() {
  return (
    <div
      className="border-b border-[#C9C4BA] bg-[#E8EDF2] px-4 py-2 text-center text-xs leading-relaxed text-[#3A4148] sm:text-sm"
      role="note"
      aria-label="Service region"
    >
      <span className="font-medium text-[#191B22]">UK only.</span> {SITE_REGION_NOTICE}
    </div>
  );
}
