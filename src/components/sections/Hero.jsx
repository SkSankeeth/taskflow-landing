import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full">
              <span className="text-primary-700 dark:text-primary-300 text-sm font-semibold">
                🚀 Trusted by 10,000+ teams worldwide
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Deliver Projects
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> 2x Faster</span>
              <br />With Seamless Collaboration
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-xl">
              The only project management platform that brings your team together with real-time sync, 
              smart automation, and analytics that actually help you ship on time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                className="group"
                onClick={() => window.location.href = '#pricing'}
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">10K+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Active Teams</p>
              </div>
              <div className="h-12 w-px bg-gray-300 dark:bg-gray-700" />
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">99.9%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Uptime SLA</p>
              </div>
              <div className="h-12 w-px bg-gray-300 dark:bg-gray-700" />
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">4.9/5</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">User Rating</p>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <div className="rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-primary-500 to-secondary-500 p-1">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-5">
                  <img
                    src="/taskflow-dashboard.svg"
                    alt="TaskFlow dashboard preview showing tasks, analytics, and team collaboration widgets"
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-300 dark:bg-primary-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse" />
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-secondary-300 dark:bg-secondary-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
