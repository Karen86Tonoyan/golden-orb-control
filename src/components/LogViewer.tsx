import React, { useState, useEffect, useRef } from 'react';
import { LogEntry, mockLogs } from '@/lib/mockData';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Terminal, 
  Search, 
  Trash2, 
  Download, 
  Pause, 
  Play,
  AlertCircle,
  AlertTriangle,
  Info,
  Bug
} from 'lucide-react';

const LogViewer: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>(mockLogs);
  const [filter, setFilter] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const newLog: LogEntry = {
        id: Date.now().toString(),
        timestamp: new Date().toLocaleString('pl-PL'),
        level: ['info', 'warn', 'error', 'debug'][Math.floor(Math.random() * 4)] as LogEntry['level'],
        service: mockLogs[Math.floor(Math.random() * mockLogs.length)].service,
        message: `Simulated log entry #${Math.floor(Math.random() * 1000)}`,
      };
      
      setLogs(prev => [newLog, ...prev].slice(0, 100));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const filteredLogs = logs.filter(log => 
    log.message.toLowerCase().includes(filter.toLowerCase()) ||
    log.service.toLowerCase().includes(filter.toLowerCase())
  );

  const getLevelIcon = (level: LogEntry['level']) => {
    switch (level) {
      case 'error':
        return <AlertCircle className="w-4 h-4 text-destructive" />;
      case 'warn':
        return <AlertTriangle className="w-4 h-4 text-warning" />;
      case 'info':
        return <Info className="w-4 h-4 text-primary" />;
      case 'debug':
        return <Bug className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getLevelClass = (level: LogEntry['level']) => {
    switch (level) {
      case 'error':
        return 'text-destructive bg-destructive/5';
      case 'warn':
        return 'text-warning bg-warning/5';
      case 'info':
        return 'text-primary bg-primary/5';
      case 'debug':
        return 'text-muted-foreground bg-muted/30';
    }
  };

  const handleExport = () => {
    const content = filteredLogs
      .map(log => `[${log.timestamp}] [${log.level.toUpperCase()}] [${log.service}] ${log.message}`)
      .join('\n');
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `logs-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="card-premium p-5 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Terminal className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Logi systemowe</h3>
            <p className="text-sm text-muted-foreground">{filteredLogs.length} wpisów</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={isPaused ? 'gold' : 'secondary'}
            size="icon"
            onClick={() => setIsPaused(!isPaused)}
          >
            {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
          </Button>
          <Button variant="secondary" size="icon" onClick={handleExport}>
            <Download className="w-4 h-4" />
          </Button>
          <Button 
            variant="secondary" 
            size="icon" 
            onClick={() => setLogs([])}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Szukaj w logach..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="pl-10 bg-secondary border-border"
        />
      </div>

      {/* Logs */}
      <ScrollArea className="h-80" ref={scrollRef}>
        <div className="space-y-1 font-mono text-xs">
          {filteredLogs.length === 0 ? (
            <div className="flex items-center justify-center h-40 text-muted-foreground">
              Brak logów do wyświetlenia
            </div>
          ) : (
            filteredLogs.map((log) => (
              <div
                key={log.id}
                className={`flex items-start gap-2 p-2 rounded-lg transition-colors hover:bg-secondary/50 ${getLevelClass(log.level)}`}
              >
                {getLevelIcon(log.level)}
                <span className="text-muted-foreground shrink-0">{log.timestamp}</span>
                <span className="text-primary shrink-0">[{log.service}]</span>
                <span className="text-foreground break-all">{log.message}</span>
              </div>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default LogViewer;
