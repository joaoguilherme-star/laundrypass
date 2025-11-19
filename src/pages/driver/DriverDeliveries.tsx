import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { StatusBadge } from '../../components/shared/StatusBadge';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { motion } from 'motion/react';
import { Camera, CheckCircle, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface DriverDeliveriesProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function DriverDeliveries({ onNavigate, currentPage }: DriverDeliveriesProps) {
  const pendingDeliveries = [
    {
      id: '#LP-2024-001',
      type: 'Coleta',
      customer: 'Maria Silva',
      address: 'Rua das Flores, 123 - Centro',
      phone: '(11) 98765-4321',
      scheduledTime: '14:00',
      priority: 'high',
    },
    {
      id: '#LP-2024-002',
      type: 'Entrega',
      customer: 'João Santos',
      address: 'Av. Paulista, 1000 - Bela Vista',
      phone: '(11) 97654-3210',
      scheduledTime: '16:30',
      priority: 'normal',
    },
  ];

  const completedDeliveries = [
    {
      id: '#LP-2024-003',
      type: 'Entrega',
      customer: 'Ana Costa',
      completedAt: '12:45',
      earnings: 'R$ 15,00',
    },
    {
      id: '#LP-2024-004',
      type: 'Coleta',
      customer: 'Pedro Oliveira',
      completedAt: '11:30',
      earnings: 'R$ 15,00',
    },
  ];

  const handleConfirmDelivery = () => {
    toast.success('Entrega confirmada com sucesso!');
  };

  return (
    <DashboardLayout
      userType="driver"
      userName="Roberto Silva"
      onNavigate={onNavigate}
      currentPage={currentPage}
    >
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-gray-900 mb-2">Entregas</h1>
          <p className="text-gray-600">Gerencie suas coletas e entregas</p>
        </div>

        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pending">
              Pendentes ({pendingDeliveries.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Concluídas ({completedDeliveries.length})
            </TabsTrigger>
          </TabsList>

          {/* Pending */}
          <TabsContent value="pending" className="mt-6">
            <div className="space-y-4">
              {pendingDeliveries.map((delivery, index) => (
                <motion.div
                  key={delivery.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        delivery.type === 'Coleta' ? 'bg-blue-100' : 'bg-green-100'
                      }`}>
                        {delivery.type === 'Coleta' ? '📦' : '🚚'}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-gray-900">{delivery.id}</h3>
                          <Badge className={
                            delivery.type === 'Coleta' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-green-100 text-green-800'
                          }>
                            {delivery.type}
                          </Badge>
                          {delivery.priority === 'high' && (
                            <Badge className="bg-red-100 text-red-800">Urgente</Badge>
                          )}
                        </div>
                        <div className="text-gray-900 mb-3">{delivery.customer}</div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {delivery.address}
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              {delivery.phone}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              Agendado: {delivery.scheduledTime}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => toast.info('Abrindo câmera...')}
                      >
                        <Camera className="w-4 h-4 mr-2" />
                        Tirar Foto
                      </Button>
                      <Button 
                        className="flex-1 bg-gradient-to-r from-green-600 to-green-700"
                        onClick={handleConfirmDelivery}
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Confirmar {delivery.type}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Completed */}
          <TabsContent value="completed" className="mt-6">
            <div className="space-y-4">
              {completedDeliveries.map((delivery, index) => (
                <motion.div
                  key={delivery.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-green-50 border-green-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-gray-900">{delivery.id}</span>
                            <Badge className={
                              delivery.type === 'Coleta' 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'bg-green-100 text-green-800'
                            }>
                              {delivery.type}
                            </Badge>
                          </div>
                          <div className="text-gray-600">{delivery.customer}</div>
                          <div className="text-sm text-gray-500">
                            Concluído às {delivery.completedAt}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600 mb-1">Ganho</div>
                        <div className="text-green-600">{delivery.earnings}</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Today's Summary */}
        <Card className="p-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <h3 className="mb-4">Resumo do Dia</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-blue-100 mb-1">Total</div>
              <div className="text-2xl">{pendingDeliveries.length + completedDeliveries.length}</div>
            </div>
            <div>
              <div className="text-blue-100 mb-1">Concluídas</div>
              <div className="text-2xl">{completedDeliveries.length}</div>
            </div>
            <div>
              <div className="text-blue-100 mb-1">Ganhos</div>
              <div className="text-2xl">R$ 180</div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
