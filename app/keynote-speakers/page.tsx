import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Keynote Speakers - ICISN 2025",
  description: "Keynote speakers for the Fifth International Conference on Intelligent Systems and Networks",
};

const speakers = [
  {
    name: "Professor Reza Hoseinnezhad",
    institution: "RMIT University, Australia",
    topic: "Distributed Information Fusion for Multi-Target Tracking",
    image: "https://icisn.com/wp-content/uploads/elementor/thumbs/image-qniba67vel73gx716mgb1qvcbscjd8rnhlimtc4x68.jpg",
  },
  {
    name: "Professor Asadullah Shah",
    institution: "IIUM Malaysia",
    topic:
      "PARTIALLY OCCLUDED FACE DETECTION AND RECOGNITION IN LOW-LIGHT IMAGES USING DEEP LEARNING FOR SURVEILLANCE AND SECURITY",
    image: "https://icisn.com/wp-content/uploads/2024/04/6566-242x300.jpeg",
  },
  {
    name: "Professor Le Thi Hoai An",
    institution: "University of Lorraine and Senior member of Academic Institute of France (IUF)",
    topic: "The Power of DCA in Optimizing Intelligent Communication Systems",
    image: "https://icisn.com/wp-content/uploads/2025/03/my-photo-225x300.jpg",
  },
];

export default function KeynoteSpeakersPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:px-6 mt-20">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        Keynote Speakers
      </h1>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {speakers.map((speaker, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-full mb-6">
              <Image
                src={speaker.image}
                alt={`Keynote Speaker ${speaker.name}`}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-center">{speaker.name}</h2>
            <p className="text-lg text-muted-foreground text-center">{speaker.institution}</p>
            <h3 className="mt-4 text-xl font-semibold text-center">Keynote Topic:</h3>
            <p className="text-center italic">"{speaker.topic}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
