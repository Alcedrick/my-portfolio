import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "./fade-in"


export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30 relative">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={200}>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              About <span className="text-primary">Me</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <FadeIn delay={400} direction="left">
              <div>
                <Card className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-full h-64 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md">
                      <img src="/me.jpg" alt="" className="w-full h-full object-cover" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>

            <FadeIn delay={600} direction="right">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a 4th-year BS Information Technology student at Centro Escolar University. A passionate full-stack developer who is eager to learn and experience building more scalable web
                  applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community.
                </p>

                <FadeIn delay={800} direction="up">
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="group">
                      <h3 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                        Frontend
                      </h3>
                      <p className="text-sm text-muted-foreground">React, Next.js, TypeScript, Tailwind CSS</p>
                    </div>
                    <div className="group">
                      <h3 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                        Backend
                      </h3>
                      <p className="text-sm text-muted-foreground">Node.js, Python, PHP, MySQL</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
