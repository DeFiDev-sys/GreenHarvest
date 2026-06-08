import { motion } from "framer-motion"
import { Sprout, Sun, Tractor, Truck } from "lucide-react"

import { SectionHeading } from "@/components/site/section-heading"

const steps = [
  {
    icon: Sprout,
    title: "Sow",
    detail: "Heirloom seeds chosen for flavour first, then resilience and shelf life.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Sun,
    title: "Grow",
    detail: "Solar-fed greenhouses and field sensors keep crops in their sweet spot.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Tractor,
    title: "Harvest",
    detail: "Hand-picked at peak ripeness — never gassed, never artificially ripened.",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Truck,
    title: "Deliver",
    detail: "On the road within 24 hours, in compostable, insulated harvest boxes.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
  },
]

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Our process"
          title="Four honest steps. Zero shortcuts."
          description="Every box you receive from us has followed exactly the same path — from a hand-sown seed to your doorstep."
        />

        <div className="relative mt-16">
          {/* Connector line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-leaf-300 to-transparent md:block"
          />

          <ol className="grid gap-8 md:grid-cols-4">
            {steps.map((step, idx) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative flex flex-col items-center">
                  <span className="z-10 inline-flex h-24 w-24 items-center justify-center rounded-full border border-border/70 bg-background shadow-md">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-leaf-100 text-leaf-700">
                      <step.icon className="h-7 w-7" />
                    </span>
                  </span>
                  <span className="absolute -top-3 right-0 z-20 inline-flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-[0.7rem] font-semibold tracking-wider text-background">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-tight">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.detail}
                </p>
                <div className="mt-5 aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/60">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
