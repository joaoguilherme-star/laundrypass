import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Switch } from '../../components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { motion } from 'motion/react';
import { User, Bell, Lock, CreditCard, MapPin, Save } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ClientSettingsProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function ClientSettings({ onNavigate, currentPage }: ClientSettingsProps) {
  const handleSave = () => {
    toast.success('Configurações salvas com sucesso!');
  };

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
          <h1 className="text-gray-900 mb-2">Configurações</h1>
          <p className="text-gray-600">Gerencie suas preferências e informações da conta</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">
              <User className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Perfil</span>
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Notificações</span>
            </TabsTrigger>
            <TabsTrigger value="security">
              <Lock className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Segurança</span>
            </TabsTrigger>
            <TabsTrigger value="payment">
              <CreditCard className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Pagamento</span>
            </TabsTrigger>
            <TabsTrigger value="addresses">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Endereços</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-6">
                <h3 className="text-gray-900 mb-6">Informações do Perfil</h3>
                
                <div className="flex items-center gap-6 mb-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=Carlos Mendes" />
                    <AvatarFallback>CM</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" className="mb-2">Alterar Foto</Button>
                    <p className="text-sm text-gray-600">JPG, PNG ou GIF. Máx 2MB</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" defaultValue="Carlos Mendes" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" defaultValue="carlos@email.com" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" defaultValue="(11) 98765-4321" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="cpf">CPF</Label>
                    <Input id="cpf" defaultValue="123.456.789-00" className="mt-2" disabled />
                  </div>
                </div>

                <Button className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-700" onClick={handleSave}>
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Alterações
                </Button>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-6">
                <h3 className="text-gray-900 mb-6">Preferências de Notificação</h3>
                
                <div className="space-y-6">
                  {[
                    { label: 'E-mail sobre pedidos', description: 'Receba atualizações sobre seus pedidos' },
                    { label: 'SMS sobre coleta', description: 'Notificação quando o motorista estiver a caminho' },
                    { label: 'Promoções e ofertas', description: 'Receba ofertas exclusivas e descontos' },
                    { label: 'Newsletter', description: 'Novidades e dicas de lavanderia' },
                    { label: 'Push notifications', description: 'Notificações no app mobile' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="text-gray-900">{item.label}</div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </div>
                      <Switch defaultChecked={index < 3} />
                    </div>
                  ))}
                </div>

                <Button className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-700" onClick={handleSave}>
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Preferências
                </Button>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-6">
                <h3 className="text-gray-900 mb-6">Segurança</h3>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="current-password">Senha Atual</Label>
                    <Input id="current-password" type="password" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="new-password">Nova Senha</Label>
                    <Input id="new-password" type="password" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                    <Input id="confirm-password" type="password" className="mt-2" />
                  </div>

                  <div className="pt-6 border-t">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-gray-900">Autenticação de dois fatores</div>
                        <div className="text-sm text-gray-600">Adicione uma camada extra de segurança</div>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Button className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-700" onClick={handleSave}>
                  <Save className="w-4 h-4 mr-2" />
                  Atualizar Senha
                </Button>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Payment Tab */}
          <TabsContent value="payment" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-6">
                <h3 className="text-gray-900 mb-6">Métodos de Pagamento</h3>
                
                <div className="space-y-4 mb-6">
                  <Card className="p-4 border-blue-200 bg-blue-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-gray-900">•••• •••• •••• 4321</div>
                        <div className="text-sm text-gray-600">Expira em 12/2025</div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Editar</Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                          Remover
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>

                <Button variant="outline">
                  + Adicionar Novo Cartão
                </Button>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-6">
                <h3 className="text-gray-900 mb-6">Endereços Salvos</h3>
                
                <div className="space-y-4 mb-6">
                  <Card className="p-4 border-blue-200 bg-blue-50">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-gray-900 mb-1">Casa</div>
                        <div className="text-sm text-gray-600">
                          Rua das Flores, 123 - Centro<br />
                          São Paulo - SP, 01234-000
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Editar</Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                          Remover
                        </Button>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-gray-900 mb-1">Trabalho</div>
                        <div className="text-sm text-gray-600">
                          Av. Paulista, 1000 - Bela Vista<br />
                          São Paulo - SP, 01310-100
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Editar</Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                          Remover
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>

                <Button variant="outline">
                  + Adicionar Novo Endereço
                </Button>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
