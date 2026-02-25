import { Card } from '../ui/Card';
import { testimonials } from '../../data/testimonials';
import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Loved by teams everywhere
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            See what our customers have to say about their experience with TaskFlow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col">
              <Quote className="w-10 h-10 text-primary-600 dark:text-primary-400 mb-4 opacity-50" />
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                "{testimonial.content}"
              </p>

              <div className="flex items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
