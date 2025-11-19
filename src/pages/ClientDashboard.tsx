import { DashboardLayout } from '../components/layout/DashboardLayout';
import { StatsCard } from '../components/shared/StatsCard';
import { StatusBadge } from '../components/shared/StatusBadge';
import { OrderTimeline } from '../components/shared/OrderTimeline';
import { Package, Clock, CheckCircle, TrendingUp, Plus } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { motion } from 'motion/react';

interface ClientDashboardProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function ClientDashboard({ onNavigate, currentPage }: ClientDashboardProps) {
  const orders = [
    {
      id: '#LP-2024-001',
      status: 'washing' as const,
      items: '8 peças',
      price: 'R$ 36,00',
      estimatedDelivery: '10 Nov, 18h',
      progress: 60,
    },
    {
      id: '#LP-2024-002',
      status: 'collected' as const,
      items: '5 peças',
      price: 'R$ 22,50',
      estimatedDelivery: '11 Nov, 20h',
      progress: 30,
    },
  ];

  const timelineSteps = [
    { label: 'Pedido solicitado', status: 'completed' as const, date: '8 Nov, 14:30' },
    { label: 'Roupa coletada', status: 'completed' as const, date: '8 Nov, 18:45' },
    { label: 'Em processo de lavagem', status: 'current' as const, date: '9 Nov, 09:00' },
    { label: 'Pronto para entrega', status: 'pending' as const },
    { label: 'Entregue', status: 'pending' as const },
  ];

  return (
    <DashboardLayout
      userType="client"
      userName="Carlos Mendes"
      onNavigate={onNavigate}
      currentPage={currentPage}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-gray-900 mb-2">Bem-vindo de volta, Carlos! 👋</h1>
            <p className="text-gray-600">Acompanhe seus pedidos e solicite novas coletas</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800">
            <Plus className="w-5 h-5 mr-2" />
            Nova Solicitação
          </Button>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Pedidos Ativos"
            value="2"
            icon={Package}
            color="blue"
          />
          <StatsCard
            title="Em Lavagem"
            value="1"
            icon={Clock}
            color="purple"
          />
          <StatsCard
            title="Concluídos este mês"
            value="8"
            icon={CheckCircle}
            color="green"
            trend={{ value: '+20%', isPositive: true }}
          />
          <StatsCard
            title="Total Economizado"
            value="12h"
            icon={TrendingUp}
            color="orange"
          />
        </div>

        {/* Active Orders */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-gray-900 mb-4">Pedidos em Andamento</h2>
              <div className="space-y-4">
                {orders.map((order, index) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="text-gray-900 mb-1">{order.id}</div>
                          <div className="text-sm text-gray-500">{order.items}</div>
                        </div>
                        <StatusBadge status={order.status} />
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Progresso</span>
                          <span className="text-gray-900">{order.progress}%</span>
                        </div>
                        <Progress value={order.progress} className="h-2" />

                        <div className="flex justify-between items-center pt-3 border-t">
                          <div>
                            <div className="text-sm text-gray-600">Previsão de Entrega</div>
                            <div className="text-gray-900">{order.estimatedDelivery}</div>
                          </div>
                          <div className="text-blue-600">{order.price}</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <Card className="p-6">
              <h3 className="text-gray-900 mb-6">Status Detalhado - {orders[0].id}</h3>
              <OrderTimeline steps={timelineSteps} />
            </Card>
          </div>
        </div>

        {/* Recent History */}
        <Card className="p-6">
          <h3 className="text-gray-900 mb-4">Histórico Recente</h3>
          <div className="space-y-3">
            {[
              { id: '#LP-2024-003', date: '3 Nov', status: 'delivered', items: '12 peças', price: 'R$ 54,00' },
              { id: '#LP-2024-004', date: '28 Out', status: 'delivered', items: '6 peças', price: 'R$ 27,00' },
              { id: '#LP-2024-005', date: '22 Out', status: 'delivered', items: '9 peças', price: 'R$ 40,50' },
            ].map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-gray-900">{order.id}</div>
                    <div className="text-sm text-gray-500">{order.date} • {order.items}</div>
                  </div>
                </div>
                <div className="text-gray-900">{order.price}</div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
