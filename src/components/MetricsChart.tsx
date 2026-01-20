import React, { useState, useEffect } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { generateMetricsData, MetricsData } from '@/lib/mockData';
import { Cpu, HardDrive, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MetricsChart: React.FC = () => {
  const [data, setData] = useState<MetricsData[]>([]);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    setData(generateMetricsData());

    if (isLive) {
      const interval = setInterval(() => {
        setData(prev => {
          const newData = [...prev.slice(1)];
          const now = new Date();
          newData.push({
            timestamp: now.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' }),
            cpu: Math.floor(Math.random() * 40) + 20,
            ram: Math.floor(Math.random() * 30) + 40,
          });
          return newData;
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isLive]);

  const avgCpu = Math.round(data.reduce((acc, d) => acc + d.cpu, 0) / (data.length || 1));
  const avgRam = Math.round(data.reduce((acc, d) => acc + d.ram, 0) / (data.length || 1));

  return (
    <div className="card-premium p-5 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Zużycie zasobów</h3>
          <p className="text-sm text-muted-foreground">Ostatnie 60 minut</p>
        </div>
        <Button
          variant={isLive ? 'gold' : 'secondary'}
          size="sm"
          onClick={() => setIsLive(!isLive)}
        >
          <RefreshCw className={`w-4 h-4 ${isLive ? 'animate-spin' : ''}`} />
          {isLive ? 'Live' : 'Paused'}
        </Button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-3 bg-secondary/50 rounded-lg p-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Cpu className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Średnie CPU</p>
            <p className="text-xl font-bold text-foreground">{avgCpu}%</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-secondary/50 rounded-lg p-3">
          <div className="p-2 rounded-lg bg-success/10">
            <HardDrive className="w-5 h-5 text-success" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Średnie RAM</p>
            <p className="text-xl font-bold text-foreground">{avgRam}%</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(45, 80%, 55%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(45, 80%, 55%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="ramGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(142, 70%, 45%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(142, 70%, 45%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(240, 6%, 18%)" />
            <XAxis 
              dataKey="timestamp" 
              tick={{ fill: 'hsl(40, 6%, 55%)', fontSize: 10 }}
              tickLine={{ stroke: 'hsl(240, 6%, 18%)' }}
              axisLine={{ stroke: 'hsl(240, 6%, 18%)' }}
              interval="preserveStartEnd"
            />
            <YAxis 
              tick={{ fill: 'hsl(40, 6%, 55%)', fontSize: 10 }}
              tickLine={{ stroke: 'hsl(240, 6%, 18%)' }}
              axisLine={{ stroke: 'hsl(240, 6%, 18%)' }}
              domain={[0, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(240, 8%, 8%)',
                border: '1px solid hsl(240, 6%, 18%)',
                borderRadius: '8px',
                color: 'hsl(40, 10%, 95%)',
              }}
              labelStyle={{ color: 'hsl(40, 6%, 55%)' }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '10px' }}
              formatter={(value) => <span className="text-muted-foreground text-sm">{value}</span>}
            />
            <Area
              type="monotone"
              dataKey="cpu"
              name="CPU %"
              stroke="hsl(45, 80%, 55%)"
              strokeWidth={2}
              fill="url(#cpuGradient)"
            />
            <Area
              type="monotone"
              dataKey="ram"
              name="RAM %"
              stroke="hsl(142, 70%, 45%)"
              strokeWidth={2}
              fill="url(#ramGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MetricsChart;
