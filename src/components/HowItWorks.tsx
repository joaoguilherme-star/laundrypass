import { motion } from 'motion/react';
import { Calendar, Package, Truck, Sparkles } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Calendar,
      title: 'Agende Online',
      description: 'Escolha o melhor dia e horário para coleta. Levamos apenas 2 minutos.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Package,
      title: 'Coletamos suas Roupas',
      description: 'Nosso motorista busca suas roupas no horário agendado, sem custo adicional.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Sparkles,
      title: 'Lavamos com Cuidado',
      description: 'Processos profissionais, produtos premium e atenção aos detalhes.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Truck,
      title: 'Entregamos na sua Porta',
      description: 'Suas roupas limpas, passadas e embaladas chegam em 24-48 horas.',
      color: 'from-blue-600 to-indigo-700',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 mb-4 block">PROCESSO SIMPLES</span>
          <h2 className="text-gray-900 mb-4">Como Funciona</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Em apenas 4 passos simples, suas roupas ficam limpas sem você sair de casa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
