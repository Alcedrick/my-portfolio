"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone } from "lucide-react"
import { FadeIn } from "./fade-in"
import { FloatingElements } from "./floating-elements"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-muted/30 relative">
      <FloatingElements />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={200}>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Get In <span className="text-primary">Touch</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={400} direction="left">
              <div>
                <Card className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle>Let's Work Together</CardTitle>
                    <CardDescription>I'm always interested in new opportunities and exciting projects.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-3 group hover:text-primary transition-colors duration-300">
                      <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span>alcedrickgarcia@gmail.com</span>
                    </div>
                    {/* <div className="flex items-center space-x-3 group hover:text-primary transition-colors duration-300">
                      <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span>+63 945 895 8257</span>
                    </div> */}
                    <div className="flex items-center space-x-3 group hover:text-primary transition-colors duration-300">
                      <MapPin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span>Bocaue, Bulacan</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>

            <FadeIn delay={600} direction="right">
              <Card className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="focus:ring-primary focus:border-primary transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="focus:ring-primary focus:border-primary transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="focus:ring-primary focus:border-primary transition-all duration-300"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full hover:scale-105 transition-transform duration-200"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
