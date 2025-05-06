"use client"

import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function ForAttendeesPage() {
  
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [activeTab, setActiveTab] = useState("registration");
  return (
    <div className="container mx-auto px-4 py-24 md:px-6 mt-20">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">For Attendees</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto relative">
        {/* Mobile: Hamburger Button (Positioned to the right) */}
        <div className="md:hidden flex justify-end">
          <button
            className="p-3 rounded-md text-white bg-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu (Slide-down animation, right-aligned) */}
        <div
          className={`absolute right-4 top-20 w-48 rounded-lg shadow-lg bg-black text-white transition-all duration-300 
          ${mobileMenuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
        >
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
            onClick={() => {
              setActiveTab("registration");
              setMobileMenuOpen(false);
            }}
          >
            Registration
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
            onClick={() => {
              setActiveTab("Submission");
              setMobileMenuOpen(false);
            }}
          >
            Submission
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
            onClick={() => {
              setActiveTab("important dates");
              setMobileMenuOpen(false);
            }}
          >
            Important Dates
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
            onClick={() => {
              setActiveTab("accommodation");
              setMobileMenuOpen(false);
            }}
          >
            Accommodation
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
            onClick={() => {
              setActiveTab("program");
              setMobileMenuOpen(false);
            }}
          >
            Program
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
            onClick={() => {
              setActiveTab("publication");
              setMobileMenuOpen(false);
            }}
          >
            Publication
          </button>
        </div>

        {/* Desktop View: TabsList (Always Visible) */}
        <TabsList className="hidden md:grid w-full grid-cols-6 bg-foreground text-background">
          <TabsTrigger value="registration">Registration</TabsTrigger>
          <TabsTrigger value="Submission">Submission</TabsTrigger>
          <TabsTrigger value="important dates">Important Dates</TabsTrigger>
          <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
          <TabsTrigger value="program">Program</TabsTrigger>
          <TabsTrigger value="publication">Publication</TabsTrigger>
        </TabsList>


        <TabsContent value="registration" className="mt-6">
          {/*<Card>
            <CardHeader>
              <CardTitle>Registration Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The conference registration fee includes admission to all conference sessions, coffee break refreshments, lunches, the Banquet, and a copy of the Conference Abstract.
              </p>

              <h3 className="text-xl font-semibold mt-4">Registration Fees</h3>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3 text-left">Category</th>
                      <th className="p-3 text-left">Early Registration (Before Feb 21, 2026)</th>
                      <th className="p-3 text-left">Late Registration (Feb 22 - Mar 1, 2026)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-3">Full-Time Research Student</td>
                      <td className="p-3">$170 (4,350,000 VND)</td>
                      <td className="p-3">$200 (5,100,000 VND)</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3">Faculty</td>
                      <td className="p-3">$200 (5,100,000 VND)</td>
                      <td className="p-3">$250 (6,370,000 VND)</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3">Industry</td>
                      <td className="p-3">$250 (6,370,000 VND)</td>
                      <td className="p-3">$300 (7,650,000 VND)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                Each registration covers only one author who attends the conference. Additional pages beyond the 6-page limit will be charged at $15 (385,000 VND) per page, up to a maximum of 10 pages.
              </p>

              <h3 className="text-xl font-semibold mt-4">Refund Policy</h3>
              <p>
                If an author wishes to cancel their registration, a 50% refund will be provided if the request is made before February 20, 2026. After this date, no refunds will be issued.
              </p>

              <h3 className="text-xl font-semibold mt-4">One-Day Attendance</h3>
              <p>
                Attendees who are not presenting papers can register for a one-day pass at $25 per day, payable at the conference venue.
              </p>

              <h3 className="text-xl font-semibold mt-4">Presentation Requirement</h3>
              <p>
                Papers that are not presented at the conference will not be included in the conference proceedings.
              </p>

              <h3 className="text-xl font-semibold mt-4">Payment Information</h3>
              <p>Payments can be made via bank transfer or PayPal.</p>

              <h4 className="text-lg font-semibold mt-2">Bank Transfer</h4>
              <p>
                <strong>Customer Name:</strong> Hanoi University of Industry<br />
                <strong>Account Number:</strong> 3100201013188<br />
                <strong>Bank Name:</strong> Vietnam Bank for Agriculture and Rural Development - Tu Liem Branch<br />
                <strong>Swift Code:</strong> VBAAVNVX406<br />
                <strong>Transfer Content:</strong> ICISN 2026 ID paper...
              </p>

              <h4 className="text-lg font-semibold mt-2">PayPal</h4>
              <p>
                <a href="https://www.paypal.me/dieulinh79" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Pay via PayPal</a><br />
                <strong>Transfer Content:</strong> ICISN 2026 ID paper...
              </p>

              <h3 className="text-xl font-semibold mt-4">Post-Payment Submission</h3>
              <p>
                After completing the payment, please send the following documents to <strong>Nguyenlinh79.haui@gmail.com</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Justification of bank transfer for registration</li>
                <li>Final paper submission (Word or LaTeX source)</li>
                <li>Publishing agreement</li>
              </ul>

              <p className="mt-4"><strong>Contact:</strong> +84 906165579</p>
            </CardContent>
          </Card>*/}
        </TabsContent>

        <TabsContent value="Submission" className="mt-6">
  <Card>
    <CardHeader>
      <CardTitle>Paper Submission</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <h3 className="text-xl font-semibold">Requirements</h3>
      <p>
        Papers must be formatted according to the instructions provided by Springer. Please carefully read the
        guidelines to ensure that your paper is formatted correctly before submission.
      </p>

      <ul className="list-disc pl-5 space-y-1">
        <li>Full papers must be within 6 pages but cannot exceed 10 pages.</li>
        <li>Papers must be written in English.</li>
        <li>All submissions must be original and not previously published or under review elsewhere.</li>
        <li>Papers must use the required format as described in the templates below:</li>
      </ul>

      <div className="space-y-2">
        <p>
          📄 <a href="https://www.springer.com/gp/authors-editors/conference-proceedings" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Springer Guidelines</a>
        </p>
        <p>
          📂 <a href="https://example.com/latex-template" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">LaTeX Template</a>
        </p>
        <p>
          📂 <a href="https://example.com/word-template" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Word Template</a>
        </p>
        <p>
          📝 <a href="https://example.com/copyright-form" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Download Copyright Form</a>
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-4">Submission Procedure</h3>
      <p>
        All full papers must be submitted through the Conference Management Toolkit (CMT) portal.
      </p>
      <p>
        🔗 <a href="https://cmt3.research.microsoft.com/ICISN2026" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Submit via CMT</a>
      </p>

      <h3 className="text-xl font-semibold mt-4">General Requirements</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>🔹 Language: All submissions must be in English.</li>
        <li>🔹 Originality: Submissions must be original and not under review elsewhere.</li>
        <li>🔹 Formatting: Follow the provided templates and guidelines.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Submission Process</h3>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <strong>Account Creation:</strong>  
          Visit the CMT website, create an account, or log in.
        </li>
        <li>
          <strong>Conference Selection:</strong>  
          Select "ICISN 2026" from the list and review the submission guidelines.
        </li>
        <li>
          <strong>Paper Submission:</strong>  
          <ul className="list-disc pl-5 space-y-1">
            <li>Prepare your manuscript following the format guidelines.</li>
            <li>Convert it to a PDF file with all fonts embedded.</li>
            <li>Log in to CMT and navigate to the "Author Console."</li>
            <li>Click “Create new submission” and enter details like title and abstract.</li>
            <li>Upload the PDF manuscript.</li>
          </ul>
        </li>
        <li>
          <strong>Additional Materials:</strong>  
          Upload supplementary files if required.
        </li>
        <li>
          <strong>Review and Confirmation:</strong>  
          Double-check your submission details before finalizing.
        </li>
        <li>
          <strong>Tracking and Updates:</strong>  
          <ul className="list-disc pl-5 space-y-1">
            <li>You will receive a confirmation email upon submission.</li>
            <li>Track your submission status through the CMT portal.</li>
          </ul>
        </li>
      </ol>

      <h3 className="text-xl font-semibold mt-4">Post-Submission Process</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Revisions:</strong> If revisions are requested, submit the updated paper by the deadline.</li>
        <li><strong>Communication:</strong> Check your email regularly for updates or reviewer comments.</li>
        <li><strong>Final Submission:</strong> Upon acceptance, follow final submission guidelines, including copyright agreements and registration.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Contact for Submissions</h3>
      <p>
        📧 <strong>Email:</strong> <a href="mailto:submissions@icisn2026.com" className="text-blue-500 underline">submissions@icisn2026.com</a>
        <br />
        📞 <strong>Phone:</strong> +84 906165579
      </p>
    </CardContent>
  </Card>
</TabsContent>
<TabsContent value="publication" className="mt-6">
  {/*<Card>
    <CardHeader>
      <CardTitle>Publications</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p>
        The proceedings of The <strong>International Conference on Intelligent Systems & Networks (ICISN 2026)</strong> will be published in the <strong>Lecture Notes in Networks and Systems (LNNS)</strong> series by Springer.
      </p>

      <p>
        The books of this series are indexed by <strong>SCOPUS, INSPEC, WTI Frankfurt eG, ZbMATH,</strong> and <strong>SCImago</strong>.
      </p>

      <p>
        All books published in the series are submitted for consideration in the <strong>Web of Science</strong>.
      </p>
    </CardContent>
  </Card>*/}
</TabsContent>



<TabsContent value="important dates" className="mt-6">
  <Card>
    <CardHeader>
      <CardTitle>Important Dates</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p>
        Please take note of the important deadlines for ICISN 2026. Ensure timely submission and registration to avoid any issues.
      </p>

      <h3 className="text-xl font-semibold mt-4">Submission & Decision Deadlines</h3>
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="p-3 text-left">Event</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">Paper Submission Deadline</td>
              <td className="p-3">22 November 2026, 22 December 2026</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">Papers Decision</td>
              <td className="p-3">18 January 2026, 14 February 2026</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold mt-4">Registration Deadlines</h3>
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="p-3 text-left">Event</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">Early Registration</td>
              <td className="p-3">21 February 2026</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">Late Registration</td>
              <td className="p-3">After 10 March 2026</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold mt-4">Stay Updated</h3>
      <p>
        All authors and attendees should check their emails regularly for updates regarding their submissions and registration status.
      </p>

      <p className="mt-4"><strong>Contact:</strong> For any inquiries, please reach out via email or phone.</p>
    </CardContent>
  </Card>
</TabsContent>




<TabsContent value="accommodation" className="mt-6">
  <Card>
    <CardHeader>
      <CardTitle>Accommodation</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p>Authors attending the ICISN conference may refer to the list of nearby venues provided below:</p>

      <div className="grid gap-4 md:grid-cols-2 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Grand Hotel Trinh Van Bo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Address: LK27/46 P. Trinh Van Bo, KDT HUD, Nam Tu Liem, Ha Noi 100000, Viet Nam</p>
            <p className="mb-2"><a href="https://maps.app.goo.gl/DhMmbbZ8N69MEMb9A" className="text-blue-500 underline" target="_blank">View on Map</a></p>
            <p>Phone: (+84) 986438579</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trường Linh Hotel</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Address: Ngo 33, Tu Hoàng, Nam Tu Liem, Ha Noi, Viet Nam</p>
            <p className="mb-2"><a href="https://maps.app.goo.gl/mLJyHWNfLspvohDr7" className="text-blue-500 underline" target="_blank">View on Map</a></p>
            <p>Phone: (+84) 965998399</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Grand Hotel</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Address: Dat dich vu 1,77ha, Khu, Van Canh, Hoai Duc, Ha Noi, Viet Nam</p>
            <p className="mb-2"><a href="https://maps.app.goo.gl/e1BKFS4cNUsrWSNU6" className="text-blue-500 underline" target="_blank">View on Map</a></p>
            <p>Phone: 02433652555</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>King’s Hotel My Dinh</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Address: BT1, Biet thu A14, P. Bui Xuan Phai, My Dinh, Nam Tu Liem, Ha Noi, Viet Nam</p>
            <p className="mb-2"><a href="https://maps.app.goo.gl/PqDnFqnhtU1RouFv9" className="text-blue-500 underline" target="_blank">View on Map</a></p>
            <p className="mb-2">Phone: 02438332299</p>
            <p><a href="https://kinghotels.vn/" className="text-blue-500 underline" target="_blank">Visit Website</a></p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sheraton Hanoi West</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Address: 36 D. Le Duc Tho, Street, Nam Tu Liem, Ha Noi, Viet Nam</p>
            <p className="mb-2"><a href="https://maps.app.goo.gl/uF9jecCQgG5Excuf6" className="text-blue-500 underline" target="_blank">View on Map</a></p>
            <p className="mb-2">Phone: 02422301234</p>
            <p><a href="https://vn.sheratonhanoiwest.com/" className="text-blue-500 underline" target="_blank">Visit Website</a></p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lotus Aroma Hotel</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Address: 6 Ngo 2 D. Phu My, To Dan Pho so 4, Nam Tu Liem, Ha Noi, Viet Nam</p>
            <p className="mb-2"><a href="https://maps.app.goo.gl/ri7hkfMRk6kBAZ2u9" className="text-blue-500 underline" target="_blank">View on Map</a></p>
            <p>Phone: (+84) 969562569</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>DLmos Hotel</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Address: 89A D. Le Duc Tho, My Dinh, Nam Tu Liem, Ha Noi, Viet Nam</p>
            <p className="mb-2"><a href="https://maps.app.goo.gl/DxN9KZ2oFzU9FjqP7" className="text-blue-500 underline" target="_blank">View on Map</a></p>
            <p className="mb-2">Phone: (+84) 979594142</p>
            <p><a href="http://dlmos.vn/" className="text-blue-500 underline" target="_blank">Visit Website</a></p>
          </CardContent>
        </Card>
      </div>

      <p className="mt-4">Please book your accommodation early as availability is limited.</p>
    </CardContent>
  </Card>
</TabsContent>


<TabsContent value="program" className="mt-6">
  <Card>
    <CardHeader>
      <CardTitle>Conference Program</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      <p>The detailed program for ICISN 2026 is outlined below.</p>

      {/* Day 1 - March 22, 2026 */}
      <div className="border-b pb-4">
        <h3 className="text-2xl font-bold mt-6">Day 1 (March 22, 2026)</h3>
        <p className="text-lg"><strong>Time:</strong> 07:30 - 20:00</p>
        <p className="text-lg"><strong>Venue:</strong> Meeting Room, 4th floor, A1 Building</p>
      </div>

      <ul className="space-y-4">
        <li><strong>07:30 - 08:30:</strong> Registration</li>
        <li><strong>08:30 - 08:40:</strong> MC Introduction</li>
        <li><strong>08:40 - 08:45:</strong> Welcome Speech from HaiU</li>
        <li><strong>08:45 - 08:50:</strong> Speech from ICISN 2026 Program Chair</li>

        <hr />

        <li>
          <strong>08:50 - 09:30:</strong>  
          <span className="text-blue-600 font-semibold">Keynote Speaker 01:</span> Prof. Reza Hoseinnezhad (RMIT University, Australia)  
          <em>"Distributed Information Fusion for Multi-Target Tracking"</em>
        </li>

        <li>
          <strong>09:30 - 10:10:</strong>  
          <span className="text-blue-600 font-semibold">Keynote Speaker 02:</span> Prof. Le Thi Hoai An (University of Lorraine, France)  
          <em>"The Power of DCA in Optimizing Intelligent Communication Systems"</em>
        </li>

        <li className="text-gray-500"><strong>10:10 - 10:25:</strong> ☕ Coffee Break</li>

        <li><strong>10:25 - 12:05:</strong> Parallel Sessions (A1, A2, A3) - Oral Presentations</li>

        <li className="text-gray-500"><strong>12:05 - 14:00:</strong> 🍽️ Lunch Break</li>

        <li>
          <strong>14:00 - 14:40:</strong>  
          <span className="text-blue-600 font-semibold">Keynote Speaker 03:</span> Prof. Asadullah Shah (IIUM Malaysia)  
          <em>"Online: Partially Occluded Face Detection And Recognition in Low-Light Images Using Deep Learning for Surveillance and Security"</em>
        </li>

        <li><strong>14:50 - 16:10:</strong> Parallel Sessions (B1, B2, B3, B4) - Oral Presentations</li>

        <li className="text-gray-500"><strong>16:10 - 16:25:</strong> ☕ Coffee Break</li>

        <li><strong>16:25 - 18:05:</strong> Parallel Sessions (C1, C2, C3, C4) - Oral Presentations</li>

        <li className="text-gray-500"><strong>18:30 - 20:00:</strong> 🎉 Gala Dinner</li>
      </ul>

      {/* Day 2 - March 23, 2026 */}
      <div className="border-b pb-4">
        <h3 className="text-2xl font-bold mt-6">Day 2 (March 23, 2026)</h3>
        <p className="text-lg"><strong>Time:</strong> 08:30 - 12:00</p>
        <p className="text-lg"><strong>Venue:</strong> Meeting Room, 4th floor, A1 Building</p>
      </div>

      <ul className="space-y-4">
        <li><strong>08:00 - 08:30:</strong> Registration</li>

        <li><strong>08:30 - 10:10:</strong> Parallel Sessions (D1, D2, D3, D4) - Oral Presentations</li>

        <li className="text-gray-500"><strong>10:10 - 10:20:</strong> ☕ Coffee Break</li>

        <li><strong>10:20 - 12:00:</strong> Parallel Sessions (E1, E2, E3, E4) - Oral Presentations</li>
      </ul>

      {/* Parallel Session Details */}
      <div className="border-b pb-4">
        <h3 className="text-2xl font-bold mt-6">Parallel Session Topics</h3>
      </div>

      <ul className="space-y-2">
        <li><strong>A1, B1, C1, D1:</strong> Image, Video, and Signal Processing</li>
        <li><strong>A2:</strong> Advancements in AI</li>
        <li><strong>A3, B3:</strong> Control and Automation</li>
        <li><strong>B2:</strong> Advances in Intelligent Control</li>
        <li><strong>B4:</strong> Intelligent & Secure Systems</li>
        <li><strong>C2, D2, E2:</strong> Computational Intelligence</li>
        <li><strong>C3:</strong> Electronics, Embedded Systems, and IoT</li>
        <li><strong>C4, D4:</strong> Network and Communication</li>
        <li><strong>D3:</strong> Applications of Optimization</li>
        <li><strong>E1:</strong> Advances in AI and Sensing for Smart Interaction and Monitoring</li>
        <li><strong>E3:</strong> Robotics</li>
        <li><strong>E4:</strong> Biomedical Signal Processing</li>
      </ul>
    </CardContent>
  </Card>
</TabsContent>



      </Tabs>
    </div>
  )
}

