import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">About WhyZest</h2>
              <p className="text-lg text-gray-600 mb-4">
                At WhyZest, we believe in the power of digital transformation. Our mission is to help businesses of all sizes establish and grow their online presence through innovative marketing strategies.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                With years of experience in the digital marketing industry, our team of experts is dedicated to delivering measurable results that drive real business growth.
              </p>
              <p className="text-lg text-gray-600">
                From SEO to social media, we stay ahead of the curve to ensure your brand stands out in the digital landscape.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcwMjMwMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="SEO Analytics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
