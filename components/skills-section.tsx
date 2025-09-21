"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { FadeIn } from "./fade-in"
import { useEffect, useRef, useState } from "react"
import { FloatingElements } from "./floating-elements"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "GraphQL", level: 70 },
    ],
  },
]

function AnimatedProgress({ value, delay = 0 }: { value: number; delay?: number }) {
  const [animatedValue, setAnimatedValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedValue((prev) => {
            if (prev >= value) {
              clearInterval(interval)
              return value
            }
            return prev + 2
          })
        }, 20)
        return () => clearInterval(interval)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isVisible, value, delay])

  return (
    <div ref={ref}>
      <Progress value={animatedValue} className="h-2" />
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30 relative">
      <FloatingElements />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={200}>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Technical <span className="text-primary">Skills</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <FadeIn key={categoryIndex} delay={400 + categoryIndex * 200} direction="up">
                <Card className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-center text-primary">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <AnimatedProgress value={skill.level} delay={600 + categoryIndex * 200 + skillIndex * 100} />
                      </div>
                    ))}
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
