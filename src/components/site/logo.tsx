import type { MouseEvent } from "react"
import { Leaf } from "lucide-react"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  const scrollToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    })
    if (window.history.replaceState) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search)
    }
  }

  return (
    <a
      href="#top"
      onClick={scrollToTop}
      className={cn(
        "group inline-flex items-center gap-2.5 font-display text-lg tracking-tight",
        className
      )}
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-leaf-500 to-leaf-700 text-white shadow-md shadow-leaf-700/20 transition-transform group-hover:scale-105">
        <Leaf className="h-4.5 w-4.5" strokeWidth={2.2} />
        <span className="absolute -inset-1 rounded-2xl bg-leaf-400/20 blur-md transition-opacity group-hover:opacity-100 opacity-0" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[1.05rem] font-semibold tracking-tight text-foreground">
          Green<span className="text-leaf-600">Harvest</span>
        </span>
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Organic Farms
        </span>
      </span>
    </a>
  )
}
