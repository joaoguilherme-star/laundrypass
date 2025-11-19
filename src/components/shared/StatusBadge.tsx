import { Badge } from '../ui/badge';

interface StatusBadgeProps {
  status: 'requested' | 'collected' | 'washing' | 'ready' | 'delivering' | 'delivered' | 'cancelled';
  showLabel?: boolean;
}

export function StatusBadge({ status, showLabel = true }: StatusBadgeProps) {
  const statusConfig = {
    requested: { 
      label: 'Solicitado', 
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      icon: '📝'
    },
    collected: { 
      label: 'Coletado', 
      color: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: '📦'
    },
    washing: { 
      label: 'Em Lavagem', 
      color: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      icon: '🧼'
    },
    ready: { 
      label: 'Pronto', 
      color: 'bg-green-100 text-green-800 border-green-200',
      icon: '✅'
    },
    delivering: { 
      label: 'Em Entrega', 
      color: 'bg-purple-100 text-purple-800 border-purple-200',
      icon: '🚚'
    },
    delivered: { 
      label: 'Entregue', 
      color: 'bg-green-100 text-green-800 border-green-200',
      icon: '✨'
    },
    cancelled: { 
      label: 'Cancelado', 
      color: 'bg-red-100 text-red-800 border-red-200',
      icon: '❌'
    },
  };

  const config = statusConfig[status];

  return (
    <Badge className={`${config.color} border`} variant="outline">
      <span className="mr-1">{config.icon}</span>
      {showLabel && config.label}
    </Badge>
  );
}
