"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, CheckCircle2, XCircle, ShoppingCart, ArrowLeft, ExternalLink } from "lucide-react"
import { notFound, useParams } from "next/navigation"
import { useEffect } from "react"
import { products } from "@/lib/products"

export default function ProductReviewPageClient() {
	const params = useParams();
	const slug = params.slug;
	const product = products.find((p) => p.slug === slug)

	if (!product) {
		notFound()
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.henv === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"henv=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	const ratingPercentage = (product.rating / 5) * 100

	return (
		<div className="flex flex-col">
			{/* Breadcrumb */}
			<div className="bg-secondary border-b border-border">
				<div className="container mx-auto px-4 py-4">
					<Button variant="ghost" size="sm" asChild>
						<Link href="/reviews">
							<ArrowLeft className="mr-2 h-4 w-4" />
							Back to Reviews
						</Link>
					</Button>
				</div>
			</div>

			{/* Hero Section */}
			<section className="py-8 md:py-12 bg-background">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
						{/* Product Image */}
						<div className="space-y-4">
							<div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
								<img
									src={product.image || "/placeholder.svg"}
									alt={product.name}
									className="w-full h-full object-cover"
								/>
								{product.featured && (
									<Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Editor's Choice</Badge>
								)}
							</div>
						</div>

						{/* Product Info */}
						<div className="space-y-6">
							<div>
								<p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">{product.brand}</p>
								<h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
									{product.name}
								</h1>

								{/* Rating */}
								<div className="flex items-center gap-4 mb-4">
									<div className="flex items-center gap-2">
										<div className="flex">
											{[1, 2, 3, 4, 5].map((star) => (
												<Star
													key={star}
													className={`h-5 w-5 ${star <= Math.round(product.rating) ? "text-primary fill-current" : "text-muted-foreground"
														}`}
												/>
											))}
										</div>
										<span className="font-bold text-lg text-foreground">{product.rating}</span>
									</div>
									<span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
								</div>

								<p className="text-lg text-muted-foreground leading-relaxed">{product.fullDescription}</p>
							</div>

							{/* Key Benefits */}
							<div className="space-y-3">
								<h3 className="font-semibold text-lg text-foreground">Key Benefits:</h3>
								<div className="flex flex-wrap gap-2">
									{product.benefits.map((benefit, index) => (
										<Badge key={index} variant="secondary" className="text-sm">
											{benefit}
										</Badge>
									))}
								</div>
							</div>

							{/* Price & CTA */}
							<Card className="border-2 border-primary/20 bg-primary/5">
								<CardContent className="p-6 space-y-4">
									<div className="flex items-baseline gap-2"></div>
									<Button size="lg" className="w-full text-base" asChild>
										<a
											href={product.amazonLink}
											data-auto
										>
											<ShoppingCart className="mr-2 h-5 w-5" />
											View on Amazon
											<ExternalLink className="ml-2 h-4 w-4" />
										</a>
									</Button>
									<p className="text-xs text-muted-foreground text-center">
										As an Amazon Associate, we earn from qualifying purchases
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Detailed Review Sections */}
			<section className="py-12 md:py-16 bg-secondary">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto space-y-8">
						{/* Active Ingredients */}
						{product.activeIngredients && (
							<Card>
								<CardHeader>
									<CardTitle className="font-serif text-2xl">Active Ingredients</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									{product.activeIngredients.map((ingredient, index) => (
										<div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
											<div className="flex items-start justify-between mb-2">
												<h4 className="font-semibold text-foreground">{ingredient.name}</h4>
												<Badge variant="outline">{ingredient.concentration}</Badge>
											</div>
											<p className="text-sm text-muted-foreground leading-relaxed">{ingredient.benefit}</p>
										</div>
									))}
								</CardContent>
							</Card>
						)}

						{/* How to Use */}
						{product.howToUse && (
							<Card>
								<CardHeader>
									<CardTitle className="font-serif text-2xl">How to Use</CardTitle>
								</CardHeader>
								<CardContent>
									<ol className="space-y-3">
										{product.howToUse.map((step, index) => (
											<li key={index} className="flex gap-3">
												<span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-semibold shrink-0">
													{index + 1}
												</span>
												<span className="text-muted-foreground leading-relaxed pt-0.5">{step}</span>
											</li>
										))}
									</ol>
								</CardContent>
							</Card>
						)}

						{/* Best For */}
						{product.bestFor && (
							<Card>
								<CardHeader>
									<CardTitle className="font-serif text-2xl">Best For</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
										{product.bestFor.map((item, index) => (
											<div key={index} className="flex items-center gap-2">
												<CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
												<span className="text-foreground">{item}</span>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						)}

						{/* Pros & Cons */}
						{product.proscons && (
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Card className="border-green-500/20">
									<CardHeader>
										<CardTitle className="font-serif text-xl text-green-600 dark:text-green-400">Pros</CardTitle>
									</CardHeader>
									<CardContent>
										<ul className="space-y-3">
											{product.proscons.pros.map((pro, index) => (
												<li key={index} className="flex gap-2">
													<CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
													<span className="text-sm text-foreground leading-relaxed">{pro}</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>

								<Card className="border-red-500/20">
									<CardHeader>
										<CardTitle className="font-serif text-xl text-red-600 dark:text-red-400">Cons</CardTitle>
									</CardHeader>
									<CardContent>
										<ul className="space-y-3">
											{product.proscons.cons.map((con, index) => (
												<li key={index} className="flex gap-2">
													<XCircle className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
													<span className="text-sm text-foreground leading-relaxed">{con}</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							</div>
						)}

						{/* Overall Rating */}
						<Card className="bg-primary text-primary-foreground border-0">
							<CardContent className="p-8 text-center space-y-4">
								<div className="space-y-2">
									<div className="text-6xl font-bold">{product.rating}</div>
									<div className="flex justify-center">
										{[1, 2, 3, 4, 5].map((star) => (
											<Star
												key={star}
												className={`h-6 w-6 ${star <= Math.round(product.rating) ? "fill-current" : "opacity-30"}`}
											/>
										))}
									</div>
									<p className="text-primary-foreground/90">Out of 5 Stars</p>
								</div>
								<Progress value={ratingPercentage} className="h-2 bg-primary-foreground/20" />
								<p className="text-sm text-primary-foreground/90">
									Based on {product.reviews} verified customer reviews
								</p>
								<Button size="lg" variant="secondary" asChild className="mt-4">
									<a
										href={product.amazonLink}
										data-auto
									>
										Buy on Amazon
										<ExternalLink className="ml-2 h-4 w-4" />
									</a>
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Related Products */}
			<section className="py-12 md:py-16 bg-background">
				<div className="container mx-auto px-4">
					<h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
						You Might Also Like
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
						{products
							.filter((p) => p.slug !== product.slug)
							.slice(0, 3)
							.map((relatedProduct) => (
								<Card key={relatedProduct.slug} className="overflow-hidden hover:shadow-lg transition-all group">
									<div className="relative h-48 bg-muted overflow-hidden">
										<img
											src={relatedProduct.image || "/placeholder.svg"}
											alt={relatedProduct.name}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
										/>
										<div className="absolute top-3 right-3 flex items-center gap-1 bg-background/95 backdrop-blur-sm rounded-full px-2 py-1">
											<Star className="h-3 w-3 text-primary fill-current" />
											<span className="text-xs font-semibold text-foreground">{relatedProduct.rating}</span>
										</div>
									</div>
									<CardContent className="p-4 space-y-3">
										<div>
											<p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
												{relatedProduct.brand}
											</p>
											<h3 className="font-semibold text-foreground line-clamp-2 mb-2">{relatedProduct.name}</h3>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-lg font-bold text-primary">{relatedProduct.price}</span>
											<Button asChild size="sm" variant="outline">
												<Link href={`/reviews/${relatedProduct.slug}`}>View</Link>
											</Button>
										</div>
									</CardContent>
								</Card>
							))}
					</div>
				</div>
			</section>
		</div>
	)
}
