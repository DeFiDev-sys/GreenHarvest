import { motion } from "framer-motion"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeading } from "@/components/site/section-heading"

const faqs = [
  {
    q: "What does 'regenerative' actually mean for your farms?",
    a: "It's a set of practices — cover cropping, no-till, rotational grazing, composting — designed to leave soil healthier than we found it. We measure soil organic carbon on every plot annually and publish the results in our impact report.",
  },
  {
    q: "How fresh is the produce when it arrives?",
    a: "Most items are harvested within 24 hours of dispatch. Greenhouse items are often picked the same morning. Our boxes are insulated and ice-packed in summer, so produce arrives at field temperature.",
  },
  {
    q: "Can I customise the box or skip a week?",
    a: "Absolutely. You can swap up to 3 items per delivery, pause for vacations, or cancel anytime from your account — no calls or forms required.",
  },
  {
    q: "Where do you deliver, and what does it cost?",
    a: "We currently deliver to most addresses in California, Oregon, Nevada and Arizona. Delivery is included in every box price — no surprise fees at checkout.",
  },
  {
    q: "Is the packaging really compostable?",
    a: "Yes. Boxes are FSC-certified cardboard, the insulation is wool wadding, and the cool packs are filled with food-grade gel. Everything but the cool pack can go into your home compost.",
  },
  {
    q: "How do you pay your farmers?",
    a: "We pay a guaranteed fair-trade floor — typically 4× the commodity rate — plus a share of margin. Our quarterly transparency report breaks it down, line by line.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="relative bg-secondary/40 py-24 sm:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.4fr]">
          <SectionHeading
            align="left"
            eyebrow="Questions"
            title="Everything you wanted to know."
            description="Can't find what you're looking for? Our team replies to every email within four hours, every weekday."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-border/70 bg-background p-2 sm:p-4"
          >
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} value={`item-${idx}`} className="px-4 last:border-b-0">
                  <AccordionTrigger className="font-display text-lg">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
