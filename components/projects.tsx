import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Projects</h2>

        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl text-card-foreground">Fake MDN</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Check this out
                </a>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-card-foreground leading-relaxed">
              Clone of Mozilla Developer Network, with reimagined functions of Array objects.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
