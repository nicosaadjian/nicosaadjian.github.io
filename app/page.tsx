import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </main>
  )
}
