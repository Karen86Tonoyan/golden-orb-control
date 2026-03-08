import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Code, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'Freelance / Projekty własne',
    period: '2022 — Obecnie',
    description: 'Budowanie aplikacji webowych i mobilnych, automatyzacja procesów, projekty open-source.',
  },
];

const education = [
  {
    title: 'Informatyka',
    institution: 'Uczelnia Techniczna',
    period: '2019 — 2023',
  },
];

const skills = [
  'React', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS',
  'Git', 'Docker', 'PostgreSQL', 'REST API', 'CI/CD',
];

const CV: React.FC = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">CV & Doświadczenie</h1>
      <p className="text-muted-foreground mb-10">Profesjonalny profil i umiejętności.</p>

      {/* Experience */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Doświadczenie</h2>
        </div>
        <div className="space-y-4">
          {experience.map((e, i) => (
            <Card key={i} className="animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{e.role}</CardTitle>
                <p className="text-sm text-muted-foreground">{e.company} · {e.period}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{e.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Edukacja</h2>
        </div>
        <div className="space-y-4">
          {education.map((e, i) => (
            <Card key={i} className="animate-fade-in">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{e.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{e.institution} · {e.period}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Code className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Umiejętności</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map(s => (
            <Badge key={s} variant="secondary" className="text-sm px-3 py-1">{s}</Badge>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default CV;
