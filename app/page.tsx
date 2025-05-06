import HeroSection from "@/components/hero-section"
import WelcomeSection from "@/components/welcome-section"
import UniversitySection from "@/components/university-section"
import GallerySection from "@/components/gallery-section"
import ContactSection from "@/components/contact-section"
import { Inter } from "next/font/google"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <UniversitySection />
      <GallerySection />
      <ContactSection />
    </>
  )
}

