import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, Award, ChevronRight } from "lucide-react"
import { products } from "@/lib/products"

export default function ReviewsPage() {
  const featuredProducts = products.filter((p) => p.featured)
  const allProducts = products

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="secondary" className="mx-auto">
              <Award className="h-3 w-3 mr-1" />
              Expert Reviews
            </Badge>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground text-balance">
              Anti-Aging Serum Reviews
            </h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Discover the most effective anti-aging serums through our comprehensive, science-backed reviews. Each
              product is thoroughly tested and analyzed.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground">Top Rated Serums</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <Card
                key={product.slug}
                className="overflow-hidden hover:shadow-xl transition-all group border-2 border-primary/20"
              >
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
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Top Pick</Badge>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{product.brand}</p>
                    <h3 className="font-semibold text-xl text-foreground mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.reviews} verified reviews</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {product.keyIngredient}
                      </Badge>
                    </div>
                    <ul className="space-y-1">
                      {product.benefits.slice(0, 2).map((benefit, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                          <span className="h-1 w-1 rounded-full bg-primary shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <Button asChild size="sm">
                      <Link href={`/reviews/${product.slug}`}>
                        Full Review
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-2">All Anti-Aging Serums</h2>
            <p className="text-muted-foreground">
              Browse our complete collection of {allProducts.length} reviewed products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product) => (
              <Card key={product.slug} className="overflow-hidden hover:shadow-lg transition-all group">
                <div className="relative h-56 bg-muted overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/95 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="h-3 w-3 text-primary fill-current" />
                    <span className="text-xs font-semibold text-foreground">{product.rating}</span>
                  </div>
                </div>
                <CardContent className="p-5 space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{product.brand}</p>
                    <h3 className="font-semibold text-lg text-foreground mb-1 line-clamp-2">{product.name}</h3>
                    <p className="text-xs text-muted-foreground">{product.reviews} reviews</p>
                  </div>

                  <Badge variant="secondary" className="text-xs">
                    {product.keyIngredient}
                  </Badge>

                  <div className="flex items-center justify-between pt-2">
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/reviews/${product.slug}`}>
                        View
                        <ChevronRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12 text-center space-y-4">
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-balance">
                Can't Decide Which Serum is Right for You?
              </h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed">
                Read our detailed reviews to understand the science, ingredients, and real results behind each product.
              </p>
              <Button size="lg" variant="secondary" asChild className="mt-4">
                <Link href="/about">Learn Our Review Process</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
