import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
            Welcome to <span className="text-blue-600">WhyZest</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Elevating Your Digital Presence Through Strategic Marketing
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            We specialize in digital marketing, SEO optimization, and social media marketing to help your business thrive in the digital landscape.
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
