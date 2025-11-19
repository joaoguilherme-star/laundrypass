import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Package, 
  Truck, 
  Users, 
  Settings, 
  LogOut,
  Bell,
  Search,
  Menu,
  X
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { useState } from 'react';
import logoImage from 'figma:asset/df4bb514bb3a1fc9ad9a9bfa8db7a0ce8a5e6646.png';

interface DashboardLayoutProps {
  children: ReactNode;
  userType: 'client' | 'laundry' | 'driver' | 'admin';
  userName: string;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function DashboardLayout({ 
  children, 
  userType, 
  userName,
  onNavigate,
  currentPage 
}: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = {
    client: [
      { icon: LayoutDashboard, label: 'Dashboard', page: 'client-dashboard' },
      { icon: Package, label: 'Meus Pedidos', page: 'client-orders' },
      { icon: Settings, label: 'Configurações', page: 'client-settings' },
    ],
    laundry: [
      { icon: LayoutDashboard, label: 'Dashboard', page: 'laundry-dashboard' },
      { icon: Package, label: 'Pedidos Ativos', page: 'laundry-orders' },
      { icon: Users, label: 'Equipe', page: 'laundry-team' },
      { icon: Settings, label: 'Configurações', page: 'laundry-settings' },
    ],
    driver: [
      { icon: LayoutDashboard, label: 'Dashboard', page: 'driver-dashboard' },
      { icon: Truck, label: 'Rotas', page: 'driver-routes' },
      { icon: Package, label: 'Entregas', page: 'driver-deliveries' },
      { icon: Settings, label: 'Configurações', page: 'driver-settings' },
    ],
    admin: [
      { icon: LayoutDashboard, label: 'Dashboard', page: 'admin-dashboard' },
      { icon: Package, label: 'Pedidos', page: 'admin-orders' },
      { icon: Users, label: 'Usuários', page: 'admin-users' },
      { icon: Truck, label: 'Motoristas', page: 'admin-drivers' },
      { icon: Settings, label: 'Configurações', page: 'admin-settings' },
    ],
  };

  const currentMenuItems = menuItems[userType];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white border-b border-gray-200 sticky top-0 z-40"
      >
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            <div className="flex items-center gap-2">
              <img src={logoImage} alt="LaundryPass" className="w-8 h-8" />
              <span className="hidden sm:block">LaundryPass</span>
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Buscar pedidos, clientes..."
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-red-500">
                3
              </Badge>
            </Button>

            <div className="flex items-center gap-3">
              <Avatar className="w-9 h-9">
                <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${userName}`} />
                <AvatarFallback>{userName.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="hidden sm:block">
                <div className="text-sm">{userName}</div>
                <div className="text-xs text-gray-500 capitalize">{userType}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -20, opacity: 0 }}
          animate={{ 
            x: 0, 
            opacity: 1,
            width: isSidebarOpen || window.innerWidth >= 1024 ? 256 : 0
          }}
          className={`bg-white border-r border-gray-200 fixed lg:sticky top-16 h-[calc(100vh-4rem)] z-30 overflow-hidden ${
            isSidebarOpen ? 'block' : 'hidden lg:block'
          }`}
        >
          <nav className="p-4 space-y-2">
            {currentMenuItems.map((item) => (
              <Button
                key={item.page}
                variant={currentPage === item.page ? 'default' : 'ghost'}
                className={`w-full justify-start gap-3 ${
                  currentPage === item.page 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700' 
                    : ''
                }`}
                onClick={() => {
                  onNavigate(item.page);
                  setIsSidebarOpen(false);
                }}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Button>
            ))}

            <div className="pt-4 mt-4 border-t">
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={() => onNavigate('landing')}
              >
                <LogOut className="w-5 h-5" />
                Sair
              </Button>
            </div>
          </nav>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
