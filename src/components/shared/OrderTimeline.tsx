import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface TimelineStep {
  label: string;
  status: 'completed' | 'current' | 'pending';
  date?: string;
}

interface OrderTimelineProps {
  steps: TimelineStep[];
}

export function OrderTimeline({ steps }: OrderTimelineProps) {
  return (
    <div className="relative">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex gap-4 pb-8 last:pb-0"
        >
          {/* Timeline Line */}
          {index < steps.length - 1 && (
            <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-gray-200" 
              style={{ height: 'calc(100% - 2.5rem)' }}
            />
          )}

          {/* Icon */}
          <div className="relative z-10">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step.status === 'completed' 
                  ? 'bg-green-500' 
                  : step.status === 'current'
                  ? 'bg-blue-500 ring-4 ring-blue-100'
                  : 'bg-gray-200'
              }`}
            >
              {step.status === 'completed' && (
                <Check className="w-4 h-4 text-white" />
              )}
              {step.status === 'current' && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-white rounded-full"
                />
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 pt-1">
            <div className={`mb-1 ${
              step.status === 'pending' ? 'text-gray-400' : 'text-gray-900'
            }`}>
              {step.label}
            </div>
            {step.date && (
              <div className="text-sm text-gray-500">{step.date}</div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
