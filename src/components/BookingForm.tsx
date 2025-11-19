import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, MapPin, Package } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card } from './ui/card';
import { toast } from 'sonner@2.0.3';

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    service: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.date || !formData.time || !formData.service) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    // Show success message
    toast.success('Agendamento realizado com sucesso! Entraremos em contato em breve.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      date: '',
      time: '',
      service: '',
    });
  };

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 mb-4 block">AGENDE AGORA</span>
          <h2 className="text-gray-900 mb-4">Marque sua Coleta</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Preencha o formulário abaixo e agende sua coleta. Leva apenas 2 minutos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="João Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="joao@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Endereço de Coleta</Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="Rua, número, bairro"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Data da Coleta</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="mt-2"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Horário</Label>
                    <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Manhã (8h - 12h)</SelectItem>
                        <SelectItem value="afternoon">Tarde (12h - 18h)</SelectItem>
                        <SelectItem value="evening">Noite (18h - 20h)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Tipo de Serviço</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Selecione o serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Lavagem Básica (R$ 4,50/kg)</SelectItem>
                      <SelectItem value="premium">Lavagem Premium (R$ 6,50/kg)</SelectItem>
                      <SelectItem value="special">Peças Especiais (Sob consulta)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800"
                  size="lg"
                >
                  Confirmar Agendamento
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CalendarIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Agende com Antecedência</h3>
                  <p className="text-gray-600">
                    Reserve sua coleta com pelo menos 24h de antecedência para garantir disponibilidade.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Horários Flexíveis</h3>
                  <p className="text-gray-600">
                    Escolha o melhor horário para você. Atendemos de segunda a sábado.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">Pedido Mínimo</h3>
                  <p className="text-gray-600">
                    O pedido mínimo é de 3kg. Coleta e entrega são sempre gratuitas.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-600 to-indigo-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white mb-2">Área de Atendimento</h3>
                  <p className="text-blue-100">
                    Atendemos toda a região metropolitana. Consulte disponibilidade para sua área.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
