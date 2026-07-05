import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Leaf, Play, ShieldCheck, Sprout, Sun, X } from "lucide-react"
import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const STORY_VIDEO_ID = import.meta.env.VITE_STORY_VIDEO_ID

const HERO_BACKDROP =
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80"
const HERO_CARD_A =
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80"
const HERO_CARD_B =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80"
const HERO_CARD_C =
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80"

const stats = [
  { label: "Hectares farmed", value: "8.4k+" },
  { label: "Partner farms", value: "230" },
  { label: "Crops shipped weekly", value: "92t" },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export function Hero() {
  const [storyOpen, setStoryOpen] = useState(false)

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-36 md:pt-40 lg:pb-28">
      {/* Backdrop layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          aria-hidden
          className="absolute inset-0 mask-fade-bottom opacity-[0.18]"
          style={{
            backgroundImage: `url(${HERO_BACKDROP})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-leaf-300/30 blur-3xl" />
        <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-[1.05fr,1fr]"
        >
          <div className="flex flex-col items-start gap-7">
            <motion.div variants={item}>
              <Badge variant="soft" className="uppercase tracking-[0.18em]">
                <Sprout className="size-3.5" />
                Regenerative agriculture · est. 2008
              </Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-balance text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl"
            >
              Cultivating{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-br from-leaf-600 via-leaf-500 to-accent bg-clip-text italic text-transparent">
                  tomorrow's
                </span>
                <svg
                  aria-hidden
                  viewBox="0 0 300 18"
                  className="absolute -bottom-2 left-0 h-3 w-full text-leaf-400/70"
                  fill="none"
                >
                  <path
                    d="M2 11.5C 60 2, 140 2, 298 12"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              harvest, today.
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-xl text-balance text-lg leading-relaxed text-muted-foreground"
            >
              From soil health to your kitchen table — GreenHarvest unites family farms,
              precision agronomy, and farm-to-door logistics to deliver produce that's
              fresher, fairer, and unmistakably better.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <a href="#products">
                  Explore the harvest <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2.5"
                onClick={() => setStoryOpen(true)}
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background">
                  <Play className="h-3 w-3 fill-current" />
                </span>
                Watch our story · 02:14
              </Button>
            </motion.div>

            <motion.ul
              variants={item}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1 text-sm text-muted-foreground"
            >
              <li className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-leaf-600" /> USDA Certified Organic
              </li>
              <li className="inline-flex items-center gap-2">
                <Leaf className="h-4 w-4 text-leaf-600" /> Carbon-negative since 2021
              </li>
              <li className="inline-flex items-center gap-2">
                <Sun className="h-4 w-4 text-leaf-600" /> Solar-powered facilities
              </li>
            </motion.ul>

            <motion.div
              variants={item}
              className="mt-4 grid w-full max-w-md grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60"
            >
              {stats.map((s) => (
                <div key={s.label} className="bg-background/80 p-4 backdrop-blur">
                  <div className="font-display text-2xl tracking-tight">{s.value}</div>
                  <div className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual collage */}
          <motion.div variants={item} className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[4/5] w-full">
              {/* Decorative ring */}
              <div className="absolute -right-6 -top-6 -z-10 h-44 w-44 rounded-full border border-leaf-300/60 bg-leaf-100/40" />
              <div className="absolute -bottom-10 -left-10 -z-10 h-56 w-56 rounded-full bg-gradient-to-tr from-accent/40 to-leaf-300/40 blur-2xl" />

              {/* Main image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="absolute inset-0 overflow-hidden rounded-[2rem] border border-border/60 shadow-2xl shadow-leaf-900/15"
              >
                <img
                  src={HERO_CARD_A}
                  alt="Sunlit field of crops at golden hour"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-leaf-900/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div className="rounded-2xl bg-white/15 p-3 backdrop-blur-xl ring-1 ring-white/30">
                    <div className="text-[0.7rem] uppercase tracking-widest text-white/80">
                      Field 04 · East ridge
                    </div>
                    <div className="font-display text-xl text-white">Heirloom tomatoes</div>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-right text-white/90">
                    <div className="font-display text-3xl">28°C</div>
                    <div className="text-xs uppercase tracking-widest text-white/70">
                      Soil moist · 62%
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -left-6 bottom-12 hidden w-48 overflow-hidden rounded-2xl border border-border/70 bg-background/95 p-2 shadow-xl backdrop-blur sm:block"
              >
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img src={HERO_CARD_B} alt="Fresh produce baskets" className="h-full w-full object-cover" />
                </div>
                <div className="p-2 pt-3">
                  <div className="text-xs font-semibold">Harvest box · Spring</div>
                  <div className="mt-0.5 text-[0.7rem] text-muted-foreground">
                    12 seasonal items · ships today
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="absolute -right-4 top-10 hidden w-44 overflow-hidden rounded-2xl border border-border/70 bg-background/95 shadow-xl backdrop-blur sm:block"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={HERO_CARD_C} alt="Greenhouse interior" className="h-full w-full object-cover" />
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-1.5 text-[0.7rem] font-medium text-leaf-700">
                    <span className="inline-block size-1.5 rounded-full bg-leaf-500" />
                    Live now
                  </div>
                  <div className="mt-1 text-xs font-semibold">Greenhouse 02</div>
                  <div className="text-[0.7rem] text-muted-foreground">
                    Lettuce mix · ready in 6 days
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Story video modal */}
      <AnimatePresence>
        {storyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
            onClick={() => setStoryOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Our story video"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setStoryOpen(false)}
                aria-label="Close video"
                className="absolute -top-11 right-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground ring-1 ring-border/60 transition hover:bg-background"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-black shadow-2xl">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${STORY_VIDEO_ID}?autoplay=1&rel=0`}
                  title="Our story"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
