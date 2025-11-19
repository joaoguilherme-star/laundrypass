import { motion } from 'motion/react';
import { Shield, Clock, Leaf, Star, CreditCard, HeadphonesIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Garantia de Qualidade',
      description: 'Se não ficar satisfeito, lavamos novamente sem custo adicional',
    },
    {
      icon: Clock,
      title: 'Horários Flexíveis',
      description: 'Coleta e entrega de segunda a sábado, no horário que você preferir',
    },
    {
      icon: Leaf,
      title: 'Produtos Sustentáveis',
      description: 'Usamos produtos biodegradáveis e processos eco-friendly',
    },
    {
      icon: Star,
      title: 'Profissionais Treinados',
      description: 'Equipe especializada com anos de experiência em lavanderia',
    },
    {
      icon: CreditCard,
      title: 'Pagamento Facilitado',
      description: 'Cartão, PIX ou boleto. Parcele em até 3x sem juros',
    },
    {
      icon: HeadphonesIcon,
      title: 'Suporte Dedicado',
      description: 'Atendimento rápido por WhatsApp, chat ou telefone',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXNoaW5nJTIwbWFjaGluZSUyMHByZW1pdW18ZW58MXx8fHwxNzYyNjM2ODE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Premium laundry service"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="text-blue-600 mb-1">+98%</div>
              <div className="text-gray-600">Satisfação</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 mb-4 block">POR QUE NOS ESCOLHER</span>
            <h2 className="text-gray-900 mb-6">
              Tecnologia e Cuidado ao seu Serviço
            </h2>
            <p className="text-gray-600 mb-8">
              Combinamos processos profissionais com tecnologia de ponta para oferecer 
              a melhor experiência em lavanderia. Cada peça é tratada com atenção especial.
            </p>
            <div className="space-y-4">
              {[
                'Máquinas industriais de última geração',
                'Produtos premium e hipoalergênicos',
                'Processo de controle de qualidade em 3 etapas',
                'Rastreamento em tempo real do seu pedido',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
