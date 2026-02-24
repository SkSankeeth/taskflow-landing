import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/faqs';
import { cn } from '../../utils/cn';

export function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Can't find what you're looking for?{' '}
            <a href="#contact" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
              Contact our support team
            </a>
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-gray-500 flex-shrink-0 transition-transform',
                    openId === faq.id && 'transform rotate-180'
                  )}
                />
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  openId === faq.id ? 'max-h-96' : 'max-h-0'
                )}
              >
                <p className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
