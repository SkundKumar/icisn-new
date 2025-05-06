import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "History - ICISN 2025",
  description: "History of the International Conference on Intelligent Systems and Networks",
};

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:px-6 mt-20">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        Conference History
      </h1>

      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-8 text-center">
          The International Conference on Intelligent Systems and Networks (ICISN) has a strong tradition of bringing 
          together researchers, academics, and industry professionals to explore advancements in intelligent systems and networks.
        </p>

        <div className="space-y-16">
          {/* ICISN 2025 - Coming Soon */}
          <div className="text-center border p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-bold mb-2 text-black">ICISN 2025</h2>
            <p className="text-lg text-black font-playfair">Coming Soon...</p>
          </div>

          {/* ICISN 2024 */}
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image src="https://media.springernature.com/full/springer-static/cover-hires/book/978-981-97-5504-2?as=webp" alt="ICISN 2024" fill className="object-contain" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">ICISN 2024</h2>
              <p className="mb-2">
                <strong>Proceedings:</strong>{" "}
                <Link href="https://link.springer.com/book/9789819755035" target="_blank" className="text-blue-300 underline">
                  Springer Link
                </Link>
              </p>
            </div>
          </div>

          {/* ICISN 2023 */}
          <div className="grid gap-8 md:grid-cols-2 items-center md:flex-row-reverse">
            <div className="relative h-[300px] overflow-hidden rounded-lg md:order-2">
              <Image src="https://media.springernature.com/full/springer-static/cover-hires/book/978-981-99-4725-6?as=webp" alt="ICISN 2023" fill className="object-contain" />
            </div>
            <div className="md:order-1">
              <h2 className="text-2xl font-bold mb-4">ICISN 2023</h2>
              <p className="mb-2">
                <strong>Proceedings:</strong>{" "}
                <Link href="https://link.springer.com/book/10.1007/978-981-99-4725-6" target="_blank" className="text-blue-300 underline">
                  Springer Link
                </Link>
              </p>
            </div>
          </div>

          {/* ICISN 2022 */}
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image src="https://media.springernature.com/full/springer-static/cover-hires/book/978-981-19-3394-3?as=webp" alt="ICISN 2022" fill className="object-contain" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">ICISN 2022</h2>
              <p className="mb-2">
                <strong>Proceedings:</strong>{" "}
                <Link href="https://link.springer.com/book/10.1007/978-981-19-3394-3" target="_blank" className="text-blue-300 underline">
                  Springer Link
                </Link>
              </p>
            </div>
          </div>

          {/* ICISN 2021 */}
          <div className="grid gap-8 md:grid-cols-2 items-center md:flex-row-reverse">
            <div className="relative h-[300px] overflow-hidden rounded-lg md:order-2">
              <Image src="https://media.springernature.com/full/springer-static/cover-hires/book/978-981-16-2094-2?as=webp" alt="ICISN 2021" fill className="object-contain" />
            </div>
            <div className="md:order-1">
              <h2 className="text-2xl font-bold mb-4">ICISN 2021</h2>
              <p className="mb-2">
                <strong>Proceedings:</strong>{" "}
                <Link href="https://link.springer.com/book/10.1007/978-981-16-2094-2" target="_blank" className="text-blue-300 underline">
                  Springer Link
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
