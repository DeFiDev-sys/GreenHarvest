import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const ABOUT_IMG_MAIN =
  "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80"
const ABOUT_IMG_SMALL =
  "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=900&q=80"

const points = [
  {
    title: "Three generations of family stewardship",
    body: "We farm the same valley our grandparents did — every decision is judged by what it leaves for the next generation.",
  },
  {
    title: "A cooperative of 230 independent growers",
    body: "We pool logistics, science, and storytelling so small farms can compete fairly with industrial agriculture.",
  },
  {
    title: "Built around regeneration, not extraction",
    body: "Cover crops, rotational grazing, and zero-till systems lock carbon back into our soils every season.",
  },
]

export function About() {
  return (
    <section id="about" className="relative bg-secondary/40 py-24 sm:py-28">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr,1.1fr]">
          {/* Image collage */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-[2rem] border border-border/70 shadow-xl"
            >
              <img
                src={ABOUT_IMG_MAIN}
                alt="Farmers walking through the field at sunrise"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="absolute -bottom-8 -right-2 hidden w-60 overflow-hidden rounded-3xl border border-border/70 bg-background shadow-2xl sm:block lg:-right-10"
            >
              <img
                src={ABOUT_IMG_SMALL}
                alt="Hands holding fresh greens"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <div className="font-display text-2xl tracking-tight">98%</div>
                <div className="text-xs text-muted-foreground">
                  Of our growers stay year on year. The industry average is 41%.
                </div>
              </div>
            </motion.div>

            <div className="absolute -left-6 top-6 -z-10 h-40 w-40 rounded-full bg-leaf-200/60 blur-2xl" />
          </div>

          {/* Copy */}
          <div className="flex flex-col gap-6">
            <Badge variant="soft" className="uppercase tracking-[0.18em] self-start">
              <span className="size-1.5 rounded-full bg-leaf-500" />
              Our story
            </Badge>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="font-display text-balance text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl"
            >
              Farmed by people who eat what they grow.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Since 2008, GreenHarvest has been a refuge for farmers who refused
              to compromise on what they put into the ground — or on what they put on
              their tables. Today we steward 8,400 hectares across the valley.
            </motion.p>

            <ul className="mt-2 flex flex-col gap-5">
              {points.map((p, i) => (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-leaf-700">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#process">Meet the farmers</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#stats">Our impact report</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
