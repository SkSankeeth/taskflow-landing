import { cn } from '../../utils/cn';

export function Card({ children, className, hover = false, ...props }) {
  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6',
        hover && 'transition-transform duration-300 hover:scale-105 hover:shadow-xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
