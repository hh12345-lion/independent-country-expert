"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Unchecks the CSS-only mobile menu toggle after a client-side navigation. */
export function MobileNavReset() {
  const pathname = usePathname();

  useEffect(() => {
    const toggle = document.getElementById("mobile-nav-toggle") as HTMLInputElement | null;
    if (toggle) toggle.checked = false;
  }, [pathname]);

  return null;
}
