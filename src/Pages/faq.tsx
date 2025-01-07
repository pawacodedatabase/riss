import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReviewComponent from './components/review';

const faqs = [
  {
    question: "What makes Riss Luxury unique?",
    answer:
      "Riss Luxury combines premium craftsmanship, cutting-edge designs, and sustainable practices to create luxurious products that stand the test of time.",
  },
  {
    question: "How do you ensure the quality of your products?",
    answer:
      "Our products are meticulously crafted using the finest materials, with every piece undergoing a rigorous quality check process to ensure unmatched durability and elegance.",
  },
  {
    question: "Is Riss Luxury committed to sustainability?",
    answer:
      "Absolutely! We prioritize sustainability by using eco-friendly materials and ethical practices throughout our production process.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for unworn and undamaged items with original packaging. Customer satisfaction is our priority.",
  },
  {
    question: "Why should I trust Riss Luxury?",
    answer:
      "With thousands of satisfied customers and years of industry expertise, Riss Luxury has built a reputation for delivering timeless, reliable, and exceptional luxury products.",
  },
];

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 font-riss">Why Trust Riss Luxury?</h1>
        <p className="mt-4 text-gray-600">
          Discover how Riss Luxury guarantees exceptional quality, timeless style, and unmatched value.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 mb-4 bg-white rounded-lg shadow-lg"
          >
            {/* Question */}
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center p-5 cursor-pointer transition duration-300 hover:bg-gray-50"
            >
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              <motion.div
                className="text-gray-500"
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
              >
                ▼
              </motion.div>
            </div>

            {/* Answer */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="px-5 pb-5 text-gray-600"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
    <ReviewComponent/>
    </>
  );
};

export default FAQAccordion;
