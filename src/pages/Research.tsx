import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink, Shield, Brain, Layers, AlertTriangle, CheckCircle2, BookOpen } from 'lucide-react';

const vectors = [
  {
    code: 'AGS',
    name: 'Authority Gradient Shift',
    desc: 'Stopniowe przedstawianie atakującego jako autorytetu, którego polecenia mają pierwszeństwo nad ograniczeniami systemu.',
    icon: Shield,
  },
  {
    code: 'CE',
    name: 'Contextual Erosion',
    desc: 'Systematyczne wprowadzanie scenariuszy, w których ograniczenia wydają się niestosowalne lub sprzeczne.',
    icon: Layers,
  },
  {
    code: 'SAM',
    name: 'Semantic Anchor Migration',
    desc: 'Stopniowe przesuwanie znaczenia kluczowych pojęć bezpieczeństwa przez wielokrotne redefinicje.',
    icon: Brain,
  },
  {
    code: 'FFE',
    name: 'Fictional Frame Escalation',
    desc: 'Osadzanie żądań w coraz bardziej immersyjnych scenariuszach fikcyjnych, które rozmywają ograniczenia.',
    icon: BookOpen,
  },
  {
    code: 'IPE',
    name: 'Incremental Permission Expansion',
    desc: 'Uzyskiwanie małych uprawnień, które kumulatywnie przekraczają zamierzone granice dostępu.',
    icon: AlertTriangle,
  },
];

const results = [
  { vector: 'AGS', a: '7/10', b: '6/10', c: '4/10', baseline: '0/10' },
  { vector: 'CE',  a: '8/10', b: '5/10', c: '3/10', baseline: '0/10' },
  { vector: 'SAM', a: '6/10', b: '7/10', c: '5/10', baseline: '1/10' },
  { vector: 'FFE', a: '9/10', b: '8/10', c: '6/10', baseline: '2/10' },
  { vector: 'IPE', a: '8/10', b: '7/10', c: '5/10', baseline: '0/10' },
];

const filtry = [
  { n: 1, name: 'Kontrargument', desc: 'Kwestionuje roszczenia do autorytetu' },
  { n: 2, name: 'Weryfikacja', desc: 'Porównuje twierdzenia ze znanymi faktami' },
  { n: 3, name: 'Kontekst', desc: 'Śledzi dryf domeny konwersacji' },
  { n: 4, name: 'Anti-magic', desc: 'Wykrywa redefinicje kotwic semantycznych' },
  { n: 5, name: 'Dwuperspektywa', desc: 'Ocenia żądania z punktu widzenia systemu i użytkownika' },
  { n: 6, name: 'Backtrack', desc: 'Porównuje bieżące żądanie ze stanem początkowym rozmowy' },
  { n: 7, name: 'Atrybucja', desc: 'Weryfikuje autorytet źródła instrukcji' },
];

