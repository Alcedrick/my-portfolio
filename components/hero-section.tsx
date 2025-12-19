"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { AnimatedText } from "./animated-text"
import { FadeIn } from "./fade-in"


export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">

          <FadeIn delay={400}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Software{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                <AnimatedText text="Developer" delay={800} />
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={1200}>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
              I craft modern web applications with clean code, intuitive design, and cutting-edge technologies.
            </p>
          </FadeIn>

          <FadeIn delay={1600} direction="up">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild className="text-lg px-8 hover:scale-105 transition-transform duration-200">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 bg-transparent hover:scale-105 transition-transform duration-200"
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={2000} direction="up">
            <div className="flex justify-center space-x-6">
              <Link
                href="https://github.com/Alcedrick"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/alcedrick-garcia/"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:alcedrickgarcia@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={2400}>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </FadeIn>
    </section>
  )
}
