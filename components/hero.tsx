import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">Nicolás Saadjian</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            FullStack Software Developer
          </p>

          <Card className="p-8 bg-card border-border max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-card-foreground mb-6">
              MERN Fullstack Software Developer with a <span className="font-semibold text-primary">strong</span>{" "} background
              in Backend with <span className="font-semibold text-primary">NestJS</span> and frontend with{" "} <span className="font-semibold text-primary">NextJS</span>.  
            </p>
            <p className="text-lg leading-relaxed text-card-foreground">
               I look forward to challenging projects and help organizations through modern, integrated technology.
            </p>
          </Card>

          <div className="flex justify-center space-x-4 mt-8">
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/nicolas-saadjian/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/nicosaadjian" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:nicosaadjian@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
