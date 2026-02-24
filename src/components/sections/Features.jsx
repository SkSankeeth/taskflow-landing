import * as Icons from 'lucide-react';
import { Card } from '../ui/Card';
import { features } from '../../data/features';

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Powerful features to help your team collaborate better, work faster, and achieve more.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = Icons[feature.icon];
            return (
              <Card key={feature.id} hover className="group">
                <div className="mb-4 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg w-fit group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
