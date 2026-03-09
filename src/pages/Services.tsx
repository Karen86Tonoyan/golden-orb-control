import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Cpu, Zap, Search, Shield, Code } from 'lucide-react';

const services = [
  {
    category: 'Książki i eBooki',
    icon: BookOpen,
    items: [
      {
        name: 'Publikacje',
        description: 'Publikacje dotyczące psychologii, rozwoju osobistego, relacji oraz pracy z nowymi technologiami. Materiały oparte na doświadczeniach, analizie zachowań oraz praktycznych metodach pracy nad sobą.',
        price: '50 zł za książkę lub eBook',
      },
    ],
  },
  {
    category: 'Oprogramowanie i Systemy AI',
    icon: Cpu,
    items: [
      {
        name: 'Ollama Offline Agent',
        description: 'Lokalny agent AI działający bez chmury. Uruchamianie modeli AI bezpośrednio na komputerze — prywatność danych, brak kosztów tokenów. Lokalne modele AI, automatyzacja zadań, integracja z narzędziami programistycznymi, obsługa wielu modeli językowych, pełna kontrola nad danymi.',
        price: 'Subskrypcja: 200 zł/mies. · Licencja Lifetime: 3000 zł',
      },
      {
        name: 'ALFA Studio Offline',
        description: 'Środowisko do pracy z modelami AI, tworzenia treści, renderowania materiałów oraz automatyzacji procesów kreatywnych. System lokalny lub hybrydowy. Generowanie treści i obrazów, automatyzacja produkcji, narzędzia dla twórców i influencerów.',
        price: 'Licencja: 1000 zł · Subskrypcja: 100 zł/mies.',
      },
    ],
  },
  {
    category: 'Automatyzacja AI',
    icon: Zap,
    items: [
      {
        name: 'Systemy automatyzacji na zamówienie',
        description: 'Tworzenie systemów automatyzacji opartych na AI, dopasowanych do indywidualnych potrzeb. Automatyzacja pracy w przeglądarce, zarządzanie zadaniami, obsługa narzędzi AI, automatyzacja procesów biznesowych.',
        price: 'od 200 zł do 3000 zł (zależnie od skomplikowania)',
      },
    ],
  },
  {
    category: 'Audyty',
    icon: Search,
    items: [
      {
        name: 'Audyt Strony Internetowej',
        description: 'Podstawowy audyt techniczny strony — analiza struktury, wydajności oraz elementów SEO.',
        price: 'Darmowy',
      },
      {
        name: 'Audyt Bezpieczeństwa',
        description: 'Analiza bezpieczeństwa strony lub systemu informatycznego: konfiguracja serwera, nagłówki bezpieczeństwa, potencjalne podatności, analiza struktury systemu.',
        price: 'od 100 zł do 300 zł',
      },
    ],
  },
  {
    category: 'Programowanie',
    icon: Code,
    items: [
      {
        name: 'Tworzenie Oprogramowania dla Firm',
        description: 'Aplikacje webowe, aplikacje Android, systemy automatyzacji, integracje AI, narzędzia biznesowe — dopasowane do potrzeb.',
        price: 'od 1000 zł do 3000 zł',
      },
    ],
  },
];

const Services: React.FC = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Usługi & Sklep</h1>
      <p className="text-muted-foreground mb-10">Oprogramowanie, automatyzacja, audyty i publikacje.</p>

      <div className="space-y-10">
        {services.map((section, si) => (
          <section key={si}>
            <div className="flex items-center gap-2 mb-4">
              <section.icon className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">{section.category}</h2>
            </div>
            <div className="space-y-4">
              {section.items.map((item, ii) => (
                <Card key={ii} className="animate-fade-in" style={{ animationDelay: `${(si * 3 + ii) * 60}ms` }}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <Badge variant="secondary" className="whitespace-nowrap text-xs">{item.price}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-12 p-6 rounded-lg bg-card border border-border text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">Zainteresowany?</h3>
        <p className="text-sm text-muted-foreground mb-3">Skontaktuj się przez stronę karentonoyan.pl lub bezpośrednio na GitHub.</p>
        <div className="flex justify-center gap-3">
          <a href="https://karentonoyan.pl" target="_blank" rel="noopener noreferrer">
            <Badge variant="default" className="cursor-pointer text-sm px-4 py-2">karentonoyan.pl</Badge>
          </a>
          <a href="https://github.com/Karen86Tonoyan" target="_blank" rel="noopener noreferrer">
            <Badge variant="secondary" className="cursor-pointer text-sm px-4 py-2">GitHub</Badge>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
