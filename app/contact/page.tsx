import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import ContactForm from "./contact-form"

export const metadata: Metadata = {
  title: "Contact Us - ICISN 2025",
  description: "Contact information for the Fifth International Conference on Intelligent Systems and Networks",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:px-6 mt-20">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Get in Touch</h1>

      <p className="text-center text-lg text-gray-600 mb-12">We will respond to your message as soon as possible.</p>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {/* Contact Information Card */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>
                  East Asia University of Technology
                  <br />
                  Practical training facility
                  <br />
                  Establishment Decision No.: 1777/QD-TTg
                  <br />
                  Trinh Van Bo Street, Nam Tu Liem, Hanoi
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Custom Contact Form Card */}
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
