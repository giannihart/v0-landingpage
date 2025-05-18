"use client"

import { usePathname } from "next/navigation"
import { Footer2 } from "./footer2"

export function ConditionalFooter() {
  const pathname = usePathname()

  // Don't render the footer on the signup page
  if (pathname === "/signup") {
    return null
  }

  return <Footer2 />
}
