import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ExternalLink, Globe, Shield, Brain, Smartphone, Code, Film, Database, Zap, Search, Cpu, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type ProjectStatus = 'active' | 'core' | 'web' | 'mobile' | 'tools';

const statusLabels: Record<ProjectStatus, string> = {
  active: '🔴 TOP PRIORITY',
  core: '🟡 CORE SYSTEMY',
  web: '🟢 WEB & WORDPRESS',
  mobile: '📱 MOBILE',
  tools: '🔧 NARZĘDZIA & AUTOMATYZACJA',
};

const statusColors: Record<ProjectStatus, string> = {
  active: 'bg-destructive text-destructive-foreground',
  core: 'bg-primary text-primary-foreground',
  web: 'bg-secondary text-secondary-foreground',
  mobile: 'bg-accent text-accent-foreground',
  tools: 'bg-muted text-muted-foreground',
};

const projects: { name: string; description: string; url?: string; tech: string[]; status: ProjectStatus; icon: React.ElementType; components?: string[] }[] = [
  // ACTIVE
  {
    name: 'ALFA CORE v2.0 — Multi-AI Orchestration',
    description: 'System orkiestracji AI integrujący wiele modeli w jednym środowisku. Zarządzanie modelami lokalnymi i API, wybór najlepszego modelu do zadania, kontrola jakości odpowiedzi.',
    url: 'https://github.com/Karen86Tonoyan/karen1986bot',
    tech: ['Python', 'Shell', 'TypeScript', 'HTML'],
    status: 'active',
    icon: Brain,
    components: ['main.py', 'ollama_client.py', 'gemini_connector.py', 'deepseek_integration.py', 'event_bus.py', 'config.py'],
  },
  {
    name: 'ALFA Platform X MVP',
    description: '100% security score, 30 scenariuszy testowych. Deception Engine + Cerber + Guardian — kompletna platforma bezpieczeństwa AI.',
    url: 'https://alfaplatformx.com',
    tech: ['Python', 'AI Security', 'Deception Engine'],
    status: 'active',
    icon: Shield,
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
  // CORE
  {
    name: 'FILTRY TONOYANA — Anti-Hallucination System',
    description: '7 filtrów anty-halucynacyjnych ograniczających halucynacje modeli AI. Analiza spójności logicznej, struktury i zgodności z zasadami bezpieczeństwa. 95% niezawodność, TDCM.',
    url: 'https://github.com/Karen86Tonoyan/filtry-TONOYAN',
    tech: ['Python', 'FastAPI', 'PHI-3', 'Shell'],
    status: 'core',
    icon: Shield,
    components: ['filters.py', 'filter1-7.py', 'app.py (FastAPI)', 'ai_local.py', 'nano_banana.py', 'brain.py (REPL)', 'cerber/risk_engine.py'],
  },
  {
    name: 'Filtry Bezpieczeństwa ALFA',
    description: 'Narzędzia zabezpieczające AI przed manipulacją, przeciążeniem i nieautoryzowanymi działaniami. Dodatkowa warstwa ochrony między użytkownikiem a modelem.',
    url: 'https://github.com/Karen86Tonoyan/alfafiltrybezpieczenstwa',
    tech: ['Python', 'FastAPI', 'Cerber Metrics'],
    status: 'core',
    icon: Shield,
    components: ['filter.py', 'app.py', 'engine_v2.py', 'cerber/post_crisis_guard.py', 'memory_manager.py'],
  },
  {
    name: 'ALFA 360 — Zero Hallucination Framework',
    description: 'Framework do ograniczenia halucynacji AI i zwiększenia stabilności. Warstwa ochronna dla produkcyjnych systemów AI.',
    url: 'https://github.com/Karen86Tonoyan/-ALFA-360-Open-Manifesto-',
    tech: ['Python', 'HTML', 'SCSS', 'REST API'],
    status: 'core',
    icon: Brain,
    components: ['framework.py', 'cerber_alfa360_core.py', 'guardian.py', 'collective_mind.py', 'bridge_server.py'],
  },
  {
    name: 'NOWA LOGIKA AI — Eliminacja Halucynacji',
    description: '83/83 testy zaliczone. Dual-gate filter, harmonic mean confidence scoring. Mechanizmy kontroli procesu generowania odpowiedzi.',
    url: 'https://github.com/Karen86Tonoyan/NOWA-LOGIKA-AI-BRAK-HALUCYNACJI',
    tech: ['Python', 'AI Logic', 'Testing'],
    status: 'core',
    icon: Brain,
    components: ['main.py', 'logic_engine.py', 'hallucination_proof.py'],
  },
  {
    name: 'ALFA CORE — Architektura 6 Filarów',
    description: 'Modularna architektura: CORE (logika), BRIDGE (komunikacja), SEAT (sesje), VOICE (interfejs głosowy), GUARD (bezpieczeństwo), BRAIN (analiza AI).',
    url: 'https://github.com/Karen86Tonoyan/ALFA__CORE',
    tech: ['Python', 'FastAPI', 'CLI', 'Architecture'],
    status: 'core',
    icon: Cpu,
  },
  {
    name: 'CERBER Security Engine',
    description: 'Centralny system bezpieczeństwa ALFA. Monitoruje działanie, analizuje zachowania, rejestruje próby manipulacji. Kotlin — Łasuch v1.2, prompt injection scoring.',
    tech: ['Kotlin', 'Python', 'Security'],
    status: 'core',
    icon: Shield,
  },
  {
    name: 'TRINITY System',
    description: 'Karen (КОРОЛЬ) + Claude (КОРОЛЕВА) + GPT (ГЕНЕРАЛ) — trzy AI pracujące jako zespół w orkiestracji.',
    tech: ['Multi-AI', 'Orchestration', 'Architecture'],
    status: 'core',
    icon: Brain,
  },
  // WEB
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
  // TOOLS
  {
    name: 'Audyt Strony — Automatyczna Analiza WWW',
    description: 'Automatyczna analiza stron pod kątem bezpieczeństwa, wydajności i SEO. Raporty PDF. Interfejs CLI + agent AI.',
    url: 'https://github.com/Karen86Tonoyan/Audytstrony',
    tech: ['Python', 'CLI', 'PDF Generator'],
    status: 'tools',
    icon: Search,
    components: ['agent/cli.py', 'agent/core/agent.py', 'agent/modules/web_audit.py', 'pdf_generator.py'],
  },
  {
    name: 'Human and Machine AI',
    description: 'Integracja człowieka i AI w procesach automatyzacji. Pluginy: generowanie kodu, automatyzacja Git, diagnostyka systemu, generator PDF.',
    url: 'https://github.com/Karen86Tonoyan/Human-and-Machine-AI',
    tech: ['Python', 'JavaScript', 'PowerShell'],
    status: 'tools',
    icon: Zap,
    components: ['ai_models.py', 'git_auto.py', 'code_generator.py', 'SystemDoctor', 'pdf_generator.py'],
  },
  {
    name: 'Automatyzacja Kimi Claw',
    description: 'System sterowania AI w przeglądarce. Symulacja działań użytkownika, analiza ekranu, SoundBox (sterowanie głosowe), warstwa Cloud Skin.',
    url: 'https://github.com/Karen86Tonoyan/kimi-claw-automation',
    tech: ['Python', 'Automation', 'SoundBox'],
    status: 'tools',
    icon: Zap,
  },
  {
    name: 'SoundBox + Cerber — Bezpieczeństwo Sprzętowe',
    description: 'Izolowane środowisko pracy AI z siecią Tailscale. Monitoring sprzętu (CPU/GPU/RAM), audyt działania AI, kontrola połączeń sieciowych.',
    tech: ['Python', 'Tailscale', 'Hardware Security'],
    status: 'tools',
    icon: Volume2,
  },
  // MOBILE
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
      <p className="text-muted-foreground mb-10">Pełna mapa aktywnych projektów, systemów i platform — z karentonoyan.pl i GitHub.</p>

      {(['active', 'core', 'tools', 'web', 'mobile'] as ProjectStatus[]).map(status => {
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
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.tech.map(t => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">{t}</span>
                      ))}
                    </div>
                    {p.components && (
                      <div className="mb-3">
                        <p className="text-xs text-muted-foreground mb-1 font-medium">Komponenty:</p>
                        <div className="flex flex-wrap gap-1">
                          {p.components.map(c => (
                            <span key={c} className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-mono">{c}</span>
                          ))}
                        </div>
                      </div>
                    )}
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

      {/* ALFA Architecture */}
      <section className="mt-12 mb-10">
        <h2 className="text-xl font-bold text-foreground mb-4">ALFA — Architektura systemów AI</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Spójna architektura łącząca modele AI, narzędzia automatyzacji i systemy bezpieczeństwa w jeden ekosystem.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'ALFA Bridge', desc: 'Zarządzanie komunikacją między użytkownikiem a systemem. Tokeny dostępu, autoryzacja, bezpieczne dane zastępcze.' },
            { title: 'Cerber', desc: 'Centralny system bezpieczeństwa. Monitoring, analiza zachowań, rejestracja manipulacji, generowanie mechanizmów obronnych.' },
            { title: 'Guardian', desc: 'Nadzór aktywności systemu. Identyfikacja nietypowych zachowań, analiza ruchu, procedury bezpieczeństwa.' },
            { title: 'Łasuch (Lasuch)', desc: 'Przechwytywanie zagrożeń odwrotną logiką — przyciąga manipulacje do kontrolowanego środowiska w celu analizy.' },
            { title: 'Collective Mind', desc: 'Wspólne repozytorium wiedzy o atakach. Systemy AI dzielą się informacjami o zagrożeniach — jak globalny system immunologiczny.' },
            { title: 'SoundBox', desc: 'Izolacja sprzętowa AI z Tailscale. Monitoring CPU/GPU, audyt działań, sterowanie głosowe.' },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default Projects;
