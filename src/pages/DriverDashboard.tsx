import { DashboardLayout } from "../components/layout/DashboardLayout";
import { StatsCard } from "../components/shared/StatsCard";
import { StatusBadge } from "../components/shared/StatusBadge";
import {
  Truck,
  Package,
  MapPin,
  DollarSign,
  Navigation,
  Camera,
  CheckCircle,
} from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface DriverDashboardProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function DriverDashboard({
  onNavigate,
  currentPage,
}: DriverDashboardProps) {
  const activeDeliveries = [
    {
      id: "#LP-2024-001",
      type: "Coleta",
      customer: "Maria Silva",
      address: "Rua das Flores, 123 - Centro",
      distance: "2.5 km",
      time: "15 min",
      priority: "high",
      phone: "(11) 98765-4321",
    },
    {
      id: "#LP-2024-002",
      type: "Entrega",
      customer: "João Santos",
      address: "Av. Paulista, 1000 - Bela Vista",
      distance: "4.1 km",
      time: "25 min",
      priority: "normal",
      phone: "(11) 97654-3210",
    },
    {
      id: "#LP-2024-003",
      type: "Coleta",
      customer: "Ana Costa",
      address: "Rua Augusta, 500 - Consolação",
      distance: "3.2 km",
      time: "18 min",
      priority: "normal",
      phone: "(11) 96543-2109",
    },
  ];

  return (
    <DashboardLayout
      userType="driver"
      userName="Roberto Silva"
      onNavigate={onNavigate}
      currentPage={currentPage}
    >
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-gray-900 mb-2">Olá, Andre! 🚚</h1>
          <p className="text-gray-600">
            Você tem 3 entregas pendentes hoje
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Entregas Hoje"
            value="8"
            icon={Package}
            color="blue"
            trend={{ value: "+2", isPositive: true }}
          />
          <StatsCard
            title="Concluídas"
            value="5"
            icon={CheckCircle}
            color="green"
          />
          <StatsCard
            title="Distância Total"
            value="42 km"
            icon={Navigation}
            color="purple"
          />
          <StatsCard
            title="Ganhos Hoje"
            value="R$ 180"
            icon={DollarSign}
            color="orange"
            trend={{ value: "+15%", isPositive: true }}
          />
        </div>

        {/* Map and Routes */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Preview */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-gray-900">
                  Rotas Otimizadas
                </h2>
                <Button size="sm" variant="outline">
                  <Navigation className="w-4 h-4 mr-2" />
                  Navegar
                </Button>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-gray-100 h-80">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1730317195705-8a265a59ed1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwJTIwZGVsaXZlcnl8ZW58MXx8fHwxNzYyNjQ5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Map Markers */}
                <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="text-sm text-gray-600">
                    Próxima Parada
                  </div>
                  <div className="text-gray-900">
                    2.5 km - 15 min
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg"
                    >
                      {i}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <div className="flex-1">
                  <div className="text-sm text-blue-600">
                    Rota Otimizada
                  </div>
                  <div className="text-gray-900">
                    3 paradas • 9.8 km • ~58 min
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-gray-900 mb-4">
                Ações Rápidas
              </h3>
              <div className="space-y-3">
                <Button
                  className="w-full justify-start gap-3"
                  variant="outline"
                >
                  <Camera className="w-5 h-5" />
                  Registrar Coleta
                </Button>
                <Button
                  className="w-full justify-start gap-3"
                  variant="outline"
                >
                  <CheckCircle className="w-5 h-5" />
                  Confirmar Entrega
                </Button>
                <Button
                  className="w-full justify-start gap-3"
                  variant="outline"
                >
                  <Navigation className="w-5 h-5" />
                  Iniciar Navegação
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white">
              <h3 className="mb-2">Meta Diária</h3>
              <div className="mb-2">12/15 entregas</div>
              <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                <div
                  className="bg-white rounded-full h-2"
                  style={{ width: "80%" }}
                />
              </div>
              <p className="text-green-100 text-sm">
                Faltam apenas 3 para bater a meta! 🎯
              </p>
            </Card>
          </div>
        </div>

        {/* Active Deliveries */}
        <div>
          <h2 className="text-gray-900 mb-4">
            Entregas Pendentes
          </h2>
          <div className="space-y-4">
            {activeDeliveries.map((delivery, index) => (
              <motion.div
                key={delivery.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge
                          className={
                            delivery.type === "Coleta"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                          }
                        >
                          {delivery.type === "Coleta"
                            ? "📦"
                            : "🚚"}{" "}
                          {delivery.type}
                        </Badge>
                        {delivery.priority === "high" && (
                          <Badge className="bg-red-100 text-red-800">
                            Urgente
                          </Badge>
                        )}
                        <span className="text-sm text-gray-500">
                          {delivery.id}
                        </span>
                      </div>

                      <h3 className="text-gray-900 mb-2">
                        {delivery.customer}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">
                          {delivery.address}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>📍 {delivery.distance}</span>
                        <span>⏱️ {delivery.time}</span>
                        <span>📞 {delivery.phone}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Navigation className="w-4 h-4 mr-2" />
                        Navegar
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-indigo-700"
                      >
                        Aceitar
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}