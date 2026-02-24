import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card } from '../ui/Card';

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <Card className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Message sent successfully!
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          We'll get back to you as soon as possible.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Name *"
            placeholder="John Doe"
            error={errors.name?.message}
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' },
            })}
          />

          <Input
            label="Email *"
            type="email"
            placeholder="john@example.com"
            error={errors.email?.message}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
        </div>

        <Input
          label="Subject *"
          placeholder="How can we help?"
          error={errors.subject?.message}
          {...register('subject', {
            required: 'Subject is required',
            minLength: { value: 3, message: 'Subject must be at least 3 characters' },
          })}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            rows={6}
            placeholder="Tell us more about your inquiry..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
            {...register('message', {
              required: 'Message is required',
              minLength: { value: 10, message: 'Message must be at least 10 characters' },
            })}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              <Send className="mr-2 w-5 h-5" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}
