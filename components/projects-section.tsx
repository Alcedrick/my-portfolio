import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "./fade-in"
import { FloatingElements } from "./floating-elements"

const projects = [
  {
    title: "LiftApp",
    description:
      "An AI Fitness Trainer that provides personalized workout plans, and diet plans to help users achieve their fitness goals. Also features an admin dashboard for managing users, Vapi AI Voice Agent. ",
    image: "/liftapp.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Gemini AI", "Clerk", "Convex"],
    liveUrl: "https://liftapp-evolved.vercel.app/",
    githubUrl: "https://github.com/Alcedrick/evolved_test_build",
  },
  {
    title: "Escoventory",
    description: "A science laboratory inventory management system that tracks chemicals, equipment, and supplies with real-time updates and reporting.",
    image: "/escoventory.png",
    technologies: ["PHP", "CSS", "MySQL", "Bootstrap"],
    liveUrl: "https://bsitport2026.com/group2/CEU%20Inv%20Sys/index.php",
    githubUrl: "https://github.com/avzyl/CEU_Inv_Sys",
  },
  {
    title: "Avesta",
    description:
      "A Bank Queuing System that streamlines customer service by managing queues efficiently, reducing wait times, and enhancing overall user experience.",
    image: "/avesta.png",
    technologies: ["PHP", "CSS", "MySQL", "Bootstrap"],
    liveUrl: "https://bsitport2026.com/group2/website/avesta/",
    githubUrl: "https://github.com/avzyl/Avesta",
  },
  {
    title: "CMU",
    description: "A class record system that allows teachers to manage student grades, attendance, and performance efficiently.",
    image: "/CMU.png",
    technologies: ["PHP", "CSS", "MySQL", "Bootstrap"],
    liveUrl: "https://bsitport2026.com/group2/website/CMU/index.php",
    githubUrl: "https://github.com/avzyl/CMU",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <FloatingElements />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn delay={200}>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Featured <span className="text-primary">Projects</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FadeIn key={index} delay={400 + index * 200} direction={index % 2 === 0 ? "left" : "right"}>
                <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-4">
                        <Button
                          size="sm"
                          asChild
                          className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100"
                        >
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                        >
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mb-4 text-pretty">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                          style={{ animationDelay: `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
