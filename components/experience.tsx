import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "OceanSound Partners",
      period: "2025-2025",
      summary: [
        "Software Development in Python",
        "Apps Dockerization",
        "Database Administration w/Snowflake",
        "Unit testing",
        "Data Mantainance",
      ],
      notes:
        "My tasks involved backend software engineering and data engineering. I was in charge of creating software for reporting and data mantainance (ETL workflows and data pipelines). I'm used to working with code reviews and always look forward to mantaining a clean code architecture.",
    },
    {
      title: "Data Engineer",
      company: "Seidor Analytics",
      period: "2022-2025",
      summary: [
        "Python for Data Analysis",
        "SQL for Modelling and Performance",
        "Views and Report creation and maintanance",
        "Technical & Functional Analysis",
      ],
      notes:
        "My tasks involved creating and maintaining SAP HANA Views, analyzing view execution performance and technical analysis of Data availability. On the other hand, I was involved in migrating the customer's database and reporting from Microsoft SSIS to Microsoft Azure Synapse ready for BI utilization.",
    },
    {
      title: "Manual QA",
      company: "Macroseguridad Argentina",
      period: "2021 - 2022",
      summary: [
        "Testing and Virtualization in macOS, Linux & Windows environments",
        "Development and implementation of protocols for NIST regulations with USB crypto tokens compliance",
        "Researching and developing solutions to improve the product's software",
        "Bug tracking",
      ],
      notes:
        "In this job I got hands on Virtualization (VMWare Workstation Pro) in Windows, Linux and macOS environments. My tasks involved manual testing of USB crypto-tokens (digital certificate persistence, login persistence, digital signature functionality cross platform). I also got hands on automation by creating bash and powershell scripts for tokens' driver installation and uninstall. Maybe you can recognize the Linux's background-canvas inspiration.",
    },
  ]

  return (
    <section id="experience" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Work Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-xl text-card-foreground">{exp.title}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-lg font-medium text-primary">{exp.company}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Summary</h4>
                  <ul className="list-disc list-inside space-y-1 text-card-foreground">
                    {exp.summary.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Notes</h4>
                  <p className="text-card-foreground leading-relaxed">{exp.notes}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
