import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Award, Users, Microscope, Heart, Target, Shield, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'About Us - SkinRenewalLab',
  description: 'Learn about SkinRenewalLab - Your trusted source for science-backed anti-aging serum reviews.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mx-auto">
              <Award className="h-3 w-3 mr-1" />
              Est. 2024
            </Badge>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground text-balance">
              About SkinRenewalLab
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Your trusted source for science-backed anti-aging serum reviews and skincare education.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardContent className="p-6 md:p-8 space-y-6">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At SkinRenewalLab, we believe that everyone deserves access to honest, science-backed information about anti-aging skincare. Our mission is to cut through the marketing hype and provide you with comprehensive, unbiased reviews that help you make informed decisions about the products you put on your skin.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">What We Do</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We meticulously research and review anti-aging serums available on Amazon, analyzing their ingredients, effectiveness, and value. Each review is backed by scientific research, dermatological principles, and real user experiences to give you a complete picture of what to expect.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Microscope,
                  title: 'Science-Based',
                  description: 'Every review is grounded in dermatological research and proven skincare science.'
                },
                {
                  icon: Shield,
                  title: 'Unbiased Reviews',
                  description: 'Independent analysis with no brand partnerships influencing our recommendations.'
                },
                {
                  icon: Heart,
                  title: 'Consumer First',
                  description: 'Your skin health and satisfaction are our top priorities in every recommendation.'
                }
              ].map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6 space-y-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Review Process
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  icon: Target,
                  title: 'Ingredient Analysis',
                  description: 'We examine each active ingredient, its concentration, and scientific evidence supporting its effectiveness in anti-aging skincare.'
                },
                {
                  icon: Users,
                  title: 'User Research',
                  description: 'We analyze hundreds of verified customer reviews to understand real-world results, common experiences, and potential side effects.'
                },
                {
                  icon: Award,
                  title: 'Expert Evaluation',
                  description: 'Our team evaluates products based on formulation quality, ingredient synergy, texture, absorption, and overall value for money.'
                },
                {
                  icon: Microscope,
                  title: 'Scientific Validation',
                  description: 'We reference peer-reviewed studies and dermatological research to validate claims and set realistic expectations.'
                }
              ].map((step, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 md:p-8 space-y-6">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Transparency & Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    SkinRenewalLab.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. This means that when you click on our product links and make a purchase, we may earn a small commission at no additional cost to you.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    However, this does not influence our reviews or recommendations. We only recommend products that we genuinely believe offer value based on our thorough research and analysis. Our integrity and your trust are more important to us than any commission.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Medical Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The information provided on SkinRenewalLab is for educational purposes only and is not intended as medical advice. While we base our reviews on scientific research and dermatological principles, individual results may vary. We recommend consulting with a dermatologist or healthcare provider before starting any new skincare regimen, especially if you have sensitive skin, allergies, or existing skin conditions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance">
              Ready to Find Your Perfect Serum?
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty leading-relaxed">
              Explore our comprehensive reviews and discover the anti-aging solution that's right for your skin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/reviews">
                  Browse Reviews
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
