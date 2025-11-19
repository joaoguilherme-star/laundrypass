import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { Card } from '../ui/card';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  color?: string;
}

export function StatsCard({ title, value, icon: Icon, trend, color = 'blue' }: StatsCardProps) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    indigo: 'from-indigo-500 to-indigo-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-gray-600 mb-1">{title}</p>
            <h3 className="text-gray-900 mb-2">{value}</h3>
            {trend && (
              <div className={`flex items-center gap-1 text-sm ${
                trend.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                <span>{trend.isPositive ? '↑' : '↓'}</span>
                <span>{trend.value}</span>
              </div>
            )}
          </div>
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue} flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
