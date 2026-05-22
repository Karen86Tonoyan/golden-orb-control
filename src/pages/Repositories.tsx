import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchGitHubRepos, fetchGitHubUser, GitHubRepo } from '@/lib/github';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, GitFork, ExternalLink, Search, Users, Trophy, Zap, Target } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const langColor: Record<string, string> = {
  TypeScript: 'bg-blue-500', JavaScript: 'bg-yellow-400', Python: 'bg-green-500',
  HTML: 'bg-orange-500', CSS: 'bg-purple-500', Shell: 'bg-emerald-600',
  Java: 'bg-red-500', Go: 'bg-cyan-500', Rust: 'bg-amber-700',
  'Jupyter Notebook': 'bg-orange-400', Dart: 'bg-sky-500', 'C++': 'bg-pink-500',
  TeX: 'bg-stone-500',
};

type FilterMode = 'all' | 'sources' | 'forks';
type SortMode = 'updated' | 'stars' | 'name';

const Repositories: React.FC = () => {
  const { data: repos, isLoading } = useQuery({ queryKey: ['github-repos'], queryFn: fetchGitHubRepos });
  const { data: user } = useQuery({ queryKey: ['github-user'], queryFn: fetchGitHubUser });
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<FilterMode>('all');
  const [sort, setSort] = useState<SortMode>('updated');

  const stats = useMemo(() => {
    if (!repos) return null;
    const sources = repos.filter(r => !r.fork);
    const forks = repos.filter(r => r.fork);
    const stars = repos.reduce((s, r) => s + r.stargazers_count, 0);
    const langs = new Set(repos.map(r => r.language).filter(Boolean));
    return { total: repos.length, sources: sources.length, forks: forks.length, stars, langs: langs.size };
  }, [repos]);

  const filtered = useMemo(() => {
    if (!repos) return [];
    let list = repos;
    if (filter === 'sources') list = list.filter(r => !r.fork);
    if (filter === 'forks') list = list.filter(r => r.fork);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.description?.toLowerCase().includes(q) ||
        r.language?.toLowerCase().includes(q)
      );
    }
    list = [...list];
    if (sort === 'stars') list.sort((a, b) => b.stargazers_count - a.stargazers_count);
    else if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    else list.sort((a, b) => b.updated_at.localeCompare(a.updated_at));
    return list;
  }, [repos, filter, sort, search]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Repozytoria & Osiągnięcia</h1>
        <p className="text-muted-foreground mb-8">
          Profil GitHub <a className="text-primary hover:underline" href="https://github.com/Karen86Tonoyan" target="_blank" rel="noreferrer">@Karen86Tonoyan</a> — pełna kolekcja projektów, forków i eksperymentów AI.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          {[
            { label: 'Repozytoria', value: stats?.total ?? user?.public_repos ?? '—', icon: GitFork },
            { label: 'Własne', value: stats?.sources ?? '—', icon: Zap },
            { label: 'Forki', value: stats?.forks ?? '—', icon: Target },
            { label: 'Gwiazdki', value: stats?.stars ?? '—', icon: Star },
            { label: 'Obserwujący', value: user?.followers ?? '—', icon: Users },
          ].map(s => (
            <div key={s.label} className="p-4 rounded-lg bg-card border border-border text-center">
              <s.icon className="h-4 w-4 mx-auto mb-2 text-primary" />
              <div className="text-xl font-bold text-foreground">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* GitHub achievements */}
        <Card className="mb-8 border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" /> Osiągnięcia GitHub
            </CardTitle>
            <CardDescription>Odznaki zdobyte na profilu @Karen86Tonoyan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {['Quickdraw', 'YOLO', 'Pull Shark'].map(a => (
                <Badge key={a} variant="secondary" className="text-sm py-1 px-3">🏆 {a}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Szukaj po nazwie, opisie lub języku..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            {(['all', 'sources', 'forks'] as FilterMode[]).map(m => (
              <Button
                key={m}
                variant={filter === m ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(m)}
              >
                {m === 'all' ? 'Wszystkie' : m === 'sources' ? 'Własne' : 'Forki'}
              </Button>
            ))}
          </div>
          <div className="flex gap-2">
            {(['updated', 'stars', 'name'] as SortMode[]).map(m => (
              <Button
                key={m}
                variant={sort === m ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSort(m)}
              >
                {m === 'updated' ? 'Ostatnie' : m === 'stars' ? '★ Gwiazdki' : 'A–Z'}
              </Button>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          Wyświetlono <strong className="text-foreground">{filtered.length}</strong> z {stats?.total ?? 0} repozytoriów
        </p>

        {isLoading ? (
          <div className="grid gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-32 rounded-lg bg-muted animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid gap-3">
            {filtered.map((repo, i) => (
              <RepoCard key={repo.id} repo={repo} index={i} />
            ))}
            {filtered.length === 0 && (
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
    <Card
      className="transition-all hover:shadow-md hover:border-primary/30 animate-fade-in"
      style={{ animationDelay: `${Math.min(index * 20, 400)}ms` }}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-base md:text-lg font-semibold group-hover:text-primary transition-colors flex items-center gap-2 flex-wrap">
              {repo.name}
              {repo.fork && <Badge variant="outline" className="text-xs font-normal">fork</Badge>}
              {repo.archived && <Badge variant="outline" className="text-xs font-normal">archived</Badge>}
            </CardTitle>
            {repo.description && (
              <CardDescription className="mt-1 line-clamp-2">{repo.description}</CardDescription>
            )}
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          {repo.language && (
            <span className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${langColor[repo.language] ?? 'bg-muted-foreground'}`} />
              {repo.language}
            </span>
          )}
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5" /> {repo.stargazers_count}</span>
          )}
          {repo.forks_count > 0 && (
            <span className="flex items-center gap-1"><GitFork className="h-3.5 w-3.5" /> {repo.forks_count}</span>
          )}
          {repo.topics?.slice(0, 4).map(t => (
            <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </a>
);

export default Repositories;
