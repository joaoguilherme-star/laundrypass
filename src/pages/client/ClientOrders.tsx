import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { StatusBadge } from '../../components/shared/StatusBadge';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { motion } from 'motion/react';
import { Search, Filter, Download, Eye } from 'lucide-react';
import { useState } from 'react';

interface ClientOrdersProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function ClientOrders({ onNavigate, currentPage }: ClientOrdersProps) {
  const [filterStatus, setFilterStatus] = useState('all');

  const orders = [
    {
      id: '#LP-2024-001',
      date: '9 Nov 2024',
      status: 'washing' as const,
      items: '8 peças',
      price: 'R$ 36,00',
      estimatedDelivery: '10 Nov, 18h',
    },
    {
      id: '#LP-2024-002',
      date: '8 Nov 2024',
      status: 'collected' as const,
      items: '5 peças',
      price: 'R$ 22,50',
      estimatedDelivery: '11 Nov, 20h',
    },
    {
      id: '#LP-2024-003',
      date: '3 Nov 2024',
      status: 'delivered' as const,
      items: '12 peças',
      price: 'R$ 54,00',
      deliveredAt: '5 Nov, 19:30',
    },
    {
      id: '#LP-2024-004',
      date: '28 Out 2024',
      status: 'delivered' as const,
      items: '6 peças',
      price: 'R$ 27,00',
      deliveredAt: '30 Out, 18:15',
    },
    {
      id: '#LP-2024-005',
      date: '22 Out 2024',
      status: 'delivered' as const,
      items: '9 peças',
      price: 'R$ 40,50',
      deliveredAt: '24 Out, 20:00',
    },
    {
      id: '#LP-2024-006',
      date: '15 Out 2024',
      status: 'delivered' as const,
      items: '7 peças',
      price: 'R$ 31,50',
      deliveredAt: '17 Out, 19:00',
    },
  ];

  const filteredOrders = filterStatus === 'all' 
    ? orders 
    : orders.filter(order => order.status === filterStatus);

  return (
    <DashboardLayout
      userType="client"
      userName="Carlos Mendes"
      onNavigate={onNavigate}
      currentPage={currentPage}
    >
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-gray-900 mb-2">Meus Pedidos</h1>
          <p className="text-gray-600">Visualize e gerencie todos os seus pedidos</p>
        </div>

        {/* Filters */}
        <Card className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Buscar por ID ou data..."
                className="pl-10"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filtrar por status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="requested">Solicitado</SelectItem>
                <SelectItem value="collected">Coletado</SelectItem>
                <SelectItem value="washing">Em Lavagem</SelectItem>
                <SelectItem value="ready">Pronto</SelectItem>
                <SelectItem value="delivering">Em Entrega</SelectItem>
                <SelectItem value="delivered">Entregue</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
          </div>
        </Card>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-gray-900">{order.id}</h3>
                      <StatusBadge status={order.status} />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Data do pedido:</span>
                        <span className="text-gray-900 ml-2">{order.date}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Itens:</span>
                        <span className="text-gray-900 ml-2">{order.items}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Valor:</span>
                        <span className="text-gray-900 ml-2">{order.price}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">
                          {order.status === 'delivered' ? 'Entregue em:' : 'Previsão:'}
                        </span>
                        <span className="text-gray-900 ml-2">
                          {order.status === 'delivered' ? order.deliveredAt : order.estimatedDelivery}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline"
                      onClick={() => onNavigate('client-dashboard')}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-gray-600">Nenhum pedido encontrado com este filtro</p>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
