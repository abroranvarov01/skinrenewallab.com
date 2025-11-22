import ProductReviewPageClient from "./client"
import { products } from "@/lib/products"

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} Review - SkinRenewalLab`,
    description: `Expert review of ${product.name} by ${product.brand}. ${product.fullDescription?.slice(0, 150)}...`,
  }
}

export default function ProductReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  return <ProductReviewPageClient params={params} />
}
