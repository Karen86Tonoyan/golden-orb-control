import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

const manifests = [
  {
    title: 'Manifest technologiczny',
    content: `Wierzę w open-source, przejrzysty kod i dzielenie się wiedzą. 
Technologia powinna służyć ludziom — nie odwrotnie. Każdy projekt tworzę z myślą o użytkowniku końcowym, dążąc do prostoty i elegancji.`,
  },
  {
    title: 'Manifest kreatywny',
    content: `Programowanie to sztuka rozwiązywania problemów. Lubię eksperymentować z nowymi narzędziami, łączyć design z funkcjonalnością i budować rzeczy, które mają znaczenie.`,
  },
  {
    title: 'Manifest osobisty',
    content: `Ciągły rozwój, pokora i ciekawość świata to moje fundamenty. Każdy dzień to szansa na naukę czegoś nowego i podzielenie się tym z innymi.`,
  },
];

const Manifests: React.FC = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Manifesty</h1>
      <p className="text-muted-foreground mb-10">Moje przekonania, wartości i wizja.</p>

      <div className="space-y-6">
        {manifests.map((m, i) => (
          <Card key={i} className="animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">{m.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{m.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

export default Manifests;
