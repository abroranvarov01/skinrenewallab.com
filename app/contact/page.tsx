'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Send, MessageSquare } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 24-48 hours.",
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Mail className="h-12 w-12 text-primary mx-auto" />
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Have questions about our reviews or need skincare advice? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="font-serif text-2xl flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Product inquiry, review request, etc."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <a href="mailto:info@skinrenewallab.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      info@skinrenewallab.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We typically respond within 24-48 hours during business days.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Common Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-sm text-foreground mb-1">Product Recommendations</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Browse our reviews page for detailed product analysis and recommendations.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground mb-1">Review Requests</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      We consider all product review requests. Please include product details in your message.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground mb-1">Partnerships</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      For business inquiries, please use the subject line "Partnership Inquiry".
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
