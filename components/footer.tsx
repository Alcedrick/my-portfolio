import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Switch from 1 to 3 columns only at md */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Alcedrick Garcia</h3>
              <p className="text-muted-foreground text-pretty">
                Full Stack Developer passionate about creating amazing web experiences.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <nav className="space-y-2">
                <Link href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
                <Link href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              {/* Center icons on mobile, left-align on larger screens */}
              <div className="flex justify-center sm:justify-start space-x-6">
                <Link href="https://github.com/Alcedrick" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/alcedrick-garcia/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:alcedrickgarcia@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2025 Alcedrick Garcia. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
