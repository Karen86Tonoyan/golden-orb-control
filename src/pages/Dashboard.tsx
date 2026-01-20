import React, { useState, useEffect } from 'react';
import { mockServices, Service } from '@/lib/mockData';
import DashboardHeader from '@/components/DashboardHeader';
import StatsOverview from '@/components/StatsOverview';
import ServiceCard from '@/components/ServiceCard';
import MetricsChart from '@/components/MetricsChart';
import LogViewer from '@/components/LogViewer';
import { toast } from '@/hooks/use-toast';
import { Zap } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [services, setServices] = useState<Service[]>(mockServices);
  const [isConnected, setIsConnected] = useState(true);

  // Simulate WebSocket connection status
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly toggle connection status (for demo)
      if (Math.random() > 0.95) {
        setIsConnected(prev => !prev);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleServiceAction = (serviceId: string, action: 'start' | 'stop' | 'restart') => {
    setServices(prev => prev.map(service => {
      if (service.id !== serviceId) return service;

      let newStatus: Service['status'] = service.status;
      
      switch (action) {
        case 'start':
          newStatus = 'online';
          break;
        case 'stop':
          newStatus = 'offline';
          break;
        case 'restart':
          newStatus = 'online';
          break;
      }

      const actionMessages = {
        start: 'uruchomiona',
        stop: 'zatrzymana',
        restart: 'zrestartowana',
      };

      toast({
        title: 'Akcja wykonana',
        description: `Usługa ${service.name} została ${actionMessages[action]}.`,
      });

      return {
        ...service,
        status: newStatus,
        cpu: newStatus === 'online' ? Math.floor(Math.random() * 30) + 10 : 0,
        ram: newStatus === 'online' ? Math.floor(Math.random() * 40) + 20 : 0,
        uptime: action === 'start' || action === 'restart' ? '0d 0h 0m' : service.uptime,
        lastRestart: action === 'restart' ? new Date().toLocaleString('pl-PL') : service.lastRestart,
      };
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader isConnected={isConnected} />

      <main className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-medium">Panel Zarządzania</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Witaj w <span className="text-gradient-gold">Admin Panel</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Zarządzaj swoimi usługami i monitoruj ich status w czasie rzeczywistym.
          </p>
        </div>

        {/* Stats Overview */}
        <section className="mb-8">
          <StatsOverview services={services} />
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          {/* Services Grid */}
          <div className="xl:col-span-2">
            <h2 className="text-lg font-semibold text-foreground mb-4">Usługi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={service.id} style={{ animationDelay: `${index * 100}ms` }}>
                  <ServiceCard 
                    service={service} 
                    onAction={handleServiceAction} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <MetricsChart />
          </div>
        </div>

        {/* Logs Section */}
        <section>
          <LogViewer />
        </section>

        {/* Footer */}
        <footer className="mt-12 py-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Admin Panel. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            WebSocket Status: {isConnected ? 'Connected' : 'Reconnecting...'}
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
