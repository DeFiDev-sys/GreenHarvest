import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/site/section-heading"
import { cn } from "@/lib/utils"

type Category = "Vegetables" | "Fruits" | "Grains" | "Herbs"

interface Product {
  name: string
  category: Category
  image: string
  price: string
  unit: string
  origin: string
  badge?: string
  rating: number
}

const products: Product[] = [
  {
    name: "Heirloom tomatoes",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=80",
    price: "$6.40",
    unit: "/ lb",
    origin: "Willowbrook Valley",
    badge: "In season",
    rating: 4.9,
  },
  {
    name: "Hass avocados",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?auto=format&fit=crop&w=900&q=80",
    price: "$2.10",
    unit: "/ each",
    origin: "Solana Grove",
    rating: 4.8,
  },
  {
    name: "Stone-milled flour",
    category: "Grains",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    price: "$9.80",
    unit: "/ 2kg",
    origin: "Hartwell Mills",
    rating: 4.9,
  },
  {
    name: "Honeycrisp apples",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=900&q=80",
    price: "$4.20",
    unit: "/ lb",
    origin: "North Orchard",
    badge: "New harvest",
    rating: 4.7,
  },
  {
    name: "Basil & mint bunch",
    category: "Herbs",
    image:
      "https://images.unsplash.com/photo-1559054663-e8d23213f55c?auto=format&fit=crop&w=900&q=80",
    price: "$3.50",
    unit: "/ bunch",
    origin: "Greenhouse 02",
    rating: 4.9,
  },
  {
    name: "Rainbow chard",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?auto=format&fit=crop&w=900&q=80",
    price: "$3.90",
    unit: "/ bunch",
    origin: "Field 04",
    rating: 4.6,
  },
  {
    name: "Wildflower honey",
    category: "Grains",
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=900&q=80",
    price: "$12.00",
    unit: "/ jar",
    origin: "Apiary North",
    badge: "Limited",
    rating: 5.0,
  },
  {
    name: "Sun-ripened strawberries",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1543528176-61b239494933?auto=format&fit=crop&w=900&q=80",
    price: "$5.60",
    unit: "/ pint",
    origin: "South Patch",
    rating: 4.8,
  },
]

const categories: ("All" | Category)[] = ["All", "Vegetables", "Fruits", "Grains", "Herbs"]

export function Products() {
  const [active, setActive] = useState<(typeof categories)[number]>("All")
  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active)

  return (
    <section id="products" className="relative py-24 sm:py-28">
      <div className="container">
        <div className="grid items-end gap-6 md:grid-cols-[1fr,auto]">
          <SectionHeading
            align="left"
            eyebrow="The harvest"
            title="This week's pick from the fields."
            description="Curated boxes and single-origin bundles — picked at peak ripeness and on the road within 24 hours."
          />
          <Button variant="outline" size="sm" asChild className="md:self-end">
            <a href="#cta">
              Browse full catalogue <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "relative inline-flex h-9 items-center rounded-full border px-4 text-sm font-medium transition-all",
                active === c
                  ? "border-leaf-300 bg-leaf-50 text-leaf-700"
                  : "border-border/70 bg-background text-muted-foreground hover:text-foreground"
              )}
            >
              {active === c ? (
                <motion.span
                  layoutId="product-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-leaf-100/60"
                  transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                />
              ) : null}
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, idx) => (
              <motion.article
                key={product.name}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card transition-shadow hover:shadow-xl hover:shadow-leaf-900/[0.06]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-3 top-3 flex items-start justify-between">
                    {product.badge ? (
                      <Badge variant="default" className="bg-background/90 text-foreground">
                        {product.badge}
                      </Badge>
                    ) : (
                      <span />
                    )}
                    <div className="inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium backdrop-blur">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      {product.rating.toFixed(1)}
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-1 p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg leading-tight">{product.name}</h3>
                    <div className="text-right">
                      <span className="font-display text-lg text-leaf-700">{product.price}</span>
                      <span className="ml-0.5 text-xs text-muted-foreground">{product.unit}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{product.origin}</p>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {product.category}
                    </span>
                    <button className="inline-flex items-center gap-1 text-xs font-semibold text-leaf-700 transition-colors hover:text-leaf-800">
                      Add to box <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
