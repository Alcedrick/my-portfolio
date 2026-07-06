import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Microsoft 365 Developer Intern",
    school: "Bangko Sentral ng Pilipinas",
    period: "January - May 2026",
    description:
      "Developed and customized BSP's CPMCO Portal using Power Apps, Dataverse, and Power Automate. Automated business processes, managed enterprise data, and collaborated with stakeholders to improve workflow efficiency and user experience.",
    technologies: ["Microsoft Power Apps", "Microsoft Automate", "Microsoft Dataverse"],
  },
  {
    title: "BS Information Technology",
    school: "Centro Escolar University - Malolos",
    period: "2022 - 2026",
    description:
      "Studied software development, networking, cybersecurity, database management, and systems analysis. Completed academic projects involving Microsoft Power Platform, Dataverse, JavaScript, SQL, and UI/UX prototyping while graduating as a Summa Cum Laude.",
    technologies: ["Summa Cum Laude"],
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="text-primary">Experience</span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"></div>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">{exp.school}</CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
