import { Card, CardContent } from '@/components/ui/card'
import { Shield } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy - SkinRenewalLab',
  description: 'Privacy Policy for SkinRenewalLab.com - Learn how we protect and use your data.',
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Shield className="h-12 w-12 text-primary mx-auto" />
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
              Privacy Policy
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
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to SkinRenewalLab.com. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We may collect, use, store and transfer different kinds of personal data about you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Identity Data: first name, last name, username or similar identifier</li>
                    <li>Contact Data: email address and contact preferences</li>
                    <li>Technical Data: internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform</li>
                    <li>Usage Data: information about how you use our website, products and services</li>
                    <li>Marketing and Communications Data: your preferences in receiving marketing from us and your communication preferences</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>To provide and maintain our service</li>
                    <li>To notify you about changes to our service</li>
                    <li>To provide customer support</li>
                    <li>To gather analysis or valuable information so that we can improve our service</li>
                    <li>To monitor the usage of our service</li>
                    <li>To detect, prevent and address technical issues</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Amazon Associates Program</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    SkinRenewalLab.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. When you click on Amazon product links on our site and make a purchase, we may earn a commission at no additional cost to you.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Third-Party Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites, including Amazon.com. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We strongly advise you to review the Privacy Policy of every site you visit.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Request access to your personal data</li>
                    <li>Request correction of your personal data</li>
                    <li>Request erasure of your personal data</li>
                    <li>Object to processing of your personal data</li>
                    <li>Request restriction of processing your personal data</li>
                    <li>Request transfer of your personal data</li>
                    <li>Right to withdraw consent</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us through our contact page or email us at privacy@skinrenewallab.com.
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
