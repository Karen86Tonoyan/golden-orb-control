import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ExternalLink, Globe, Shield, Brain, Smartphone, Code, Film, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type ProjectStatus = 'active' | 'core' | 'web' | 'mobile' | 'creative';

const statusColors: Record<ProjectStatus, string> = {
  active: 'bg-destructive text-destructive-foreground',
  core: 'bg-primary text-primary-foreground',
  web: 'bg-secondary text-secondary-foreground',
  mobile: 'bg-accent text-accent-foreground',
  creative: 'bg-muted text-muted-foreground',
};

const statusLabels: Record<ProjectStatus, string> = {
  active: '🔴 TOP PRIORITY',
  core: '🟡 CORE SYSTEM',
  web: '🟢 WEB',
  mobile: '📱 MOBILE',
  creative: '📚 TWÓRCZOŚĆ',
};

const projects: { name: string; description: string; url?: string; tech: string[]; status: ProjectStatus; icon: React.ElementType }[] = [
  {
    name: 'ALFA Platform X MVP',
    description: '100% security score, 30 scenariuszy testowych. Deception Engine + Cerber + Guardian — kompletna platforma bezpieczeństwa AI.',
    url: 'https://alfaplatformx.com',
    tech: ['Python', 'AI Security', 'Deception Engine'],
    status: 'active',
    icon: Shield,
  },
  {
    name: 'karen1986bot',
    description: 'Bot z integracją Kimi/Moonshot. PR #22 — aktywny rozwój. Automatyzacja i AI assistant.',
    url: 'https://github.com/ktono86tonoyan',
    tech: ['Python', 'GitHub', 'AI'],
    status: 'active',
    icon: Brain,
  },
  {
    name: 'AI Security Dataset',
    description: 'Budowanie datasetu wg OWASP LLM Top 10. Pipeline: Grok → Gemini → Claude → Karen.',
    tech: ['OWASP', 'AI/ML', 'Dataset Engineering'],
    status: 'active',
    icon: Database,
  },
  {
    name: 'Video/Film Pipeline',
    description: 'ComfyUI, Windows native (RTX 5070 Ti). Wav2Lip 2.1, Stable Diffusion, DaVinci Resolve 4K.',
    tech: ['ComfyUI', 'Stable Diffusion', 'DaVinci Resolve'],
    status: 'active',
    icon: Film,
  },
  {
    name: 'FILTRY TONOYANA v1.0',
    description: '7 filtrów anty-halucynacyjnych, 95% niezawodność. TDCM — Tonoyan Dynamic Confidence Model.',
    tech: ['AI Filtering', 'TDCM', 'Anti-hallucination'],
    status: 'core',
    icon: Shield,
  },
  {
    name: 'NOWA LOGIKA AI v2.0.0-ENTERPRISE',
    description: '83/83 testy zaliczone. Dual-gate filter, harmonic mean confidence scoring.',
    tech: ['AI Logic', 'Testing', 'Enterprise'],
    status: 'core',
    icon: Brain,
  },
  {
    name: 'CERBER Security Engine',
    description: 'Kotlin — Łasuch v1.2, prompt injection scoring, zaawansowane wykrywanie zagrożeń.',
    tech: ['Kotlin', 'Security', 'Prompt Injection'],
    status: 'core',
    icon: Shield,
  },
  {
    name: 'TRINITY System',
    description: 'Karen (КОРОЛЬ) + Claude (КОРОЛЕВА) + GPT (ГЕНЕРАЛ) — trzy AI pracujące jako zespół.',
    tech: ['Multi-AI', 'Orchestration', 'Architecture'],
    status: 'core',
    icon: Brain,
  },
  {
    name: 'ALFA AI WordPress Manager PRO',
    description: '40+ REST API endpoints. Zarządzanie treścią WordPress z poziomu AI.',
    url: 'https://karentonoyan.pl',
    tech: ['WordPress', 'REST API', 'PHP'],
    status: 'web',
    icon: Globe,
  },
  {
    name: 'Trinity Workspace',
    description: 'Dashboard integrujący Claude + GPT + Perplexity + Gemini w jednym interfejsie.',
    tech: ['React', 'Multi-AI', 'Dashboard'],
    status: 'web',
    icon: Code,
  },
  {
    name: 'Cerber Security App',
    description: 'Aplikacja mobilna w Kivy/Python. Samsung S24 Ultra z Knox Secure Element.',
    tech: ['Kivy', 'Python', 'Knox SE'],
    status: 'mobile',
    icon: Smartphone,
  },
];

const Projects: React.FC = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Projekty & Ekosystem ALFA</h1>
      <p className="text-muted-foreground mb-10">Pełna mapa aktywnych projektów, systemów i platform.</p>

      {(['active', 'core', 'web', 'mobile'] as ProjectStatus[]).map(status => {
        const group = projects.filter(p => p.status === status);
        if (!group.length) return null;
        return (
          <section key={status} className="mb-10">
            <h2 className="text-lg font-semibold text-foreground mb-4">{statusLabels[status]}</h2>
            <div className="grid gap-4">
              {group.map((p, i) => (
                <Card key={i} className="animate-fade-in hover:shadow-md hover:border-primary/30 transition-all" style={{ animationDelay: `${i * 60}ms` }}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <p.icon className="h-5 w-5 text-primary flex-shrink-0" />
                        <CardTitle className="text-lg">{p.name}</CardTitle>
                      </div>
                      <Badge className={statusColors[p.status]}>{p.status}</Badge>
                    </div>
                    <CardDescription className="mt-1">{p.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap items-center gap-3">
                    <div className="flex flex-wrap gap-2 flex-1">
                      {p.tech.map(t => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">{t}</span>
                      ))}
                    </div>
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-3.5 w-3.5 mr-1" /> Odwiedź
                        </Button>
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  </div>
);

export default Projects;
