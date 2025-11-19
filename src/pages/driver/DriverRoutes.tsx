import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, Package } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

interface DriverRoutesProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function DriverRoutes({ onNavigate, currentPage }: DriverRoutesProps) {
  const routes = [
    {
      id: 'Rota 1',
      stops: 3,
      distance: '9.8 km',
      time: '58 min',
      priority: 'high',
      earnings: 'R$ 45,00',
      deliveries: [
        { customer: 'Maria Silva', address: 'Rua das Flores, 123', type: 'Coleta' },
        { customer: 'João Santos', address: 'Av. Paulista, 1000', type: 'Entrega' },
        { customer: 'Ana Costa', address: 'Rua Augusta, 500', type: 'Coleta' },
      ],
    },
    {
      id: 'Rota 2',
      stops: 2,
      distance: '5.2 km',
      time: '32 min',
      priority: 'normal',
      earnings: 'R$ 30,00',
      deliveries: [
        { customer: 'Pedro Oliveira', address: 'Rua Consolação, 200', type: 'Entrega' },
        { customer: 'Carla Mendes', address: 'Av. Rebouças, 800', type: 'Coleta' },
      ],
    },
  ];

  return (
    <DashboardLayout
      userType="driver"
      userName="Roberto Silva"
      onNavigate={onNavigate}
      currentPage={currentPage}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-gray-900 mb-2">Rotas Otimizadas</h1>
            <p className="text-gray-600">Gerencie suas rotas e entregas do dia</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-700">
            <Navigation className="w-4 h-4 mr-2" />
            Iniciar Navegação
          </Button>
        </div>

        {/* Map */}
        <Card className="p-6">
          <h3 className="text-gray-900 mb-4">Mapa de Rotas</h3>
          <div className="relative rounded-xl overflow-hidden bg-gray-100 h-96">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1730317195705-8a265a59ed1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwJTIwZGVsaXZlcnl8ZW58MXx8fHwxNzYyNjQ5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Map"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
              <div className="text-sm text-gray-600">Total de Rotas</div>
              <div className="text-gray-900">{routes.length} rotas ativas</div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-4 shadow-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-sm text-gray-600">Paradas</div>
                  <div className="text-gray-900">
                    {routes.reduce((acc, route) => acc + route.stops, 0)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Distância</div>
                  <div className="text-gray-900">15 km</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Tempo Total</div>
                  <div className="text-gray-900">1h 30min</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Routes List */}
        <div className="space-y-4">
          {routes.map((route, index) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-gray-900">{route.id}</h3>
                    {route.priority === 'high' && (
                      <Badge className="bg-red-100 text-red-800">Urgente</Badge>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Ganho estimado</div>
                    <div className="text-green-600">{route.earnings}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-gray-600" />
                    <div>
                      <div className="text-sm text-gray-600">Paradas</div>
                      <div className="text-gray-900">{route.stops}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-600" />
                    <div>
                      <div className="text-sm text-gray-600">Distância</div>
                      <div className="text-gray-900">{route.distance}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <div>
                      <div className="text-sm text-gray-600">Tempo</div>
                      <div className="text-gray-900">{route.time}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="text-sm text-gray-600 mb-2">Paradas:</div>
                  {route.deliveries.map((delivery, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="text-gray-900">{delivery.customer}</div>
                        <div className="text-sm text-gray-600">{delivery.address}</div>
                      </div>
                      <Badge className={
                        delivery.type === 'Coleta' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }>
                        {delivery.type}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" variant="outline">
                    Ver Detalhes
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700">
                    <Navigation className="w-4 h-4 mr-2" />
                    Iniciar Rota
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
