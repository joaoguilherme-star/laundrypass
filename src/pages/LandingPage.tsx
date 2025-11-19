import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { motion } from "motion/react";
import {
  Shield,
  Clock,
  MapPin,
  Camera,
  TrendingUp,
  Star,
  ChevronRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar";
import { Footer } from "../components/Footer";

interface LandingPageProps {
  onNavigate: (page: string, userType?: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const differentials = [
    {
      icon: Clock,
      title: "Coleta Noturna",
      description: "Disponível até 22h para sua comodidade",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MapPin,
      title: "Rastreamento em Tempo Real",
      description: "Acompanhe suas roupas em cada etapa",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Camera,
      title: "Segurança por Imagem",
      description:
        "Fotos de coleta e entrega para sua proteção",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Previsão de Demanda",
      description: "IA que otimiza rotas e prazos",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Cliente desde 2023",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      rating: 5,
      comment:
        "Serviço impecável! O rastreamento em tempo real me dá total segurança. Recomendo!",
    },
    {
      name: "João Santos",
      role: "Cliente desde 2022",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao",
      rating: 5,
      comment:
        "A coleta noturna é perfeita para minha rotina. Nunca mais precisei me preocupar com lavanderia.",
    },
    {
      name: "Ana Costa",
      role: "Cliente desde 2024",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
      rating: 5,
      comment:
        "Pontualidade e qualidade excepcionais. O app é super intuitivo e fácil de usar!",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero onNavigate={onNavigate} />
      <HowItWorks />

      {/* Differentials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 mb-4 block">
              NOSSOS DIFERENCIAIS
            </span>
            <h2 className="text-gray-900 mb-4">
              Tecnologia a Serviço da Sua Comodidade
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recursos inovadores que tornam a experiência única
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 mb-4 block">
              DEPOIMENTOS
            </span>
            <h2 className="text-gray-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>
                        {testimonial.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({
                      length: testimonial.rating,
                    }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">
                    {testimonial.comment}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              LaundryPass - A plataforma SaaS completa para
              gestão de lavanderia com delivery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={() =>
                  onNavigate("client-dashboard", "client")
                }
              >
                Acessar Painel Cliente
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-[rgb(110,196,214)]"
                onClick={() =>
                  onNavigate("admin-dashboard", "admin")
                }
              >
                Acessar Painel Admin
              </Button>
            </div>
            <div className="mt-6 flex gap-4 justify-center text-sm text-blue-100">
              <button
                onClick={() =>
                  onNavigate("driver-dashboard", "driver")
                }
                className="hover:text-white transition-colors"
              >
                Painel Motorista
              </button>
              <span>•</span>
              <button
                onClick={() =>
                  onNavigate("laundry-dashboard", "laundry")
                }
                className="hover:text-white transition-colors"
              >
                Painel Lavanderia
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}