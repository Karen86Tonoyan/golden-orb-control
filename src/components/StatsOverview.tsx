import React from 'react';
import { Service } from '@/lib/mockData';
import { 
  Server, 
  CheckCircle2, 
  XCircle, 
  Activity,
  TrendingUp
} from 'lucide-react';

interface StatsOverviewProps {
  services: Service[];
}

const StatsOverview: React.FC<StatsOverviewProps> = ({ services }) => {
  const totalServices = services.length;
  const onlineServices = services.filter(s => s.status === 'online').length;
  const offlineServices = services.filter(s => s.status === 'offline').length;
  const avgCpu = Math.round(
    services.filter(s => s.status === 'online').reduce((acc, s) => acc + s.cpu, 0) / 
    (onlineServices || 1)
  );

  const stats = [
    {
      label: 'Wszystkie usługi',
      value: totalServices,
      icon: Server,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      label: 'Online',
      value: onlineServices,
      icon: CheckCircle2,
      color: 'text-success',
      bgColor: 'bg-success/10',
    },
    {
      label: 'Offline',
      value: offlineServices,
      icon: XCircle,
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
    },
    {
      label: 'Średnie CPU',
      value: `${avgCpu}%`,
      icon: Activity,
      color: 'text-warning',
      bgColor: 'bg-warning/10',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
      {stats.map((stat, index) => (
        <div 
          key={stat.label}
          className="card-premium p-5"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className={`p-2.5 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