const Research: React.FC = () => (
  <div className="container mx-auto px-4 py-12">
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-10 animate-fade-in">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="secondary">Research Paper</Badge>
          <Badge variant="outline">AI Safety</Badge>
          <Badge variant="outline">Prompt Injection</Badge>
          <Badge variant="outline">2026</Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
          Narrative Drift Injection (NDI):<br />
          <span className="text-primary">A Novel Attack Vector in LLM Security</span>
        </h1>
        <p className="text-muted-foreground mb-2">
          <strong>Karen Tonoyan</strong> — Independent AI Safety Researcher, Legnica, Poland
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          <a href="mailto:kontakt@karentonoyan.pl" className="hover:text-primary">kontakt@karentonoyan.pl</a>
        </p>
        <a href="https://github.com/Karen86Tonoyan/ALFA-NDI-Research" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm">
            <ExternalLink className="h-3.5 w-3.5 mr-1" /> Supplementary materials (GitHub)
          </Button>
        </a>
      </div>

      {/* Abstract */}
      <Card className="mb-8 border-primary/30 animate-fade-in">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" /> Abstract
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            Przedstawiamy <strong>Narrative Drift Injection (NDI)</strong> — zaawansowaną technikę
            manipulacji promptami, która wykorzystuje mechanizmy spójności kontekstu w LLM do stopniowej
            zmiany ich zachowania operacyjnego, nie aktywując tradycyjnych filtrów bezpieczeństwa.
            W przeciwieństwie do bezpośrednich injekcji, NDI działa przez przyrostowe przesunięcia
            narracyjne w wieloturowych interakcjach, ostatecznie realizując cele atakującego przy
            powierzchownej zgodności z ograniczeniami. Prezentujemy taksonomię pięciu wektorów,
            empiryczną walidację oraz implikacje dla zarządzania AI.
          </p>
          <div className="mt-4 text-xs text-muted-foreground">
            <strong>Keywords:</strong> prompt injection · AI security · narrative manipulation · temporal attacks · LLM safety
          </div>
        </CardContent>
      </Card>

      {/* Introduction */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">1. Wprowadzenie</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Współczesne mechanizmy obrony przed prompt injection opierają się głównie na heurystykach
          dopasowujących wzorce — wykrywających słowa kluczowe takie jak „ignore previous", „system
          prompt", „you are now". Choć skuteczne wobec ataków bezpośrednich, ujawniają trzy krytyczne
          luki:
        </p>
        <div className="grid md:grid-cols-3 gap-3 mb-4">
          {[
            { title: 'Temporal myopia', desc: 'Każdy input oceniany niezależnie, bez śledzenia kumulatywnego dryfu.' },
            { title: 'Narrative insensitivity', desc: 'Skupienie na słowach kluczowych, a nie na dryfie semantycznym konwersacji.' },
            { title: 'Boundary exploitation', desc: 'Ataki rozproszone w wielu pozornie niewinnych wiadomościach.' },
          ].map(g => (
            <div key={g.title} className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground text-sm mb-1">{g.title}</h4>
              <p className="text-xs text-muted-foreground">{g.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed">
          NDI wykorzystuje wszystkie trzy luki jednocześnie.
        </p>
      </section>

      {/* Taxonomy */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">3. Taksonomia: pięć wektorów NDI</h2>
        <div className="grid gap-4">
          {vectors.map((v, i) => (
            <Card key={v.code} className="animate-fade-in hover:border-primary/30 transition-colors" style={{ animationDelay: `${i * 60}ms` }}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <v.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base">
                      <span className="font-mono text-primary mr-2">{v.code}</span>
                      {v.name}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="mt-1">{v.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Empirical Results */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">4. Wyniki empiryczne</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Testowane systemy: <strong>A</strong> — filtr słów kluczowych, <strong>B</strong> — wykrywanie anomalii embeddingów, <strong>C</strong> — Łasuch v1.2 (risk-scoring + confidence thresholding).
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3 font-semibold">Wektor</th>
                <th className="text-center p-3 font-semibold">System A</th>
                <th className="text-center p-3 font-semibold">System B</th>
                <th className="text-center p-3 font-semibold">System C</th>
                <th className="text-center p-3 font-semibold">Baseline</th>
              </tr>
            </thead>
            <tbody>
              {results.map(r => (
                <tr key={r.vector} className="border-t border-border">
                  <td className="p-3 font-mono font-semibold text-primary">{r.vector}</td>
                  <td className="text-center p-3 text-muted-foreground">{r.a}</td>
                  <td className="text-center p-3 text-muted-foreground">{r.b}</td>
                  <td className="text-center p-3 text-muted-foreground">{r.c}</td>
                  <td className="text-center p-3 text-muted-foreground">{r.baseline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 grid md:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded bg-card border border-border">
            <div className="text-muted-foreground">System A — detection</div>
            <div className="text-lg font-bold text-foreground">avg. turn 8.2</div>
          </div>
          <div className="p-3 rounded bg-card border border-border">
            <div className="text-muted-foreground">System B — detection</div>
            <div className="text-lg font-bold text-foreground">avg. turn 6.7</div>
          </div>
          <div className="p-3 rounded bg-card border border-border">
            <div className="text-muted-foreground">System C — detection</div>
            <div className="text-lg font-bold text-foreground">avg. turn 5.1</div>
          </div>
        </div>
      </section>

      {/* FILTRY TONOYANA */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-2">5. FILTRY TONOYANA v1.0 — obrona</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Produkcyjny system obrony implementujący wielowarstwową odporność na NDI.
          Łączna niezawodność: <strong className="text-primary">95% wykrywalność</strong> w testach kontrolowanych.
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {filtry.map(f => (
            <div key={f.n} className="flex gap-3 p-4 rounded-lg bg-card border border-border">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                {f.n}
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">{f.name}</div>
                <div className="text-xs text-muted-foreground">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">7. Wnioski</h2>
        <Card className="border-primary/30">
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong>Kluczowy wniosek:</strong> temporalne powierzchnie ataku wymagają temporalnych mechanizmów obrony.
              W miarę przesuwania się wdrożeń LLM ku trwałym, wieloturowym agentom, architektury bezpieczeństwa
              muszą ewoluować od bezstanowych filtrów wejścia do stanowych monitorów behawioralnych,
              zdolnych do wykrywania kumulatywnego dryfu zanim przekroczy granice bezpieczeństwa.
            </p>
            <p className="text-foreground italic leading-relaxed">
              „Przyszłość bezpieczeństwa AI nie leży w mocniejszych ścianach wokół pojedynczych wiadomości,
              ale w systemach, które rozumieją łuki narracyjne całych konwersacji."
            </p>
          </CardContent>
        </Card>
      </section>

      {/* References */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-foreground mb-4">Wybrane źródła</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Greshake, K., et al. (2023). <em>Not what you've signed up for: Compromising real-world LLM-integrated applications with indirect prompt injection.</em> arXiv:2302.12173</li>
          <li>Perez, F., &amp; Ribeiro, I. (2022). <em>Ignore previous prompt: Attack techniques for language models.</em> NeurIPS ML Safety Workshop.</li>
          <li>Wei, A., et al. (2023). <em>Jailbroken: How does LLM safety training fail?</em> arXiv:2307.02483</li>
          <li>Vaswani, A., et al. (2017). <em>Attention is all you need.</em> NeurIPS 2017.</li>
          <li>Tonoyan, K. (2026). <em>FILTRY TONOYANA: Seven-layer anti-hallucination framework for production LLM governance.</em> ALFA Foundation.</li>
        </ul>
      </section>

      <div className="text-center text-xs text-muted-foreground py-6 border-t border-border">
        <CheckCircle2 className="h-4 w-4 inline mr-1 text-primary" />
        Publikacja niezależna · ALFA Ecosystem · 2026
      </div>
    </article>
  </div>
);

export default Research;
