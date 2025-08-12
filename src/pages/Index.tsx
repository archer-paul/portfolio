import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectCard from "@/components/ProjectCard";
import SocialLinks from "@/components/SocialLinks";
import { useI18n } from "@/context/I18nContext";
import type { Lang } from "@/context/I18nContext";

const Index = () => {
  const { lang, setLang, t } = useI18n();
  const projectDescriptions: Record<Lang, { tradingBot: string; careSync: string; gemcare: string; quantum: string }> = {
    en: {
      tradingBot: "Algorithmic trading system using deep reinforcement learning with advanced technical indicators (MACD, RSI, Bollinger Bands), achieving 18% annual returns with full backtesting and risk management framework.",
      careSync: "AI-powered triage assistant for emergency departments, integrating voice recognition, symptom extraction, and real-time patient prioritization.",
      gemcare: "AI-powered medical record platform using Gemma 3/MedGemma, with intelligent document processing and ClinicalTrials.gov API integration. Top 10 at Google DeepMind Healthcare Hackathon.",
      quantum: "Quantum optimization algorithms on Pasqal’s cold atoms-based computing for telecom network resource allocation.",
    },
    fr: {
      tradingBot: "Système de trading algorithmique via apprentissage par renforcement profond avec indicateurs techniques avancés (MACD, RSI, Bandes de Bollinger), 18% de rendement annualisé, backtests complets et cadre de gestion des risques.",
      careSync: "Assistant de triage IA pour services d’urgences, intégrant reconnaissance vocale, extraction de symptômes et priorisation des patients en temps réel.",
      gemcare: "Dossier médical intelligent basé sur Gemma 3/MedGemma, traitement documentaire et intégration de l’API ClinicalTrials.gov. Top 10 au Google DeepMind Healthcare Hackathon.",
      quantum: "Algorithmes d’optimisation quantique sur le calcul à atomes froids de Pasqal pour l’allocation des ressources des réseaux télécoms.",
    },
    de: {
      tradingBot: "Algorithmisches Handelssystem mit Deep Reinforcement Learning und fortgeschrittenen Indikatoren (MACD, RSI, Bollinger‑Bänder), 18% Jahresrendite, umfassendes Backtesting und Risikomanagement‑Framework.",
      careSync: "KI‑gestützter Triage‑Assistent für Notaufnahmen, mit Spracherkennung, Symptomerkennung und Echtzeit‑Priorisierung der Patienten.",
      gemcare: "Intelligente Patientenakte mit Gemma 3/MedGemma, Dokumentenverarbeitung und Integration der ClinicalTrials.gov‑API. Top 10 beim Google DeepMind Healthcare Hackathon.",
      quantum: "Quantenoptimierungs‑Algorithmen auf Pasqals Kaltatomen‑Computing für die Ressourcenallokation in Telekom‑Netzen.",
    },
    es: {
      tradingBot: "Sistema de trading algorítmico con aprendizaje por refuerzo profundo e indicadores avanzados (MACD, RSI, Bandas de Bollinger), 18% anualizado, backtesting completo y marco de gestión de riesgos.",
      careSync: "Asistente de triaje con IA para urgencias, con reconocimiento de voz, extracción de síntomas y priorización de pacientes en tiempo real.",
      gemcare: "Plataforma de historia clínica inteligente con Gemma 3/MedGemma, procesamiento documental e integración del API de ClinicalTrials.gov. Top 10 en Google DeepMind Healthcare Hackathon.",
      quantum: "Algoritmos de optimización cuántica en computación de átomos fríos de Pasqal para la asignación de recursos de redes de telecomunicaciones.",
    },
  };
  const d = projectDescriptions[lang];

  const linkifyForbes = (text: string) => {
    const parts = text.split(/(Forbes(?:[\u2011\u2010\u2013\u2014\-]Interview)?)/);
    return parts.map((part, i) => {
      if (/^Forbes(?:[\u2011\u2010\u2013\u2014\-]Interview)?$/.test(part)) {
        return (
          <a
            key={i}
            href="https://www.forbes.fr/mediasfrance/forum-telecom-paris/"
            target="_blank"
            rel="noopener noreferrer"
            className="story-link-static"
          >
            {part}
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  const renderDashLine = (text: string) => {
    const match = text.match(/^(.+?)\s([—–-])\s(.+)$/);
    if (!match) return linkifyForbes(text);
    const [, prefix, sep, rest] = match as RegExpMatchArray;
    return (
      <>
        <strong>{prefix}</strong> {" "}{sep} {" "}{linkifyForbes(rest)}
      </>
    );
  };

  return (
    <div className="min-h-screen relative">
      <header className="border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold story-link" aria-label="Aller au début">Paul Archer</a>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#about" className="story-link">{t("nav.about")}</a>
              <a href="#projects" className="story-link">{t("nav.projects")}</a>
              <a href="#experience" className="story-link">{t("nav.experience")}</a>
              <a href="#skills" className="story-link">{t("nav.skills")}</a>
              <a href="#leadership" className="story-link">{t("nav.leadership")}</a>
            </nav>
            <div className="flex items-center gap-2" aria-label="Language selector">
              {[
                { code: "en", label: "English", flag: "/flags/gb.svg" },
                { code: "fr", label: "Français", flag: "/flags/fr.svg" },
                { code: "de", label: "Deutsch", flag: "/flags/de.svg" },
                { code: "es", label: "Español", flag: "/flags/es.svg" },
              ].map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code as Lang)}
                  className={`h-6 w-8 rounded-sm overflow-hidden border transition ${lang === (l.code as Lang) ? "ring-2 ring-primary" : "opacity-80 hover:opacity-100"}`}
                  aria-label={l.label}
                >
                  <img src={l.flag} alt={`${l.label} flag`} className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main>
        <Hero />

        <section id="about" className="container py-16 md:py-20">
          <header className="mb-6">
            <h2 className="text-2xl font-semibold">{t("sections.about.title")}</h2>
          </header>
          <p className="text-muted-foreground max-w-3xl animate-fade-in">
            {t("sections.about.body")}
          </p>
        </section>

        <section id="projects" className="bg-secondary/40 py-16 md:py-20">
          <div className="container">
            <header className="mb-8">
              <h2 className="text-2xl font-semibold">{t("nav.projects")}</h2>
            </header>
            <FeaturedProject />
              <div className="grid gap-6 md:grid-cols-2">
                <ProjectCard
                  title="Trading Bot"
                  description={d.tradingBot}
                  href="https://github.com/archer-paul/trading-bot"
                />
                <ProjectCard
                  title="CareSync AI Triage"
                  description={d.careSync}
                  href="https://github.com/archer-paul/CareSync-AI-Triage"
                  appUrl="https://medical-triage-ai.lovable.app/"
                  videoId="AN8mFCh62HA"
                />
                <ProjectCard
                  title="GEMCARE"
                  description={d.gemcare}
                  href="https://github.com/archer-paul/gemcare-smart-medical-record"
                />
                <ProjectCard
                  title="Quantum Network Optimizer"
                  description={d.quantum}
                  href="https://github.com/archer-paul/quantum-network-optimizer"
                />
              </div>
          </div>
        </section>

        <section id="experience" className="container py-16 md:py-20">
          <header className="mb-6">
            <h2 className="text-2xl font-semibold">{t("sections.experience.title")}</h2>
          </header>
          <ul className="space-y-4 text-muted-foreground">
            <li>{renderDashLine(t("experience.vibematch"))}</li>
            <li>{renderDashLine(t("experience.mondor"))}</li>
            <li>{renderDashLine(t("experience.sopra"))}</li>
            <li>{renderDashLine(t("experience.farm"))}</li>
          </ul>
        </section>

        <section id="skills" className="bg-secondary/40 py-16 md:py-20">
          <div className="container">
            <header className="mb-8">
              <h2 className="text-2xl font-semibold">{t("sections.skills.title")}</h2>
            </header>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-semibold mb-2">{t("sections.skills.finance")}</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>{t("sections.skills.items.finance.derivativesPricing")}</li>
                  <li>{t("sections.skills.items.finance.portfolioOptimization")}</li>
                  <li>{t("sections.skills.items.finance.riskManagement")}</li>
                  <li>{t("sections.skills.items.finance.algorithmicTrading")}</li>
                  <li>{t("sections.skills.items.finance.monteCarlo")}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t("sections.skills.programming")}</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>{t("sections.skills.items.programming.python")}</li>
                  <li>{t("sections.skills.items.programming.cpp_r_matlab_sql_vba")}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t("sections.skills.languages")}</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>{t("sections.skills.items.languages.french")}</li>
                  <li>{t("sections.skills.items.languages.english")}</li>
                  <li>{t("sections.skills.items.languages.german")}</li>
                  <li>{t("sections.skills.items.languages.spanish")}</li>
                  <li>{t("sections.skills.items.languages.danish")}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="leadership" className="container py-16 md:py-20">
          <header className="mb-6">
            <h2 className="text-2xl font-semibold">{t("sections.leadership.title")}</h2>
          </header>
          <ul className="space-y-4 text-muted-foreground">
            <li>{renderDashLine(t("leadership.surf"))}</li>
            <li>{renderDashLine(t("leadership.forum"))}</li>
            <li>{renderDashLine(t("leadership.rugby"))}</li>
          </ul>
        </section>
      </main>

      <footer className="border-t py-10">
        <div className="container flex items-center justify-between flex-col md:flex-row gap-4">
          <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
          <SocialLinks email="paul.archer25@imperial.ac.uk" github="https://github.com/archer-paul" linkedin="https://www.linkedin.com/in/p-archer/" />
        </div>
      </footer>
    </div>
  );
};

export default Index;
