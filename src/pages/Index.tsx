import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchGitHubUser } from '@/lib/github';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Github, MapPin, Building, ArrowRight } from 'lucide-react';

const Index: React.FC = () => {
  const { data: user } = useQuery({ queryKey: ['github-user'], queryFn: fetchGitHubUser });

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        {user?.avatar_url && (
          <img
            src={user.avatar_url}
            alt="Keren Tonoyan"
            className="w-28 h-28 rounded-full mx-auto mb-6 border-4 border-primary/20 shadow-lg"
          />
        )}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
          Keren Tonoyan
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto">
          {user?.bio || 'Developer & Creator — budowanie nowoczesnych rozwiązań webowych.'}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground mb-8">
          {user?.location && (
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {user.location}</span>
          )}
          {user?.company && (
            <span className="flex items-center gap-1"><Building className="h-4 w-4" /> {user.company}</span>
          )}
          <span className="flex items-center gap-1">
            <Github className="h-4 w-4" /> {user?.public_repos ?? '—'} repozytoriów
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/repositories">
            <Button size="lg">
              Repozytoria <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/cv">
            <Button variant="outline" size="lg">
              CV & Doświadczenie
            </Button>
          </Link>
          <Link to="/manifests">
            <Button variant="outline" size="lg">
              Manifesty
            </Button>
          </Link>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        {[
          { label: 'Repozytoria', value: user?.public_repos ?? '—' },
          { label: 'Followers', value: user?.followers ?? '—' },
          { label: 'Following', value: user?.following ?? '—' },
        ].map(s => (
          <div key={s.label} className="text-center p-4 rounded-lg bg-card border border-border">
            <div className="text-2xl font-bold text-foreground">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
