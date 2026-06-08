import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Send,
  Twitter,
  Youtube,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Logo } from "@/components/site/logo"
import { siteConfig } from "@/lib/site-config"

const sections = [
  {
    title: "Shop",
    links: [
      { label: "Harvest boxes", href: "#products" },
      { label: "Single-origin", href: "#products" },
      { label: "Pantry refills", href: "#products" },
      { label: "Gift subscriptions", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our story", href: "#about" },
      { label: "Impact report", href: "#stats" },
      { label: "The farmers", href: "#process" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", href: "#faq" },
      { label: "Delivery info", href: "#" },
      { label: "Pause / cancel", href: "#" },
      { label: "Contact us", href: "#" },
    ],
  },
]

const socials = [
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: Youtube, href: siteConfig.social.youtube, label: "Youtube" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/70 bg-gradient-to-b from-background to-leaf-50/60">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr,2fr]">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex max-w-md flex-col gap-2 sm:flex-row"
            >
              <Input type="email" placeholder="Join the weekly harvest letter" />
              <Button type="submit" size="default" className="shrink-0">
                Subscribe <Send className="h-4 w-4" />
              </Button>
            </form>

            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-leaf-300 hover:text-leaf-700"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {sections.map((section) => (
              <div key={section.title}>
                <h4 className="font-display text-base tracking-tight">{section.title}</h4>
                <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="font-display text-base tracking-tight">Visit the farm</h4>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" />
                  {siteConfig.contact.address}
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" />
                  <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-foreground">
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Send className="mt-0.5 h-4 w-4 shrink-0 text-leaf-600" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-foreground">
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/70 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} GreenHarvest Cooperative. Grown with care in Willowbrook Valley.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
            <a href="#" className="hover:text-foreground">
              Impact report 2025
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
