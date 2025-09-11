import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Contact Me</h2>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-center text-card-foreground">Let's Connect</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" asChild>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button asChild>
                <a href="mailto:contact@example.com" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Me
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
