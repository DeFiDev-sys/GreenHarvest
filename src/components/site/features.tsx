import { motion } from "framer-motion"
import {
  Droplets,
  LineChart,
  Recycle,
  Satellite,
  ShieldCheck,
  Tractor,
} from "lucide-react"

import { SectionHeading } from "@/components/site/section-heading"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Satellite,
    title: "Precision agronomy",
    description:
      "Satellite + on-ground sensors guide planting, irrigation, and harvest windows down to the row.",
    accent: "from-leaf-500/15 to-leaf-500/0",
    iconClass: "bg-leaf-100 text-leaf-700",
  },
  {
    icon: Droplets,
    title: "Smart irrigation",
    description:
      "Drip systems calibrated by soil moisture telemetry cut water use by 38% per hectare.",
    accent: "from-sky-500/15 to-sky-500/0",
    iconClass: "bg-sky-100 text-sky-700",
  },
  {
    icon: Recycle,
    title: "Closed-loop compost",
    description:
      "We compost 100% of post-harvest waste back into the fields — no synthetic inputs.",
    accent: "from-amber-500/15 to-amber-500/0",
    iconClass: "bg-amber-100 text-amber-800",
  },
  {
    icon: Tractor,
    title: "Low-impact machinery",
    description:
      "Electric and biodiesel-powered fleet reduces emissions and protects topsoil structure.",
    accent: "from-soil-500/20 to-soil-500/0",
    iconClass: "bg-soil-100 text-soil-700",
  },
  {
    icon: ShieldCheck,
    title: "Traceable from seed",
    description:
      "Every box ships with a QR — trace the field, the farmer, and the day it was picked.",
    accent: "from-emerald-500/15 to-emerald-500/0",
    iconClass: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: LineChart,
    title: "Fair-trade pricing",
    description:
      "Farmers receive 4× the commodity rate. Transparent margin reporting, published quarterly.",
    accent: "from-rose-500/15 to-rose-500/0",
    iconClass: "bg-rose-100 text-rose-700",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-dot opacity-40 mask-fade-bottom" />
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title="A farm operating system — soil to shelf."
          description="GreenHarvest blends generational farming know-how with a modern toolkit so every acre yields better produce, healthier soil, and a fairer return."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 transition-all hover:border-leaf-300 hover:shadow-xl hover:shadow-leaf-900/[0.06]"
            >
              <div
                className={cn(
                  "pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br opacity-70 transition-opacity duration-500 group-hover:opacity-100",
                  feature.accent
                )}
              />
              <div
                className={cn(
                  "relative inline-flex h-12 w-12 items-center justify-center rounded-xl",
                  feature.iconClass
                )}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <div className="mt-6 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <span>0{idx + 1} / 06</span>
                <span className="inline-flex items-center gap-1 text-leaf-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
