import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

import { SectionHeading } from "@/components/site/section-heading"

const testimonials = [
  {
    quote:
      "We replaced four separate suppliers with GreenHarvest. Our chefs trust the boxes implicitly — and our food cost dropped 11%.",
    name: "Marlena Okafor",
    role: "Executive Chef, Cedar Table",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    quote:
      "Honest pricing, traceable produce, and a delivery team who treats the food like it's their own. The standard the industry needs.",
    name: "Daniel Reyes",
    role: "Owner, Bluebell Bakery",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    quote:
      "Joining the co-op tripled what our farm earned per acre. The agronomy team helped us cut input costs in half along the way.",
    name: "Priya Anand",
    role: "Farmer, Anand Family Acres",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    quote:
      "The QR traceability is a story we now tell on every menu. Diners care, and GreenHarvest gives us the receipts to back it up.",
    name: "Alex Brennan",
    role: "GM, Riverside Hotels Group",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    quote:
      "Best tomatoes I've eaten since my grandmother's garden. The harvest box has become a Saturday ritual at our house.",
    name: "Ines Kovač",
    role: "Subscriber, Portland",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Kind words"
          title="Loved by chefs, grocers, and home cooks alike."
          description="A small selection of the people who source from us — and the stories they tell."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className={`group relative flex flex-col gap-5 rounded-3xl border border-border/70 bg-card p-7 transition-all hover:border-leaf-300 hover:shadow-xl hover:shadow-leaf-900/[0.06] ${
                idx === 0 ? "lg:row-span-2 lg:bg-gradient-to-br lg:from-leaf-50 lg:to-background" : ""
              }`}
            >
              <Quote className="h-7 w-7 text-leaf-500/70" />

              <blockquote
                className={`font-display tracking-tight text-foreground ${
                  idx === 0 ? "text-2xl leading-snug" : "text-lg leading-snug"
                }`}
              >
                "{t.quote}"
              </blockquote>

              <div className="mt-auto flex items-center justify-between gap-4 pt-2">
                <figcaption className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-background"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
