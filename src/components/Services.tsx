import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function Services() {
  const services = [
    {
      name: 'Lavagem Básica',
      description: 'Ideal para o dia a dia',
      price: 'R$ 4,50',
      unit: 'por kg',
      features: [
        'Lavagem profissional',
        'Secagem completa',
        'Dobra organizada',
        'Entrega em 48h',
      ],
      popular: false,
    },
    {
      name: 'Lavagem Premium',
      description: 'Nosso serviço mais completo',
      price: 'R$ 6,50',
      unit: 'por kg',
      features: [
        'Lavagem com produtos premium',
        'Secagem e passagem',
        'Embalagem individual',
        'Entrega em 24h',
        'Tratamento de manchas',
        'Atendimento prioritário',
      ],
      popular: true,
    },
    {
      name: 'Peças Especiais',
      description: 'Roupas delicadas e especiais',
      price: 'Sob consulta',
      unit: '',
      features: [
        'Ternos e vestidos',
        'Roupas de couro',
        'Edredons e cobertores',
        'Lavagem a seco',
        'Cuidado especializado',
      ],
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 mb-4 block">NOSSOS SERVIÇOS</span>
          <h2 className="text-gray-900 mb-4">Escolha o Melhor Plano</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Serviços flexíveis para atender suas necessidades. Sem mensalidade, pague apenas pelo que usar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card 
                className={`p-8 h-full flex flex-col relative transition-all hover:shadow-xl ${
                  service.popular ? 'border-blue-600 border-2 shadow-lg' : ''
                }`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-700">
                    Mais Popular
                  </Badge>
                )}

                <div className="mb-6">
                  <h3 className="text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-gray-900">{service.price}</span>
                    {service.unit && <span className="text-gray-600">{service.unit}</span>}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    service.popular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800'
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Escolher {service.name}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            🚚 Coleta e entrega grátis em todas as opções • 📦 Pedido mínimo: 3kg
          </p>
        </motion.div>
      </div>
    </section>
  );
}
