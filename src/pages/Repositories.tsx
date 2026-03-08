import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchGitHubRepos, GitHubRepo } from '@/lib/github';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, GitFork, ExternalLink, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const langColor: Record<string, string> = {
  TypeScript: 'bg-blue-500', JavaScript: 'bg-yellow-400', Python: 'bg-green-500',
  HTML: 'bg-orange-500', CSS: 'bg-purple-500', Shell: 'bg-emerald-600',
  Java: 'bg-red-500', Go: 'bg-cyan-500', Rust: 'bg-amber-700',
};

const Repositories: React.FC = () => {
  const { data: repos, isLoading } = useQuery({ queryKey: ['github-repos'], queryFn: fetchGitHubRepos });
  const [search, setSearch] = useState('');

  const filtered = repos?.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase()) ||
    r.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Repozytoria</h1>
        <p className="text-muted-foreground mb-8">
          Automatycznie pobrane z GitHub — {repos?.length ?? 0} projektów.
        </p>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Szukaj repozytoriów..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {isLoading ? (
          <div className="grid gap-4">
            {[1,2,3].map(i => (
              <div key={i} className="h-32 rounded-lg bg-muted animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid gap-4">
            {filtered?.map((repo, i) => (
              <RepoCard key={repo.id} repo={repo} index={i} />
            ))}
            {filtered?.length === 0 && (
              <p className="text-center text-muted-foreground py-12">Brak wyników.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const RepoCard: React.FC<{ repo: GitHubRepo; index: number }> = ({ repo, index }) => (
  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block group">
    <Card className="transition-all hover:shadow-md hover:border-primary/30 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
            {repo.name}
          </CardTitle>
          <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        {repo.description && <CardDescription>{repo.description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          {repo.language && (
            <span className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${langColor[repo.language] ?? 'bg-muted-foreground'}`} />
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5" /> {repo.stargazers_count}</span>
          <span className="flex items-center gap-1"><GitFork className="h-3.5 w-3.5" /> {repo.forks_count}</span>
          {repo.topics?.slice(0, 3).map(t => (
            <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </a>
);

export default Repositories;
