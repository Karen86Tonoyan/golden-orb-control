const GITHUB_USERNAME = 'ktono86tonoyan';
const API_BASE = 'https://api.github.com';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  created_at: string;
  fork: boolean;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  blog: string | null;
  company: string | null;
}

export async function fetchGitHubUser(): Promise<GitHubUser> {
  const res = await fetch(`${API_BASE}/users/${GITHUB_USERNAME}`);
  if (!res.ok) throw new Error('Failed to fetch GitHub user');
  return res.json();
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(`${API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
  if (!res.ok) throw new Error('Failed to fetch GitHub repos');
  const repos: GitHubRepo[] = await res.json();
  return repos.filter(r => !r.fork);
}
