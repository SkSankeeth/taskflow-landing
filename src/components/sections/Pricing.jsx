import { Check } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { pricingPlans } from '../../data/pricing';
import { cn } from '../../utils/cn';

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={cn(
                'relative flex flex-col',
                plan.highlighted && 'ring-2 ring-primary-500 shadow-2xl scale-105'
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  {typeof plan.price === 'number' ? (
                    <>
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        ${plan.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 ml-1">
                        {plan.period}
                      </span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? 'primary' : 'outline'}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-gray-600 dark:text-gray-400 mt-12">
          All plans include unlimited storage, 24/7 support, and regular updates.{' '}
          <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
            Compare all features →
          </a>
        </p>
      </div>
    </section>
  );
}
