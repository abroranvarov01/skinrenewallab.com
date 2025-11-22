import { Card, CardContent } from '@/components/ui/card'
import { FileText } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service - SkinRenewalLab',
  description: 'Terms of Service for SkinRenewalLab.com - Please read before using our website.',
}

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <FileText className="h-12 w-12 text-primary mx-auto" />
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
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
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using SkinRenewalLab.com, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Use License</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Permission is granted to temporarily access the materials on SkinRenewalLab.com for personal, non-commercial viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    The information provided on SkinRenewalLab.com is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>The completeness, accuracy, reliability, suitability or availability of the information, products, services, or related graphics contained on the website</li>
                    <li>Medical advice - our content is not intended to be a substitute for professional medical advice, diagnosis, or treatment</li>
                    <li>Product effectiveness - individual results may vary and are not guaranteed</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Amazon Associates Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    SkinRenewalLab.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. We earn commissions from qualifying purchases made through our affiliate links at no additional cost to you. Our reviews and recommendations are based on our honest opinions and extensive research.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Product Reviews</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our product reviews are based on extensive research, ingredient analysis, customer feedback, and scientific literature. While we strive to provide accurate and helpful information, individual results may vary. We recommend consulting with a dermatologist or healthcare provider before starting any new skincare regimen, especially if you have sensitive skin or known allergies.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Limitations</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall SkinRenewalLab.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">External Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to external sites, including product pages on Amazon.com. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Modifications</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may revise these Terms of Service at any time without notice. By using this website, you are agreeing to be bound by the current version of these Terms of Service. We encourage you to periodically review this page for the latest information on our terms.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us through our contact page or email us at legal@skinrenewallab.com.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
