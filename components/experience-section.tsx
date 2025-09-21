import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "BS Information Technology",
    school: "Centro Escolar University - Malolos",
    period: "2022 - 2026",
    description:
      "Lead development of scalable web applications serving 100k+ users. Mentored junior developers and implemented CI/CD pipelines.",
    technologies: ["President's Lister"],
  },
  {
    title: "ICT - Senior High School",
    school: "Dr. Yanga's Colleges Inc.",
    period: "2020 - 2022",
    description:
      "Built the company's main product from scratch, including frontend, backend, and database architecture. Collaborated with design team to create intuitive user experiences.",
    technologies: ["With Honors"],
  },
  {
    title: "Junior High School",
    school: "Dr. Yanga's Colleges Inc.",
    period: "2016 - 2020",
    description:
      "Developed responsive websites and web applications for various clients. Focused on performance optimization and accessibility.",
    technologies: ["With Honors"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            School <span className="text-primary">Experience</span>
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
