import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - ICISN 2025",
  description: "Contact information for the Fifth International Conference on Intelligent Systems and Networks",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:px-6 mt-20">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        Get in Touch
      </h1>

      <p className="text-center text-lg text-gray-600 mb-12">
        We will respond to your message as soon as possible.
      </p>

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
                  East Asia University of Technology<br />
                  Practical training facility<br />
                  Establishment Decision No.: 1777/QD-TTg<br />
                  Trinh Van Bo Street, Nam Tu Liem, Hanoi
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Contact Form Embed Card */}
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full" style={{ paddingTop: "150%" }}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdL7jBQvucDNucFbi8ujzVUGS8xdmU0lEgtXv4nIflYuzWlfA/viewform?embedded=true"
                className="absolute top-0 left-0 w-full h-full rounded-md border-0"
                allowFullScreen
              >
                Loading…
              </iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
