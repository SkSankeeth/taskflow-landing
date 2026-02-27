import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '../forms/ContactForm';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'support@taskflow.com',
      href: 'mailto:support@taskflow.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 78 00 00 001',
      href: 'tel:+94780000001',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Colombo, Sri Lanka',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4">
                  <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-900 dark:text-white">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-6">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We typically respond within 24 hours during business days.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Business Hours: Monday - Friday, 9am - 6pm PST
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
