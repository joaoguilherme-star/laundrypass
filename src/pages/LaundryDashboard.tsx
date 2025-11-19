import { DashboardLayout } from '../components/layout/DashboardLayout';
import { StatsCard } from '../components/shared/StatsCard';
import { StatusBadge } from '../components/shared/StatusBadge';
import { Package, Clock, CheckCircle, Users, Camera, QrCode } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { motion } from 'motion/react';

interface LaundryDashboardProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function LaundryDashboard({ onNavigate, currentPage }: LaundryDashboardProps) {
  const pendingOrders = [
    {
      id: '#LP-2024-001',
      customer: 'Maria Silva',
      items: '8 peças',
      status: 'collected',
      checkedIn: false,
      collectedAt: '8 Nov, 18:45',
      priority: 'normal',
    },
    {
      id: '#LP-2024-002',
      customer: 'João Santos',
      items: '5 peças',
      status: 'collected',
      checkedIn: false,
      collectedAt: '8 Nov, 19:30',
      priority: 'high',
    },
  ];

  const washingOrders = [
    {
      id: '#LP-2024-003',
      customer: 'Ana Costa',
      items: '12 peças',
      status: 'washing',
      progress: 65,
      estimatedCompletion: '10 Nov, 14:00',
    },
    {
      id: '#LP-2024-004',
      customer: 'Pedro Oliveira',
      items: '7 peças',
      status: 'washing',
      progress: 40,
      estimatedCompletion: '10 Nov, 16:00',
    },
  ];

  const readyOrders = [
    {
      id: '#LP-2024-005',
      customer: 'Carla Mendes',
      items: '9 peças',
      status: 'ready',
      completedAt: '9 Nov, 16:30',
      waitingPickup: true,
    },
  ];

  return (
    <DashboardLayout
      userType="laundry"
      userName="Clean Express"
      onNavigate={onNavigate}
      currentPage={currentPage}
    >
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-gray-900 mb-2">Painel de Produção 🧺</h1>
          <p className="text-gray-600">Gerencie o fluxo de lavagem e controle de qualidade</p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Aguardando Check-in"
            value="2"
            icon={Package}
            color="orange"
          />
          <StatsCard
            title="Em Lavagem"
            value="2"
            icon={Clock}
            color="blue"
          />
          <StatsCard
            title="Prontos"
            value="1"
            icon={CheckCircle}
            color="green"
          />
          <StatsCard
            title="Hoje"
            value="18"
            icon={Users}
            color="purple"
            trend={{ value: '+8%', isPositive: true }}
          />
        </div>

        {/* Main Content */}
        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pending">Pendente Check-in</TabsTrigger>
            <TabsTrigger value="washing">Em Lavagem</TabsTrigger>
            <TabsTrigger value="ready">Prontos</TabsTrigger>
          </TabsList>

          {/* Pending Check-in */}
          <TabsContent value="pending" className="mt-6">
            <div className="space-y-4">
              {pendingOrders.map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-gray-900">{order.id}</h3>
                          <StatusBadge status={order.status} />
                          {order.priority === 'high' && (
                            <Badge className="bg-red-100 text-red-800">Urgente</Badge>
                          )}
                        </div>

                        <div className="space-y-2 text-sm text-gray-600">
                          <div>Cliente: <span className="text-gray-900">{order.customer}</span></div>
                          <div>Itens: <span className="text-gray-900">{order.items}</span></div>
                          <div>Coletado em: <span className="text-gray-900">{order.collectedAt}</span></div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <QrCode className="w-4 h-4 mr-2" />
                          Escanear
                        </Button>
                        <Button size="sm" variant="outline">
                          <Camera className="w-4 h-4 mr-2" />
                          Foto
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-700">
                          Check-in
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Washing */}
          <TabsContent value="washing" className="mt-6">
            <div className="space-y-4">
              {washingOrders.map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-gray-900">{order.id}</h3>
                      <StatusBadge status={order.status} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Cliente</div>
                        <div className="text-gray-900">{order.customer}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Itens</div>
                        <div className="text-gray-900">{order.items}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Progresso</span>
                        <span className="text-gray-900">{order.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${order.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full h-2"
                        />
                      </div>
                      <div className="text-sm text-gray-600">
                        Previsão: {order.estimatedCompletion}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline" className="flex-1">
                        Atualizar Status
                      </Button>
                      <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Finalizar
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Ready */}
          <TabsContent value="ready" className="mt-6">
            <div className="space-y-4">
              {readyOrders.map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 border-green-200 bg-green-50">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-gray-900">{order.id}</h3>
                          <StatusBadge status={order.status} />
                          {order.waitingPickup && (
                            <Badge className="bg-yellow-100 text-yellow-800">
                              Aguardando Coleta
                            </Badge>
                          )}
                        </div>

                        <div className="space-y-2 text-sm text-gray-600">
                          <div>Cliente: <span className="text-gray-900">{order.customer}</span></div>
                          <div>Itens: <span className="text-gray-900">{order.items}</span></div>
                          <div>Finalizado em: <span className="text-gray-900">{order.completedAt}</span></div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Camera className="w-4 h-4 mr-2" />
                          Foto Final
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-green-600 to-green-700">
                          Solicitar Entrega
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Team Performance */}
        <Card className="p-6">
          <h3 className="text-gray-900 mb-4">Desempenho da Equipe Hoje</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Ana Souza', processed: 15, status: 'Ativo' },
              { name: 'Carlos Lima', processed: 12, status: 'Ativo' },
              { name: 'Juliana Costa', processed: 18, status: 'Pausa' },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-gray-900">{member.name}</div>
                  <Badge className={
                    member.status === 'Ativo' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }>
                    {member.status}
                  </Badge>
                </div>
                <div className="text-sm text-gray-600">
                  {member.processed} pedidos processados
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
