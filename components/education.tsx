import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Education() {
  return (
    <section id="education" className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Education</h2>

        <div className="space-y-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <CardTitle className="text-xl text-card-foreground">Bachelor in Computer Science</CardTitle>
                <Badge variant="outline">2020-present</Badge>
              </div>
              <p className="text-lg font-medium text-primary">Universidad de Buenos Aires</p>
            </CardHeader>
            <CardContent>
              <p className="text-card-foreground leading-relaxed">
                In this career I have learned in-depth critical thinking regarding problem solving, functional analysis and work organization.
                <br />
                Some of the tools I've worked at university include the following: Assembly language (Risc V/x86), C, Java, Python, Haskell, GitLab, LaTeX. 
                Thanks to this experience, my approach to programming is math-oriented.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground">Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    First Certificate in English
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
