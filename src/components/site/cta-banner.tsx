import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const CTA_IMG =
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1600&q=80"

export function CtaBanner() {
  return (
    <section id="cta" className="relative py-24 sm:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative isolate overflow-hidden rounded-[2.5rem] border border-border/60 shadow-2xl"
        >
          <img
            src={CTA_IMG}
            alt="Sunlit farm at golden hour"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-leaf-900/90 via-leaf-800/80 to-soil-800/70" />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-grid opacity-20 mix-blend-overlay"
          />

          <div className="grid gap-10 p-10 text-white sm:p-14 lg:grid-cols-[1.3fr,1fr] lg:items-center">
            <div className="flex flex-col gap-5">
              <Badge variant="outline" className="self-start border-white/30 bg-white/10 text-white">
                <span className="size-1.5 rounded-full bg-accent" />
                Limited spring delivery slots
              </Badge>

              <h2 className="font-display text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Eat with the seasons.{" "}
                <span className="italic text-leaf-200">Support the land.</span>
              </h2>
              <p className="max-w-xl text-balance text-base leading-relaxed text-leaf-50/85 sm:text-lg">
                Drop your email and we'll send you this week's harvest list and a $20
                credit toward your first box. No spam, ever — only what's good.
              </p>

              <form
                className="mt-2 flex max-w-lg flex-col gap-3 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    required
                    type="email"
                    placeholder="you@goodtable.com"
                    className="h-12 border-white/20 bg-white/95 pl-10 text-foreground"
                  />
                </div>
                <Button size="lg" variant="accent" className="h-12">
                  Get my $20 credit <ArrowRight className="h-4 w-4" />
                </Button>
              </form>

              <p className="text-xs text-leaf-50/70">
                By signing up you agree to receive our weekly harvest newsletter.
                Unsubscribe at the bottom of any email.
              </p>
            </div>

            <div className="grid gap-3 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-white/80">
                  This week's box
                </span>
                <span className="font-display text-2xl">$48</span>
              </div>
              <ul className="grid gap-2.5 text-sm">
                {[
                  "Heirloom tomatoes — Field 04",
                  "Sun-ripened strawberries — South Patch",
                  "Basil & mint — Greenhouse 02",
                  "Stone-milled flour — Hartwell Mills",
                  "Wildflower honey — Apiary North",
                  "Honeycrisp apples — North Orchard",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2 text-leaf-50/90">
                    <span className="mt-1.5 inline-block size-1.5 rounded-full bg-accent" />
                    {line}
                  </li>
                ))}
                <li className="text-xs text-leaf-50/70">…and 6 more seasonal items.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
