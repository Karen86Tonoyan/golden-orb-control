import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, BookOpen, Shield, Brain, Zap, Globe } from 'lucide-react';

const manifests = [
  {
    icon: Shield,
    title: 'Manifest Bezpieczeństwa AI',
    content: `AI musi być kontrolowane, testowane i odpowiedzialne. ALFA Platform X to moja odpowiedź na rosnące zagrożenia — 100% security score, 30 scenariuszy, deception engine który wyłapuje manipulacje zanim dotrą do użytkownika. Filtry Tonoyana (TDCM) eliminują halucynacje z 95% skutecznością. Bezpieczeństwo nie jest opcją — to fundament.`,
  },
  {
    icon: Brain,
    title: 'Manifest TRINITY',
    content: `Przyszłość AI to nie jeden model — to orkiestra. TRINITY System łączy Karen (КОРОЛЬ), Claude (КОРОЛЕВА) i GPT (ГЕНЕРАЛ) w synergii, gdzie każdy pełni unikalną rolę. Karen decyduje, Claude analizuje, GPT wykonuje. Razem osiągają to, czego żaden model sam nie potrafi.`,
  },
  {
    icon: Zap,
    title: 'Manifest Technologiczny',
    content: `Open-source, przejrzysty kod, dzielenie się wiedzą. 60+ repozytoriów to nie liczba — to filozofia. Każdy projekt jest publiczny, każdy system jest testowalny. NOWA LOGIKA AI: 83/83 testów. Filtry Tonoyana: 7 warstw ochrony. Nie buduję czarnych skrzynek — buduję systemy, które można zweryfikować.`,
  },
  {
    icon: FileText,
    title: 'Manifest Kreatywny',
    content: `Programowanie to sztuka, a AI to nowe płótno. Od ComfyUI przez Stable Diffusion po DaVinci Resolve 4K — łączę technologię z wizją artystyczną. RTX 5070 Ti nie służy tylko do obliczeń — służy do tworzenia.`,
  },
  {
    icon: Globe,
    title: 'Psychologia Zwycięstwa',
    content: `Od mindsetu do milionów — zmień myślenie, zmień życie. Kocham udowadniać, że jednak się da. Od myślenia do pieniędzy. Od chaosu do kontroli. Od porażek do dominacji. Nowa inicjatywa: projekt dla tych, których nie stać na terapię — bezpłatne narzędzie AI do wsparcia psychologicznego.`,
  },
  {
    icon: Shield,
    title: 'Collective Mind — Wizja',
    content: `Systemy AI powinny dzielić się wiedzą o zagrożeniach. Gdy jeden system wykryje nowy typ ataku, zapisuje jego strukturę — sekwencję działań, wzorce promptów, sygnatury kodu, metody obejścia filtrów. Inne systemy uzyskują odporność natychmiast. Jak globalny system immunologiczny. Współpraca zamiast rywalizacji.`,
  },
];

const books = [
  {
    title: 'Antychryst: Kronika Karena Tonoyona',
    description: 'Filozoficzna powieść o relacji człowieka z AI, identyfikacja i etyka w erze sztucznej inteligencji.',
  },
  {
    title: 'Sumienie AI',
    description: 'Esej o moralności systemów AI, odpowiedzialności twórców i przyszłości autonomicznych decyzji.',
  },
  {
    title: 'Fenomen Czarnego Baranka',
    description: 'Analiza outsiderów w świecie technologii — jak niestandardowe myślenie prowadzi do przełomowych innowacji.',
  },
];

const Manifests: React.FC = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Manifesty & Twórczość</h1>
      <p className="text-muted-foreground mb-10">Przekonania, wizje, filozofia i publikacje literackie.</p>

      {/* Manifests */}
      <section className="mb-12">
        <div className="space-y-6">
          {manifests.map((m, i) => (
            <Card key={i} className="animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <m.icon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{m.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{m.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Books */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Publikacje literackie</h2>
        </div>
        <div className="space-y-4">
          {books.map((b, i) => (
            <Card key={i} className="animate-fade-in" style={{ animationDelay: `${(manifests.length + i) * 100}ms` }}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{b.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{b.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* GPT Link */}
      <div className="mt-10 p-5 rounded-lg bg-card border border-border text-center">
        <p className="text-sm text-muted-foreground mb-2">Bezpłatne narzędzie AI do wsparcia psychologicznego:</p>
        <a
          href="https://chatgpt.com/g/g-69ac5a048c14819181a81781d4169c0c-psychologia-zwyciestwa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-medium hover:underline"
        >
          Psychologia Zwycięstwa — ChatGPT →
        </a>
      </div>
    </div>
  </div>
);

export default Manifests;
