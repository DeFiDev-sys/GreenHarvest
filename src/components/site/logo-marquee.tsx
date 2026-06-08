import { motion } from "framer-motion"

const partners = [
  "Wholefoods Co-op",
  "Cedar Table",
  "Bluebell Bakery",
  "FarmDirect",
  "Riverside Hotels",
  "Harvest & Co.",
  "Botanic Kitchen",
  "Sunpath Markets",
]

export function LogoMarquee() {
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-[auto,1fr] md:items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xs text-sm text-muted-foreground md:border-r md:border-border/60 md:pr-6"
          >
            Sourced & served by{" "}
            <span className="font-semibold text-foreground">230+ farms, restaurants,</span>{" "}
            and grocers across North America.
          </motion.p>

          <div className="relative overflow-hidden mask-fade-x">
            <div className="flex w-max animate-marquee items-center gap-12">
              {[...partners, ...partners].map((name, idx) => (
                <div
                  key={`${name}-${idx}`}
                  className="font-display text-xl tracking-tight text-muted-foreground/80 hover:text-foreground transition-colors whitespace-nowrap"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
