export const siteConfig = {
  name: "GreenHarvest",
  tagline: "Cultivating Tomorrow's Harvest, Today",
  description:
    "Premium organic farming, fresh produce, and sustainable agricultural solutions from the farm to your table.",
  nav: [
    { label: "Solutions", href: "#features" },
    { label: "Produce", href: "#products" },
    { label: "Our Story", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  social: {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
  contact: {
    email: "hello@greenharvest.farm",
    phone: "+1 (555) 014-2230",
    address: "Rural Route 12, Willowbrook Valley, CA 94025",
  },
}

export type SiteConfig = typeof siteConfig
