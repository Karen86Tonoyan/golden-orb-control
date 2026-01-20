import React, { useState } from 'react';
import { Service } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { 
  Play, 
  Square, 
  RotateCcw, 
  Server, 
  Clock, 
  Cpu, 
  HardDrive,
  Loader2
} from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onAction: (serviceId: string, action: 'start' | 'stop' | 'restart') => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onAction }) => {
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const handleAction = async (action: 'start' | 'stop' | 'restart') => {
    setActionLoading(action);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    onAction(service.id, action);
    setActionLoading(null);
  };

  const isOnline = service.status === 'online';
  const isTransitioning = service.status === 'starting' || service.status === 'stopping';

  return (
    <div className="card-premium p-5 animate-fade-in">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-lg ${isOnline ? 'bg-success/10' : 'bg-destructive/10'}`}>
            <Server className={`w-5 h-5 ${isOnline ? 'text-success' : 'text-destructive'}`} />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{service.name}</h3>
            <p className="text-sm text-muted-foreground">Port: {service.port}</p>
          </div>
        </div>
        <div className={`flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium ${
          isOnline 
            ? 'bg-success/10 text-success' 
            : isTransitioning
            ? 'bg-warning/10 text-warning'
            : 'bg-destructive/10 text-destructive'
        }`}>
          <span className={`w-2 h-2 rounded-full ${
            isOnline 
              ? 'bg-success animate-pulse' 
              : isTransitioning
              ? 'bg-warning animate-pulse'
              : 'bg-destructive'
          }`} />
          {service.status === 'online' && 'Online'}
          {service.status === 'offline' && 'Offline'}
          {service.status === 'starting' && 'Uruchamianie...'}
          {service.status === 'stopping' && 'Zatrzymywanie...'}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {service.description}
      </p>

      {/* Metrics */}
      {isOnline && (
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-secondary/50 rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
              <Clock className="w-3.5 h-3.5" />
              Uptime
            </div>
            <p className="text-sm font-medium text-foreground">{service.uptime}</p>
          </div>
          <div className="bg-secondary/50 rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
              <Cpu className="w-3.5 h-3.5" />
              CPU
            </div>
            <p className="text-sm font-medium text-foreground">{service.cpu}%</p>
          </div>
          <div className="bg-secondary/50 rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
              <HardDrive className="w-3.5 h-3.5" />
              RAM
            </div>
            <p className="text-sm font-medium text-foreground">{service.ram}%</p>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        {!isOnline ? (
          <Button
            variant="success"
            size="sm"
            className="flex-1"
            onClick={() => handleAction('start')}
            disabled={isTransitioning || actionLoading !== null}
          >
            {actionLoading === 'start' ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Play className="w-4 h-4" />
            )}
            Start
          </Button>
        ) : (
          <>
            <Button
              variant="destructive"
              size="sm"
              className="flex-1"
              onClick={() => handleAction('stop')}
              disabled={isTransitioning || actionLoading !== null}
            >
              {actionLoading === 'stop' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Square className="w-4 h-4" />
              )}
              Stop
            </Button>
            <Button
              variant="warning"
              size="sm"
              className="flex-1"
              onClick={() => handleAction('restart')}
              disabled={isTransitioning || actionLoading !== null}
            >
              {actionLoading === 'restart' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <RotateCcw className="w-4 h-4" />
              )}
              Restart
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
