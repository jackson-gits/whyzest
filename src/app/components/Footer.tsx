export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">WhyZest</h3>
              <p className="text-gray-400">
                Your partner in digital marketing excellence.
              </p>
            </div>

            <div>
              <h4 className="text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Digital Marketing</li>
                <li>SEO Optimization</li>
                <li>Social Media Marketing</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 WhyZest. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
