import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Switch } from '../../components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { motion } from 'motion/react';
import { Save } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface DriverSettingsProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function DriverSettings({ onNavigate, currentPage }: DriverSettingsProps) {
  const handleSave = () => {
    toast.success('Configurações salvas com sucesso!');
  };

  return (
    <DashboardLayout
      userType="driver"
      userName="Roberto Silva"
      onNavigate={onNavigate}
      currentPage={currentPage}
    >
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-gray-900 mb-2">Configurações</h1>
          <p className="text-gray-600">Gerencie suas informações e preferências</p>
        </div>

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6">
            <h3 className="text-gray-900 mb-6">Informações do Motorista</h3>
            
            <div className="flex items-center gap-6 mb-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=Roberto Silva" />
                <AvatarFallback>RS</AvatarFallback>
              </Avatar>
              <div>
                <Button variant="outline" className="mb-2">Alterar Foto</Button>
                <p className="text-sm text-gray-600">JPG, PNG ou GIF. Máx 2MB</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" defaultValue="Roberto Silva" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" defaultValue="roberto@email.com" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" defaultValue="(11) 99999-8888" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="cnh">CNH</Label>
                <Input id="cnh" defaultValue="12345678900" className="mt-2" />
              </div>
            </div>

            <Button className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-700" onClick={handleSave}>
              <Save className="w-4 h-4 mr-2" />
              Salvar Alterações
            </Button>
          </Card>
        </motion.div>

        {/* Vehicle */}
        <Card className="p-6">
          <h3 className="text-gray-900 mb-6">Informações do Veículo</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="vehicle">Modelo</Label>
              <Input id="vehicle" defaultValue="Honda CG 160" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="plate">Placa</Label>
              <Input id="plate" defaultValue="ABC-1234" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="color">Cor</Label>
              <Input id="color" defaultValue="Preta" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="year">Ano</Label>
              <Input id="year" defaultValue="2022" className="mt-2" />
            </div>
          </div>

          <Button className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-700" onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Salvar Veículo
          </Button>
        </Card>

        {/* Preferences */}
        <Card className="p-6">
          <h3 className="text-gray-900 mb-6">Preferências de Trabalho</h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-900">Notificações de novas rotas</div>
                <div className="text-sm text-gray-600">Receba alertas quando novas entregas estiverem disponíveis</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-900">Aceitar rotas automaticamente</div>
                <div className="text-sm text-gray-600">Rotas compatíveis serão aceitas automaticamente</div>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-900">Modo disponível</div>
                <div className="text-sm text-gray-600">Ative para receber novas entregas</div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>

          <Button className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-700" onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Salvar Preferências
          </Button>
        </Card>

        {/* Bank Account */}
        <Card className="p-6">
          <h3 className="text-gray-900 mb-6">Conta Bancária</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="bank">Banco</Label>
              <Input id="bank" defaultValue="Banco do Brasil" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="agency">Agência</Label>
              <Input id="agency" defaultValue="1234-5" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="account">Conta</Label>
              <Input id="account" defaultValue="12345-6" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="pix">Chave PIX</Label>
              <Input id="pix" defaultValue="roberto@email.com" className="mt-2" />
            </div>
          </div>

          <Button className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-700" onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Salvar Conta
          </Button>
        </Card>
      </div>
    </DashboardLayout>
  );
}
