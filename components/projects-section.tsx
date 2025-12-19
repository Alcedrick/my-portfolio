import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "./fade-in"
import { FloatingElements } from "./floating-elements"

const projects = [
  {
    title: "LiftApp",
    description:
      "An AI Fitness Trainer that provides personalized workout plans, and diet plans to help users achieve their fitness goals. Also features an admin dashboard for managing users, Vapi AI Voice Agent.",
    image: "/liftapp-new.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Google Gemini AI", "Clerk", "Convex"],
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
    title: "LH44",
    description:
      "A Lewis Hamilton Clothing App that offers a wide range of merchandise for fans of the legendary Formula 1 driver.",
    image: "/44+.png",
    technologies: ["Figma", "UI/UX Design", "Prototyping"],
    liveUrl: "https://www.figma.com/proto/vJli2YwMOrfkFeBO5IuCSW",
    githubUrl: "https://www.figma.com/design/vJli2YwMOrfkFeBO5IuCSW",
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
                <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">

                  {/* 🔥 IMAGE WITH OVERLAY BUTTONS */}
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                              
                      {/* Project Image */}
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                  
                      {/* 🔥 Dark Gradient Behind Center Content */}
                      <div className="
                        absolute inset-0 
                        bg-gradient-to-b from-black/0 via-black/40 to-black/70
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300
                      " />
                  
                      {/* 🔥 Centered Buttons + Labels */}
                      <div
                        className="
                          absolute inset-0 
                          flex items-center justify-center 
                          gap-6
                          opacity-0 group-hover:opacity-100 
                          transition-all duration-300
                          translate-y-3 group-hover:translate-y-0
                          z-10
                        "
                      >
                        {/* Live Demo */}
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <div className="flex flex-col items-center gap-1">
                            <div
                              className="
                                p-3 rounded-xl 
                                backdrop-blur-md bg-white/20 
                                hover:bg-primary hover:text-white 
                                transition
                              "
                            >
                              <ExternalLink size={22} />
                            </div>
                            <span className="text-white text-sm font-medium">
                              Live
                            </span>
                          </div>
                        </Link>
                              
                        {/* GitHub */}
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <div className="flex flex-col items-center gap-1">
                            <div
                              className="
                                p-3 rounded-xl 
                                backdrop-blur-md bg-white/20 
                                hover:bg-primary hover:text-white 
                                transition
                              "
                            >
                              <Github size={22} />
                            </div>
                            <span className="text-white text-sm font-medium">
                              GitHub
                            </span>
                          </div>
                        </Link>
                      </div>
                              
                    </div>
                  </CardHeader>


                  <CardContent className="p-6 flex flex-col flex-grow">
                    <CardTitle className="mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>

                    <CardDescription className="mb-4 text-pretty flex-grow">
                      {project.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-2 mt-auto">
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
