import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Achievements } from '@/components/achievements'
import { CodingProfiles } from '@/components/coding-profiles'
import { Certifications } from '@/components/certifications'
import { Timeline } from '@/components/timeline'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { ScrollProgress } from '@/components/scroll-progress'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <CodingProfiles />
      <Certifications />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  )
}
