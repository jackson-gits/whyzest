import { Mail, Phone, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Ready to elevate your digital presence? Let's talk
              about your project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mb-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3NzAyNzY5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Social Media Marketing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900"></h3>
                  <p className="text-gray-600"></p>
                  <p className="text-gray-600"></p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900"></h3>
                  <p className="text-gray-600"></p>
                  <p className="text-gray-600"></p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900"></h3>
                  <p className="text-gray-600"></p>
                  <p className="text-gray-600"></p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="mailto:hello@whyzest.com"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send us a message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}