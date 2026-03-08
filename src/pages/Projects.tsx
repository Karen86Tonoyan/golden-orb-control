import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ExternalLink, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    name: 'Portfolio Website',
    description: 'Osobista strona internetowa z integracją GitHub API, prezentująca repozytoria i doświadczenie.',
    url: '#',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Projekt w budowie',
    description: 'Więcej projektów wkrótce — sprawdzaj repozytoria na GitHubie.',
    url: 'https://github.com/ktono86tonoyan',
    tech: ['GitHub'],
  },
];

const Projects: React.FC = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Projekty & Strony</h1>
      <p className="text-muted-foreground mb-10">Zrealizowane strony internetowe i projekty.</p>

      <div className="grid gap-6">
        {projects.map((p, i) => (
          <Card key={i} className="animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">{p.name}</CardTitle>
              </div>
              <CardDescription>{p.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap gap-2 flex-1">
                {p.tech.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">{t}</span>
                ))}
              </div>
              {p.url !== '#' && (
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
    </div>
  </div>
);

export default Projects;
