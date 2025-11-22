import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sparkles, Shield, Award, TrendingUp, ChevronRight, Star, CheckCircle2 } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-background to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mx-auto" variant="secondary">
              <Sparkles className="h-3 w-3 mr-1" />
              Science-Backed Skincare
            </Badge>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
              Discover Your Path to
              <span className="text-primary"> Ageless Beauty</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Expert-curated reviews of premium anti-aging serums. Find the perfect solution for radiant, youthful skin backed by real science and honest analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" asChild className="text-base">
                <Link href="/reviews">
                  Explore Top Serums
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <Link href="/about">Learn Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Why Trust SkinRenewalLab?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              We combine scientific research with real-world testing to bring you unbiased, comprehensive reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Unbiased Reviews',
                description: 'Independent analysis with no brand affiliations influencing our ratings.'
              },
              {
                icon: Award,
                title: 'Expert Analysis',
                description: 'Reviews backed by dermatological science and skincare expertise.'
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description: 'Only recommend products with documented efficacy and user satisfaction.'
              },
              {
                icon: Sparkles,
                title: 'Latest Innovations',
                description: 'Stay updated with cutting-edge anti-aging technologies and ingredients.'
              }
            ].map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Top-Rated Anti-Aging Serums
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Our expert picks for the most effective anti-aging solutions available today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                name: 'Retinol Youth Renewal',
                rating: 4.8,
                reviews: 2847,
                price: '$89.99',
                image: '/luxury-retinol-serum-bottle.jpg'
              },
              {
                name: 'Vitamin C Radiance Serum',
                rating: 4.9,
                reviews: 3621,
                price: '$74.99',
                image: '/vitamin-c-serum.png'
              },
              {
                name: 'Hyaluronic Hydration Complex',
                rating: 4.7,
                reviews: 1923,
                price: '$65.99',
                image: '/hyaluronic-acid-serum-bottle.jpg'
              }
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 bg-muted overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    {product.rating}
                  </Badge>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-xl text-foreground mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.reviews} verified reviews</p>
                  </div>
                  <div className="flex items-center justify-between">
                    
                    <Button asChild size="sm">
                      <Link href="/reviews">
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/reviews">
                View All Reviews
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Ingredients */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Key Anti-Aging Ingredients
            </h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Understanding the science behind effective anti-aging skincare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Retinol', benefit: 'Reduces fine lines and stimulates collagen production' },
              { name: 'Vitamin C', benefit: 'Brightens skin and protects against environmental damage' },
              { name: 'Hyaluronic Acid', benefit: 'Deeply hydrates and plumps skin for a youthful appearance' },
              { name: 'Peptides', benefit: 'Supports skin structure and promotes firmness' },
              { name: 'Niacinamide', benefit: 'Improves skin texture and minimizes pore appearance' },
              { name: 'Alpha Hydroxy Acids', benefit: 'Exfoliates and reveals fresh, radiant skin' }
            ].map((ingredient, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-1">{ingredient.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{ingredient.benefit}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-balance">
              Ready to Transform Your Skin?
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty leading-relaxed">
              Explore our comprehensive reviews and find the perfect anti-aging serum for your unique skin needs.
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary" asChild className="text-base">
                <Link href="/reviews">
                  Browse All Reviews
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
