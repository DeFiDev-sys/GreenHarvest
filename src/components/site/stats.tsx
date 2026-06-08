import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const items = [
  {
    label: "Tonnes of produce shipped",
    value: 12_400,
    suffix: "",
    accent: "text-leaf-600",
  },
  {
    label: "Partner family farms",
    value: 230,
    suffix: "+",
    accent: "text-soil-600",
  },
  {
    label: "Water saved per hectare",
    value: 38,
    suffix: "%",
    accent: "text-sky-600",
  },
  {
    label: "Carbon sequestered (tons CO₂)",
    value: 6_820,
    suffix: "",
    accent: "text-emerald-600",
  },
]

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section id="stats" className="relative py-20 sm:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-leaf-700 via-leaf-800 to-soil-800 p-10 text-white shadow-xl"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 bg-grid"
            style={{ maskImage: "radial-gradient(circle at center, black 0%, transparent 70%)" }}
          />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-leaf-500/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-[1fr,2fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-leaf-200/90">
                The numbers
              </p>
              <h3 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                Impact you can{" "}
                <span className="italic text-leaf-200">measure</span>, not just{" "}
                <span className="italic text-leaf-200">market</span>.
              </h3>
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
              {items.map((it) => (
                <div key={it.label}>
                  <dt className="text-xs uppercase tracking-wider text-leaf-100/80">
                    {it.label}
                  </dt>
                  <dd className="mt-2 font-display text-4xl tracking-tight text-white">
                    <Counter to={it.value} suffix={it.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
