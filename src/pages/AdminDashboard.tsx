import { DashboardLayout } from '../components/layout/DashboardLayout';
import { StatsCard } from '../components/shared/StatsCard';
import { Package, Users, Truck, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '../components/ui/card';
import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

interface AdminDashboardProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function AdminDashboard({ onNavigate, currentPage }: AdminDashboardProps) {
  const ordersData = [
    { name: 'Seg', pedidos: 45 },
    { name: 'Ter', pedidos: 52 },
    { name: 'Qua', pedidos: 48 },
    { name: 'Qui', pedidos: 61 },
    { name: 'Sex', pedidos: 58 },
    { name: 'Sáb', pedidos: 72 },
    { name: 'Dom', pedidos: 38 },
  ];

  const revenueData = [
    { name: 'Jan', valor: 12400 },
    { name: 'Fev', valor: 14200 },
    { name: 'Mar', valor: 15800 },
    { name: 'Abr', valor: 16500 },
    { name: 'Mai', valor: 18200 },
    { name: 'Jun', valor: 19800 },
  ];

  const statusData = [
    { name: 'Entregue', value: 342, color: '#10b981' },
    { name: 'Em Lavagem', value: 128, color: '#3b82f6' },
    { name: 'Coletado', value: 87, color: '#6366f1' },
    { name: 'Solicitado', value: 52, color: '#f59e0b' },
  ];

  const recentActivities = [
    { id: 1, type: 'order', message: 'Novo pedido #LP-2024-087', time: '2 min atrás' },
    { id: 2, type: 'driver', message: 'Motorista Roberto aceitou entrega', time: '5 min atrás' },
    { id: 3, type: 'user', message: 'Novo cliente cadastrado: Maria Silva', time: '12 min atrás' },
    { id: 4, type: 'payment', message: 'Pagamento confirmado #LP-2024-085', time: '18 min atrás' },
    { id: 5, type: 'order', message: 'Pedido #LP-2024-084 entregue', time: '25 min atrás' },
  ];

  return (
    <DashboardLayout
      userType="admin"
      userName="Admin System"
      onNavigate={onNavigate}
      currentPage={currentPage}
    >
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-gray-900 mb-2">Dashboard Administrativo 📊</h1>
          <p className="text-gray-600">Visão geral do sistema e indicadores de performance</p>
        </div>

        {/* Main Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total de Pedidos"
            value="1,284"
            icon={Package}
            color="blue"
            trend={{ value: '+12.5%', isPositive: true }}
          />
          <StatsCard
            title="Clientes Ativos"
            value="847"
            icon={Users}
            color="green"
            trend={{ value: '+8.2%', isPositive: true }}
          />
          <StatsCard
            title="Motoristas Online"
            value="24"
            icon={Truck}
            color="purple"
          />
          <StatsCard
            title="Receita Mensal"
            value="R$ 54.8k"
            icon={DollarSign}
            color="orange"
            trend={{ value: '+15.3%', isPositive: true }}
          />
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Orders Chart */}
          <Card className="p-6">
            <h3 className="text-gray-900 mb-6">Pedidos por Dia da Semana</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ordersData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="pedidos" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Revenue Chart */}
          <Card className="p-6">
            <h3 className="text-gray-900 mb-6">Receita Mensal</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                  formatter={(value: number) => `R$ ${value.toLocaleString()}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="valor" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Status Distribution and Activities */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Status Pie Chart */}
          <Card className="p-6">
            <h3 className="text-gray-900 mb-6">Distribuição de Status</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {statusData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-sm text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h3 className="text-gray-900 mb-6">Atividades Recentes</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0"
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'order' ? 'bg-blue-500' :
                      activity.type === 'driver' ? 'bg-purple-500' :
                      activity.type === 'user' ? 'bg-green-500' :
                      'bg-orange-500'
                    }`} />
                    <div className="flex-1">
                      <div className="text-gray-900">{activity.message}</div>
                      <div className="text-sm text-gray-500">{activity.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Performance Indicators */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Taxa de Entrega', value: '98.5%', trend: '+2.1%', isPositive: true },
            { label: 'Tempo Médio', value: '32h', trend: '-4h', isPositive: true },
            { label: 'Satisfação', value: '4.8/5', trend: '+0.3', isPositive: true },
            { label: 'Taxa de Cancelamento', value: '1.2%', trend: '-0.5%', isPositive: true },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                <div className="text-gray-900 mb-2">{metric.value}</div>
                <div className={`flex items-center gap-1 text-sm ${
                  metric.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.isPositive ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>{metric.trend}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
