import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  LogOut, 
  Bell, 
  User,
  Wifi,
  WifiOff
} from 'lucide-react';

interface DashboardHeaderProps {
  isConnected: boolean;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ isConnected }) => {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-1 items-center justify-between ml-4">
      {/* Connection Status */}
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 text-xs">
        {isConnected ? (
          <>
            <Wifi className="w-3.5 h-3.5 text-success" />
            <span className="text-success hidden sm:inline">Połączono</span>
          </>
        ) : (
          <>
            <WifiOff className="w-3.5 h-3.5 text-destructive" />
            <span className="text-destructive hidden sm:inline">Rozłączono</span>
          </>
        )}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-1.5">
        <Button variant="ghost" size="icon" className="relative h-8 w-8">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
        </Button>

        <div className="h-6 w-px bg-border mx-1.5 hidden sm:block" />

        <div className="flex items-center gap-2">
          <div className="hidden sm:block text-right">
            <p className="text-xs font-medium text-foreground">{user?.username}</p>
            <p className="text-[10px] text-muted-foreground">{user?.role}</p>
          </div>
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <User className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          onClick={logout}
          className="text-muted-foreground hover:text-destructive h-8 w-8"
        >
          <LogOut className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
