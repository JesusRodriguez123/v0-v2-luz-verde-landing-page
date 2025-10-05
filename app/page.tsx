import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { Impact } from "@/components/impact"
import { Adoption } from "@/components/adoption"
import { Donations } from "@/components/donations"
import { Testimonial } from "@/components/testimonial"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Impact />
      <Adoption />
      <Donations />
      <Testimonial />
      <Footer />
    </main>
  )
}
