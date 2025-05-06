import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Call for Papers - ICISN 2025",
  description: "Call for papers for the Fifth International Conference on Intelligent Systems and Networks",
}

export default function CallForPapersPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:px-6 mt-20">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Call for Papers</h1>

      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-8">
          In this conference, we solicit high-quality unpublished contributions. The aim of this conference is to share new findings, exchange ideas, and discuss research challenges. The conference program will run for two days with regular tracks, tutorials, and special sessions. For the tracks and special sessions, we invite you to contribute your original work on topics in the following, but not limited to, areas:
        </p>

        <h2 className="text-2xl font-bold mb-4">Topics of Interest</h2>
        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Foundations of Computer Science</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Theory of Computation</li>
                <li>Algorithms and Data Structures</li>
                <li>Programming Language Theory</li>
                <li>Applied Computer Science</li>
                <li>Computer Security and Cryptography</li>
                <li>Computational Science</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Computational Intelligence & Language Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Soft Computing</li>
                <li>Computer Vision</li>
                <li>Bioinformatics</li>
                <li>Knowledge Discovery</li>
                <li>Data Mining</li>
                <li>Machine Learning & Deep Learning</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Signal Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Signal, Image, and Video Processing</li>
                <li>Signal Processing for Communications</li>
                <li>Signal Processing for Big Data</li>
                <li>Signal Processing for IoT</li>
                <li>Bio-Imaging and Biomedical Signal Processing</li>
                <li>Telemedical and E-Hospital Biomechanics</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Software Engineering & Development</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Software System Modeling</li>
                <li>Component-Based, Model-Driven, and Automated Software Engineering</li>
                <li>Open Source Software Development</li>
                <li>Software Process</li>
                <li>Testing and Verification</li>
                <li>Multi-Core Programming</li>
                <li>Real-Time Systems</li>
                <li>Web Services</li>
                <li>Human-Computer Interaction</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Distributed Computing and Communication Networks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Big Data and Analysis</li>
                <li>Multimedia and Social Computing</li>
                <li>Network Architectures</li>
                <li>Network Protocols and Security</li>
                <li>Parallel and Distributed Computing</li>
                <li>Grid Computing</li>
                <li>Fog, Edge, and Cloud Computing</li>
                <li>Mobile and Ubiquitous Computing</li>
                <li>Quantum Communications Network</li>
                <li>Security Information & Coding Theory</li>
                <li>Communication Quality, Reliability & Modelling</li>
                <li>Wireless and Mobile Networks</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Microwave Engineering, Antennas, and Propagation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Microwave Theory & Techniques</li>
                <li>RF, Microwave Circuits, Systems & Applications</li>
                <li>Millimeter-Wave, THz Technologies, and Systems</li>
                <li>Power Amplifier Devices and Circuits</li>
                <li>Antenna Systems</li>
                <li>Integrated Antennas, Active Adaptive, and Smart Antennas</li>
                <li>Digital Beamforming, Related Circuits, and Components</li>
                <li>Electromagnetic Scattering, Channel Measurement, and Propagation</li>
                <li>Computational Methods for Wave Propagation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
