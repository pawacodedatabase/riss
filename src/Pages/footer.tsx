import React, { useState } from "react";
import { FaInstagram, FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") return;
    setSuccess(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#000] text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-l-4 border-red-600 pl-2">
              About Us
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              At Riss, we deliver elegance and quality. Discover exquisite
              clothing, accessories, and personalized styling services designed
              to enhance your style and confidence.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-l-4 border-red-600 pl-2">
              Newsletter
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter and stay updated on new arrivals,
              sales, and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-full bg-gray-800 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="absolute top-1/2 transform -translate-y-1/2 right-3 px-6 py-2 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition"
              >
                Subscribe
              </button>
            </form>
            {success && (
              <p className="text-green-200 mt-2 text-sm">
                Thanks for subscribing!
              </p>
            )}
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-l-4 border-red-600 pl-2">
              Follow Us
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Connect with us on social media:
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:riss"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-red-600 p-3 rounded-full text-white text-lg transition"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://instagram.com/shopwith"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-red-600 p-3 rounded-full text-white text-lg transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/+2349132214390 
"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-red-600 p-3 rounded-full text-white text-lg transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="tel:+2349132214390"
                className="bg-gray-700 hover:bg-red-600 p-3 rounded-full text-white text-lg transition"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Riss. All rights reserved.
          </p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <a
                href="/privacy-policy"
                className="text-gray-300 hover:text-red-500 text-sm transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="text-gray-300 hover:text-red-500 text-sm transition"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-300 hover:text-red-500 text-sm transition"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* //advert */}
        <div className="text-sm text-center mt-8 ">
          <p className="text-gray-400">
            website created by |{" "}
            <a
              href="https://instagram.com/pawacode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500"
            >
              @pawacode
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
