import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { LandingPage } from './pages/LandingPage';
import { ClientDashboard } from './pages/ClientDashboard';
import { ClientOrders } from './pages/client/ClientOrders';
import { ClientSettings } from './pages/client/ClientSettings';
import { DriverDashboard } from './pages/DriverDashboard';
import { DriverRoutes } from './pages/driver/DriverRoutes';
import { DriverDeliveries } from './pages/driver/DriverDeliveries';
import { DriverSettings } from './pages/driver/DriverSettings';
import { LaundryDashboard } from './pages/LaundryDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { BookingPage } from './pages/BookingPage';

type PageType = 
  | 'landing'
  | 'booking'
  | 'client-dashboard'
  | 'client-orders'
  | 'client-settings'
  | 'driver-dashboard'
  | 'driver-routes'
  | 'driver-deliveries'
  | 'driver-settings'
  | 'laundry-dashboard'
  | 'laundry-orders'
  | 'laundry-team'
  | 'laundry-settings'
  | 'admin-dashboard'
  | 'admin-orders'
  | 'admin-users'
  | 'admin-drivers'
  | 'admin-settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('landing');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      // Landing & Booking
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'booking':
        return <BookingPage onNavigate={handleNavigate} />;

      // Client Pages
      case 'client-dashboard':
        return <ClientDashboard onNavigate={handleNavigate} currentPage={currentPage} />;
      case 'client-orders':
        return <ClientOrders onNavigate={handleNavigate} currentPage={currentPage} />;
      case 'client-settings':
        return <ClientSettings onNavigate={handleNavigate} currentPage={currentPage} />;

      // Driver Pages
      case 'driver-dashboard':
        return <DriverDashboard onNavigate={handleNavigate} currentPage={currentPage} />;
      case 'driver-routes':
        return <DriverRoutes onNavigate={handleNavigate} currentPage={currentPage} />;
      case 'driver-deliveries':
        return <DriverDeliveries onNavigate={handleNavigate} currentPage={currentPage} />;
      case 'driver-settings':
        return <DriverSettings onNavigate={handleNavigate} currentPage={currentPage} />;

      // Laundry Pages
      case 'laundry-dashboard':
      case 'laundry-orders':
      case 'laundry-team':
      case 'laundry-settings':
        return <LaundryDashboard onNavigate={handleNavigate} currentPage={currentPage} />;

      // Admin Pages
      case 'admin-dashboard':
      case 'admin-orders':
      case 'admin-users':
      case 'admin-drivers':
      case 'admin-settings':
        return <AdminDashboard onNavigate={handleNavigate} currentPage={currentPage} />;

      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      {renderPage()}
      <Toaster position="top-right" />
    </>
  );
}
