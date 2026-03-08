import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="border-t border-border py-8 mt-16">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Keren Tonoyan. Wszelkie prawa zastrzeżone.</p>
      <a
        href="https://github.com/ktono86tonoyan"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-foreground transition-colors"
      >
        <Github className="h-4 w-4" />
        GitHub
      </a>
    </div>
  </footer>
);

export default Footer;
