import { TrendingUp, Search, Share2 } from "lucide-react";
import { Card } from "./ui/card";

export function Services() {
  const services = [
    {
      icon: <TrendingUp size={40} className="text-blue-600" />,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies tailored to your business goals. We create data-driven campaigns that convert.",
    },
    {
      icon: <Search size={40} className="text-blue-600" />,
      title: "SEO Optimization",
      description:
        "Boost your visibility on search engines with our proven SEO techniques. Get found by the right audience at the right time.",
    },
    {
      icon: <Share2 size={40} className="text-blue-600" />,
      title: "Social Media Marketing",
      description:
        "Build meaningful connections with your audience across all social platforms. Engage, grow, and convert your followers.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a complete suite of digital marketing solutions to help your business grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
