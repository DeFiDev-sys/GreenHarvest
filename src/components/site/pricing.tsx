import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/site/section-heading"
import { cn } from "@/lib/utils"

interface Plan {
  name: string
  description: string
  weekly: number
  biweekly: number
  unit: string
  features: string[]
  cta: string
  highlight?: boolean
}

const plans: Plan[] = [
  {
    name: "Garden",
    description: "A weekly taste of the valley — just the essentials.",
    weekly: 28,
    biweekly: 32,
    unit: "/ box",
    cta: "Start the garden box",
    features: [
      "6–8 seasonal items",
      "Feeds 1–2 people",
      "Carbon-neutral delivery",
      "Pause or skip any week",
    ],
  },
  {
    name: "Harvest",
    description: "Our most popular box — built around what's at peak this week.",
    weekly: 48,
    biweekly: 56,
    unit: "/ box",
    highlight: true,
    cta: "Start the harvest box",
    features: [
      "10–14 seasonal items",
      "Feeds 2–4 people",
      "1 artisan add-on each week",
      "Priority delivery window",
      "Farmer's recipe card included",
    ],
  },
  {
    name: "Homestead",
    description: "A larger box for big tables, busy kitchens, and bulk cooks.",
    weekly: 78,
    biweekly: 88,
    unit: "/ box",
    cta: "Start the homestead box",
    features: [
      "18–22 seasonal items",
      "Feeds 4–6 people",
      "2 artisan add-ons each week",
      "Free pantry refills monthly",
      "Dedicated farm concierge",
    ],
  },
]

export function Pricing() {
  const [cadence, setCadence] = useState<"weekly" | "biweekly">("weekly")

  return (
    <section id="pricing" className="relative py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Subscriptions"
          title="Simple boxes. Honest pricing."
          description="Every box is delivered carbon-neutral, in fully compostable packaging. Cancel anytime, no questions asked."
        />

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center rounded-full border border-border/70 bg-secondary p-1 text-sm">
            {(["weekly", "biweekly"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCadence(c)}
                className={cn(
                  "relative inline-flex h-9 items-center rounded-full px-4 font-medium capitalize transition-colors",
                  cadence === c ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {cadence === c ? (
                  <motion.span
                    layoutId="pricing-toggle"
                    className="absolute inset-0 -z-10 rounded-full bg-background shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                ) : null}
                {c === "weekly" ? "Weekly" : "Every 2 weeks"}
                {c === "biweekly" ? (
                  <Badge variant="soft" className="ml-2 px-2 py-0 text-[0.65rem]">
                    Flexible
                  </Badge>
                ) : null}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className={cn(
                "relative flex flex-col overflow-hidden rounded-3xl border bg-card p-8 transition-shadow",
                plan.highlight
                  ? "border-leaf-300 shadow-2xl shadow-leaf-900/[0.08] lg:scale-[1.02]"
                  : "border-border/70 hover:shadow-lg"
              )}
            >
              {plan.highlight ? (
                <>
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-leaf-400 via-accent to-leaf-600" />
                  <Badge variant="default" className="absolute right-6 top-6 gap-1.5 bg-leaf-100 text-leaf-700">
                    <Sparkles className="h-3 w-3" /> Most popular
                  </Badge>
                </>
              ) : null}

              <h3 className="font-display text-2xl tracking-tight">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl tracking-tight">
                  ${cadence === "weekly" ? plan.weekly : plan.biweekly}
                </span>
                <span className="text-sm text-muted-foreground">{plan.unit}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Billed per delivery · No setup fees
              </p>

              <ul className="mt-7 flex flex-1 flex-col gap-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span
                      className={cn(
                        "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                        plan.highlight ? "bg-leaf-600 text-white" : "bg-leaf-100 text-leaf-700"
                      )}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8"
                size="lg"
                variant={plan.highlight ? "default" : "outline"}
                asChild
              >
                <a href="#cta">{plan.cta}</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
