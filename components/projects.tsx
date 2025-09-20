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
              <CardTitle className="text-xl text-card-foreground">Small Phrase API</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/nicosaadjian/Small-Phrase-API" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Check this project
                </a>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-card-foreground leading-relaxed">
              Fully functional API developed with Node.js + Express. Backend deployed in an AWS EC2 miocroservice. PostgreSQL database running in an AWS RDS instance.
              Frontend deployed in Netlify.
              Hit me up if you want to test it and I'll start the server!
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl text-card-foreground">Full Data Dipeline</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/nicosaadjian/data_pipeline_aws" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Check this project
                </a>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-card-foreground leading-relaxed">
              Fully functional Data Pipeline, starting from a CSV raw file, being processed in an ETL and finally loaded into an AWS RDS table for data exploit.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
