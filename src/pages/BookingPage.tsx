import { Navbar } from '../components/Navbar';
import { BookingForm } from '../components/BookingForm';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';

interface BookingPageProps {
  onNavigate: (page: string) => void;
}

export function BookingPage({ onNavigate }: BookingPageProps) {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-gray-900 mb-4">Agende sua Coleta</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato para confirmar o agendamento
            </p>
          </motion.div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-white to-blue-50 -mt-16">
        <BookingForm />
      </div>

      <Footer />
    </div>
  );
}
