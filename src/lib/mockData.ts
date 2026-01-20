// Mock data for the admin dashboard

export interface Service {
  id: string;
  name: string;
  description: string;
  status: 'online' | 'offline' | 'starting' | 'stopping';
  uptime: string;
  cpu: number;
  ram: number;
  port: number;
  lastRestart: string;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  level: 'info' | 'warn' | 'error' | 'debug';
  service: string;
  message: string;
}

export interface MetricsData {
  timestamp: string;
  cpu: number;
  ram: number;
}

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'API Gateway',
    description: 'Główny gateway API dla wszystkich mikroserwisów',
    status: 'online',
    uptime: '15d 4h 32m',
    cpu: 23,
    ram: 45,
    port: 8080,
    lastRestart: '2024-01-05 08:15:00',
  },
  {
    id: '2',
    name: 'Auth Service',
    description: 'Serwis autoryzacji i uwierzytelniania',
    status: 'online',
    uptime: '15d 4h 32m',
    cpu: 12,
    ram: 28,
    port: 8081,
    lastRestart: '2024-01-05 08:15:00',
  },
  {
    id: '3',
    name: 'Database Proxy',
    description: 'Proxy dla połączeń z bazą danych',
    status: 'online',
    uptime: '15d 4h 32m',
    cpu: 45,
    ram: 62,
    port: 5432,
    lastRestart: '2024-01-05 08:15:00',
  },
  {
    id: '4',
    name: 'File Storage',
    description: 'Serwis przechowywania plików S3',
    status: 'offline',
    uptime: '0d 0h 0m',
    cpu: 0,
    ram: 0,
    port: 9000,
    lastRestart: '2024-01-18 14:30:00',
  },
  {
    id: '5',
    name: 'Message Queue',
    description: 'RabbitMQ message broker',
    status: 'online',
    uptime: '7d 12h 45m',
    cpu: 8,
    ram: 35,
    port: 5672,
    lastRestart: '2024-01-12 20:00:00',
  },
  {
    id: '6',
    name: 'Cache Server',
    description: 'Redis cache server',
    status: 'online',
    uptime: '15d 4h 32m',
    cpu: 5,
    ram: 18,
    port: 6379,
    lastRestart: '2024-01-05 08:15:00',
  },
];

export const mockLogs: LogEntry[] = [
  { id: '1', timestamp: '2024-01-20 12:45:32', level: 'info', service: 'API Gateway', message: 'Incoming request from 192.168.1.100' },
  { id: '2', timestamp: '2024-01-20 12:45:30', level: 'debug', service: 'Auth Service', message: 'Token validation successful for user admin' },
  { id: '3', timestamp: '2024-01-20 12:45:28', level: 'warn', service: 'Database Proxy', message: 'Connection pool reaching 80% capacity' },
  { id: '4', timestamp: '2024-01-20 12:45:25', level: 'error', service: 'File Storage', message: 'Failed to connect to S3 endpoint' },
  { id: '5', timestamp: '2024-01-20 12:45:20', level: 'info', service: 'Message Queue', message: 'Processing 150 messages in queue' },
  { id: '6', timestamp: '2024-01-20 12:45:18', level: 'info', service: 'Cache Server', message: 'Cache hit ratio: 94.5%' },
  { id: '7', timestamp: '2024-01-20 12:45:15', level: 'debug', service: 'API Gateway', message: 'Route /api/users matched successfully' },
  { id: '8', timestamp: '2024-01-20 12:45:10', level: 'info', service: 'Auth Service', message: 'New session created for user admin' },
  { id: '9', timestamp: '2024-01-20 12:45:05', level: 'warn', service: 'Database Proxy', message: 'Slow query detected: 2.3s execution time' },
  { id: '10', timestamp: '2024-01-20 12:45:00', level: 'error', service: 'File Storage', message: 'Retry attempt 3/5 for S3 connection' },
];

export const generateMetricsData = (): MetricsData[] => {
  const data: MetricsData[] = [];
  const now = new Date();
  
  for (let i = 59; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 60000);
    data.push({
      timestamp: timestamp.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' }),
      cpu: Math.floor(Math.random() * 40) + 20,
      ram: Math.floor(Math.random() * 30) + 40,
    });
  }
  
  return data;
};
