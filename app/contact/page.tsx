import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

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
              <Phone className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>0084 906165579</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>nguyenlinh79.haui@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>
                  REV
                 
                </p>
              </div>
            </div>

           
          </CardContent>
        </Card>

        {/* Contact Form Card */}
        <Card>
          
            <CardTitle className="flex justify-center items-center w-full  h-full p-5"> <a href="">Send Us a Message</a></CardTitle>
          
         
        </Card>
      </div>
    </div>
  );
}
