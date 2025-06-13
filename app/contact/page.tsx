"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { FaLinkedin, FaTwitter, FaFacebook, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import ContactForm from "./contact-form"

export default function ContactPage() {
  const addToCalendar = () => {
    const startDate = new Date('2026-03-21T09:00:00')
    const endDate = new Date('2026-03-22T17:00:00')
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=ICISN Conference 2026&dates=${startDate.toISOString().replace(/-|:|\.\d+/g, '')}/${endDate.toISOString().replace(/-|:|\.\d+/g, '')}&details=Join us for the Sixth International Conference on Intelligent Systems and Networks at East Asia University of Technology&location=East Asia University of Technology`
    
    window.open(googleCalendarUrl, '_blank')
  }

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
                <h3 className="font-semibold">Campus 1</h3>
                <p>
                  East Asia University of Technology
                  <br />
                  Trinh Van Bo Street, Nam Tu Liem District, Hanoi City, Vietnam
                  <br />
                  Email: p.nckh@eaut.edu.vn
                  <br />
                  Tel: +84 (0)988 068 075 (08.00-17.00 GMT + 7, Monday-Friday)
                </p>
                <h3 className="font-semibold mt-4">Campus 2</h3>
                <p>
                  East Asia University of Technology
                  <br />
                  Vo Cuong Ward, Bac ninh City, Bac ninh Province, Vietnam
                  <br />
                  Email: p.nckh@eaut.edu.vn
                  <br />
                  Tel: +84 (0)242 2345 999 (08.00-17.00 GMT + 7, Monday-Friday)
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/company/your-conference"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-gray-600 hover:text-gray-900 transition-all duration-300 p-2 hover:bg-gray-100 rounded-full hover:scale-110 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Follow on LinkedIn
                  </span>
                </a>
                <a
                  href="https://twitter.com/your-conference"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-gray-600 hover:text-gray-900 transition-all duration-300 p-2 hover:bg-gray-100 rounded-full hover:scale-110 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Follow on Twitter
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/ICISN9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-gray-600 hover:text-gray-900 transition-all duration-300 p-2 hover:bg-gray-100 rounded-full hover:scale-110 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Follow on Facebook
                  </span>
                </a>
              </div>
            </div>

            {/* Calendar and Map Buttons */}
            <div className="pt-4">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={addToCalendar}
                  className="group relative flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all duration-300 p-2 hover:bg-gray-100 rounded-full hover:scale-110 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                  aria-label="Add to Calendar"
                >
                  <FaCalendarAlt className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="text-sm">Add to Calendar</span>
                </button>
                <a
                  href="https://maps.app.goo.gl/nTfijrAt4zNZCT9aA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all duration-300 p-2 hover:bg-gray-100 rounded-full hover:scale-110 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                  aria-label="View Venue"
                >
                  <FaMapMarkerAlt className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="text-sm">View Venue</span>
                </a>
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

      {/* Map Section */}
      <div className="mt-12 max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.816938711674!2d105.74195831296993!3d21.040009521265485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135096b31fa7abb%3A0xff645782804911af!2zVHLGsOG7nW5nIMSR4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgxJDDtG5nIMOB!5e0!3m2!1sen!2sin!4v1747806623172!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
