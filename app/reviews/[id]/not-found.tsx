import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <FileQuestion className="h-24 w-24 text-muted-foreground mx-auto" />
        <div className="space-y-2">
          <h1 className="font-serif text-4xl font-bold text-foreground">Product Not Found</h1>
          <p className="text-lg text-muted-foreground">
            Sorry, we couldn't find the product you're looking for.
          </p>
        </div>
        <Button asChild size="lg">
          <Link href="/reviews">Browse All Reviews</Link>
        </Button>
      </div>
    </div>
  )
}
