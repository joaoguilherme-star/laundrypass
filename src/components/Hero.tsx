import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import desktopBg from 'figma:asset/870a56ccf004619772f00b75111e967c0117e715.png';
import mobileBg from 'figma:asset/7d48405fe4524aebfabb4699b30bd566c7336e30.png';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const benefits = [
    'Coleta e entrega grátis',
    'Agendamento em 2 minutos',
    'Qualidade premium garantida',
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background */}
        <img
          src={desktopBg}
          alt="LaundryPass Delivery"
          className="hidden md:block w-full h-full object-cover"
        />
        {/* Mobile Background */}
        <img
          src={mobileBg}
          alt="LaundryPass Delivery"
          className="block md:hidden w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-indigo-900/90 to-blue-800/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <span className="text-blue-200">✨ Lavanderia Premium com Delivery</span>
            </motion.div>

            <h1 className="text-white mb-6">
              Seu tempo é precioso. Deixe a lavanderia com a gente.
            </h1>

            <p className="text-blue-100 mb-8 max-w-xl">
              Serviço profissional de lavanderia com coleta e entrega na sua porta. 
              Tecnologia, praticidade e cuidado com suas roupas em um só lugar.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 group"
                onClick={() => onNavigate?.('booking')}
              >
                Agendar Coleta
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-[rgb(177,198,255)]"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Como Funciona
              </Button>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Entrega em', value: '24-48h' },
                { label: 'Clientes Ativos', value: '10k+' },
                { label: 'Satisfação', value: '98%' },
                { label: 'Peças/Mês', value: '50k+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
                >
                  <div className="text-white mb-1">{stat.value}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
