import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "en" | "fr" | "de" | "es";

// Minimal key-based translations
const dict = {
  en: {
    nav: { about: "About", projects: "Projects", experience: "Experience", skills: "Skills", leadership: "Leadership" },
    hero: {
      title: "Paul Archer — Portfolio & CV",
      tagline: "MSc Mathematics & Finance @ Imperial College London | Co‑Founder @ VibeMatch",
      quote: "Quantitative finance, AI, and advanced mathematical modeling",
      viewResume: "View Resume",
      resumeTitle: "Resume — Paul Archer",
      openInNewTab: "Open in new tab",
      downloadPdf: "Download PDF"
    },
    projects: {
      multiAsset: {
        title: "Multi-Asset Trading Infrastructure",
        description: "Quantitative trading system combining ML ensemble (XGBoost, LSTM, Transformers) with real-time sentiment analysis (Bloomberg, Reuters, Reddit, Congressional trading). Sharpe 1.34, 13% annual returns, 6.8% max drawdown."
      },
      derivatives: {
        title: "Derivatives Pricing Engine",
        description: "High-performance pricing library implementing Black-Scholes, Heston stochastic volatility, and Merton jump-diffusion models. Sub-millisecond Greeks calculation with automatic differentiation, Monte Carlo simulation with variance reduction."
      }
    },
    sections: {
      about: { title: "About Me", body: "I am a quantitative finance and AI enthusiast with a strong background in stochastic modeling, machine learning, and algorithmic trading. Currently pursuing my MSc in Mathematics and Finance at Imperial College London, I combine technical expertise with entrepreneurial drive as Co‑Founder of VibeMatch." },
      projects: { title: "Projects" },
      experience: { title: "Experience" },
      skills: {
        title: "Skills",
        finance: "Finance",
        programming: "Programming",
        languages: "Languages",
        items: {
          finance: {
            derivativesPricing: "Derivatives Pricing",
            portfolioOptimization: "Portfolio Optimization",
            riskManagement: "Risk Management",
            algorithmicTrading: "Algorithmic Trading",
            monteCarlo: "Monte Carlo Simulation"
          },
          programming: {
            python: "Python (Pandas, Scikit-Learn, PyTorch, QuantLib)",
            cpp_r_matlab_sql_vba: "C++, R, MATLAB, SQL, VBA"
          },
          languages: {
            french: "French (Native)",
            english: "English (C2)",
            german: "German (B2)",
            spanish: "Spanish (A2)",
            danish: "Danish (A1)"
          }
        }
      },
      leadership: { title: "Leadership & Activities" }
    },
    experience: {
      vibematch: "VibeMatch (Co‑Founder) — Built AI‑powered creator‑sponsor matching platform with social media data integration (YouTube, Instagram APIs) and Cerebras inference engine; led early outreach to marketing agencies.",
      mondor: "Henri Mondor Hospital (Data Science Internship) — Developed time series forecasting models, built NLP pipeline, created funding analysis tool.",
      sopra: "Sopra Steria (Quantum Computing Internship) — Implemented cold atom quantum optimization algorithms for telecom network infrastructure.",
      farm: "Hedge's Farm (Seasonal Worker in Sligo, Ireland) — Livestock management and daily animal husbandry tasks, crop harvesting, and maintenance work."
    },
    leadership: {
      surf: "President – Télécom Paris Surf Club — Organized Atlantic coast surf trips (Lacanau, Biarritz), managed logistics and accommodation for 40+ participants, coached beginners and grew club membership.",
      forum: "General Secretary – Forum Télécom Paris — Managed 48‑person team and €300k budget for career fair hosting 1,000+ students and 90 companies, generated €100k profit, featured in Forbes interview.",
      rugby: "Team Captain – Télécom Paris Rugby Team — Led team training and strategy, coordinated inter‑university tournament participation, fostered team cohesion and competitive performance."
    },
    buttons: { visitApp: "Visit App", viewOnGithub: "View on GitHub" },
    footer: { copyright: "© Paul Archer 2025" }
  },
  fr: {
    nav: { about: "À propos", projects: "Projets", experience: "Expérience", skills: "Compétences", leadership: "Leadership" },
    hero: {
      title: "Paul Archer — Portfolio & CV",
      tagline: "MSc Mathematics & Finance @ Imperial College London | Co‑fondateur @ VibeMatch",
      quote: "Finance quantitative, IA et modélisation mathématique avancée",
      viewResume: "Voir le CV",
      resumeTitle: "CV — Paul Archer",
      openInNewTab: "Ouvrir dans un nouvel onglet",
      downloadPdf: "Télécharger le PDF"
    },
    projects: {
      multiAsset: {
        title: "Infrastructure de Trading Multi-Actifs",
        description: "Système de trading quantitatif combinant ensemble ML (XGBoost, LSTM, Transformers) et analyse de sentiment temps réel (Bloomberg, Reuters, Reddit, Congressional trading). Sharpe 1.34, rendements annuels 13%, drawdown max 6.8%."
      },
      derivatives: {
        title: "Moteur de Pricing de Dérivés",
        description: "Bibliothèque haute performance implémentant Black-Scholes, Heston et Merton jump-diffusion. Calcul des Grecs avec différentiation automatique en sub-milliseconde, simulation Monte Carlo avec réduction de variance."
      }
    },
    sections: {
      about: { title: "À propos de moi", body: "Passionné par la finance quantitative et l’IA, avec une solide expérience en modélisation stochastique, apprentissage automatique et trading algorithmique. Actuellement en MSc Mathematics & Finance à Imperial College London, j’allie expertise technique et esprit entrepreneurial en tant que co‑fondateur de VibeMatch." },
      projects: { title: "Projets" },
      experience: { title: "Expérience" },
      skills: {
        title: "Compétences",
        finance: "Finance",
        programming: "Programmation",
        languages: "Langues",
        items: {
          finance: {
            derivativesPricing: "Valorisation des produits dérivés",
            portfolioOptimization: "Optimisation de portefeuille",
            riskManagement: "Gestion des risques",
            algorithmicTrading: "Trading algorithmique",
            monteCarlo: "Simulation de Monte Carlo"
          },
          programming: {
            python: "Python (Pandas, Scikit‑Learn, PyTorch, QuantLib)",
            cpp_r_matlab_sql_vba: "C++, R, MATLAB, SQL, VBA"
          },
          languages: {
            french: "Français (natif)",
            english: "Anglais (C2)",
            german: "Allemand (B2)",
            spanish: "Espagnol (A2)",
            danish: "Danois (A1)"
          }
        }
      },
      leadership: { title: "Leadership & Activités" }
    },
    experience: {
      vibematch: "VibeMatch (Co‑fondateur) — Plateforme de mise en relation créateurs‑sponsors dopée à l’IA, intégrant les données sociales (APIs YouTube, Instagram) et un moteur d’inférence Cerebras ; pilotage de la prospection initiale auprès d’agences marketing.",
      mondor: "Hôpital Henri Mondor (Stage Data Science) — Développement de modèles de prévision de séries temporelles, pipeline NLP, et outil d’analyse de financements.",
      sopra: "Sopra Steria (Stage en calcul quantique) — Implémentation d’algorithmes d’optimisation sur atomes froids pour l’infrastructure télécom.",
      farm: "Hedge’s Farm (Saisonnier à Sligo, Irlande) — Gestion du bétail et soins quotidiens, récolte des cultures, et travaux de maintenance."
    },
    leadership: {
      surf: "Président – Télécom Paris Surf Club — Organisation de surf trips sur la côte Atlantique (Lacanau, Biarritz), logistique et hébergement pour 40+ participants, coaching des débutants et développement du club.",
      forum: "Secrétaire général – Forum Télécom Paris — Management d’une équipe de 48 personnes et d’un budget de 300k€ pour un salon accueillant 1 000+ étudiants et 90 entreprises ; 100k€ de bénéfice ; entretien Forbes.",
      rugby: "Capitaine – Équipe de rugby de Télécom Paris — Entraînement et stratégie, coordination des tournois inter‑universitaires, cohésion et performance d’équipe."
    },
    buttons: { visitApp: "Visiter le site", viewOnGithub: "Voir sur GitHub" },
    footer: { copyright: "© Paul Archer 2025" }
  },
  de: {
    nav: { about: "Über mich", projects: "Projekte", experience: "Erfahrung", skills: "Fähigkeiten", leadership: "Leadership" },
    hero: {
      title: "Paul Archer — Portfolio & CV",
      tagline: "MSc Mathematics & Finance @ Imperial College London | Mitgründer @ VibeMatch",
      quote: "Quantitative Finance, KI und fortgeschrittene mathematische Modellierung",
      viewResume: "Lebenslauf ansehen",
      resumeTitle: "Lebenslauf — Paul Archer",
      openInNewTab: "In neuem Tab öffnen",
      downloadPdf: "PDF herunterladen"
    },
    projects: {
      multiAsset: {
        title: "Multi-Asset-Trading-Infrastruktur",
        description: "Quantitatives Trading-System mit ML-Ensemble (XGBoost, LSTM, Transformers) und Echtzeit-Sentiment-Analyse (Bloomberg, Reuters, Reddit, Congressional Trading). Sharpe 1.34, 13% Jahresrendite, 6.8% max. Drawdown."
      },
      derivatives: {
        title: "Derivate-Pricing-Engine",
        description: "Hochleistungs-Pricing-Bibliothek mit Black-Scholes, Heston stochastischer Volatilität und Merton Jump-Diffusion-Modellen. Sub-Millisekunden Greeks-Berechnung mit automatischer Differentiation, Monte-Carlo-Simulation mit Varianzreduktion."
      }
    },
    sections: {
      about: { title: "Über mich", body: "Ich bin begeistert von Quantitative Finance und KI, mit starkem Hintergrund in stochastischer Modellierung, Machine Learning und algorithmischem Trading. Derzeit im MSc Mathematics & Finance am Imperial College London verbinde ich technisches Know‑how mit Unternehmergeist als Mitgründer von VibeMatch." },
      projects: { title: "Projekte" },
      experience: { title: "Erfahrung" },
      skills: {
        title: "Fähigkeiten",
        finance: "Finanzen",
        programming: "Programmierung",
        languages: "Sprachen",
        items: {
          finance: {
            derivativesPricing: "Bewertung von Derivaten",
            portfolioOptimization: "Portfolio‑Optimierung",
            riskManagement: "Risikomanagement",
            algorithmicTrading: "Algorithmischer Handel",
            monteCarlo: "Monte‑Carlo‑Simulation"
          },
          programming: {
            python: "Python (Pandas, Scikit‑Learn, PyTorch, QuantLib)",
            cpp_r_matlab_sql_vba: "C++, R, MATLAB, SQL, VBA"
          },
          languages: {
            french: "Französisch (Muttersprache)",
            english: "Englisch (C2)",
            german: "Deutsch (B2)",
            spanish: "Spanisch (A2)",
            danish: "Dänisch (A1)"
          }
        }
      },
      leadership: { title: "Leadership & Aktivitäten" }
    },
    experience: {
      vibematch: "VibeMatch (Mitgründer) — KI‑gestützte Plattform zur Vermittlung von Creators und Sponsoren mit Social‑Media‑Daten (YouTube, Instagram APIs) und Cerebras‑Inference; frühe Ansprache von Marketing‑Agenturen.",
      mondor: "Henri‑Mondor‑Krankenhaus (Data‑Science‑Praktikum) — Zeitreihenprognosen, NLP‑Pipeline und Tool zur Finanzierungsanalyse entwickelt.",
      sopra: "Sopra Steria (Quantencomputing‑Praktikum) — Optimierungsalgorithmen auf Kaltatomen für Telekom‑Netzinfrastruktur implementiert.",
      farm: "Hedge’s Farm (Saisonarbeit in Sligo, Irland) — Tierpflege und Viehmanagement, Erntearbeiten sowie Instandhaltungs‑ und Reparaturtätigkeiten."
    },
    leadership: {
      surf: "Präsident – Télécom Paris Surf Club — Organisation von Surf‑Trips an die Atlantikküste (Lacanau, Biarritz), Logistik und Unterkunft für 40+ Teilnehmer, Coaching für Anfänger und Clubwachstum.",
      forum: "Generalsekretär – Forum Télécom Paris — Leitung eines 48‑köpfigen Teams und 300k€ Budgets für eine Karrieremesse mit 1.000+ Studierenden und 90 Unternehmen; 100k€ Gewinn; Forbes‑Interview.",
      rugby: "Teamkapitän – Rugby‑Team von Télécom Paris — Training und Strategie, Koordination interuniversitärer Turniere, Förderung von Teamzusammenhalt und Leistung."
    },
    buttons: { visitApp: "App besuchen", viewOnGithub: "Auf GitHub ansehen" },
    footer: { copyright: "© Paul Archer 2025" }
  },
  es: {
    nav: { about: "Acerca de", projects: "Proyectos", experience: "Experiencia", skills: "Habilidades", leadership: "Liderazgo" },
    hero: {
      title: "Paul Archer — Portfolio & CV",
      tagline: "MSc Mathematics & Finance @ Imperial College London | Cofundador @ VibeMatch",
      quote: "Finanzas cuantitativas, IA y modelización matemática avanzada",
      viewResume: "Ver CV",
      resumeTitle: "CV — Paul Archer",
      openInNewTab: "Abrir en nueva pestaña",
      downloadPdf: "Descargar PDF"
    },
    projects: {
      multiAsset: {
        title: "Infraestructura de Trading Multi-Activos",
        description: "Sistema de trading cuantitativo combinando ensemble ML (XGBoost, LSTM, Transformers) con análisis de sentimiento en tiempo real (Bloomberg, Reuters, Reddit, Congressional trading). Sharpe 1.34, 13% rendimientos anuales, 6.8% drawdown máximo."
      },
      derivatives: {
        title: "Motor de Pricing de Derivados",
        description: "Biblioteca de alto rendimiento implementando Black-Scholes, volatilidad estocástica Heston y modelos Merton jump-diffusion. Cálculo de Griegas sub-milisegundo con diferenciación automática, simulación Monte Carlo con reducción de varianza."
      }
    },
    sections: {
      about: { title: "Acerca de mí", body: "Entusiasta de las finanzas cuantitativas y la IA con sólida base en modelización estocástica, aprendizaje automático y trading algorítmico. Actualmente cursando el MSc en Mathematics & Finance en Imperial College London, combino la experiencia técnica con emprendimiento como cofundador de VibeMatch." },
      projects: { title: "Proyectos" },
      experience: { title: "Experiencia" },
      skills: {
        title: "Habilidades",
        finance: "Finanzas",
        programming: "Programación",
        languages: "Idiomas",
        items: {
          finance: {
            derivativesPricing: "Valoración de derivados",
            portfolioOptimization: "Optimización de carteras",
            riskManagement: "Gestión de riesgos",
            algorithmicTrading: "Trading algorítmico",
            monteCarlo: "Simulación de Monte Carlo"
          },
          programming: {
            python: "Python (Pandas, Scikit‑Learn, PyTorch, QuantLib)",
            cpp_r_matlab_sql_vba: "C++, R, MATLAB, SQL, VBA"
          },
          languages: {
            french: "Francés (nativo)",
            english: "Inglés (C2)",
            german: "Alemán (B2)",
            spanish: "Español (A2)",
            danish: "Danés (A1)"
          }
        }
      },
      leadership: { title: "Liderazgo y actividades" }
    },
    experience: {
      vibematch: "VibeMatch (Cofundador) — Plataforma de emparejamiento creador‑patrocinador impulsada por IA, con integración de datos sociales (APIs de YouTube e Instagram) y motor de inferencia Cerebras; contacto inicial con agencias de marketing.",
      mondor: "Hospital Henri Mondor (Prácticas de Ciencia de Datos) — Desarrollo de modelos de series temporales, pipeline de NLP y herramienta de análisis de financiación.",
      sopra: "Sopra Steria (Prácticas de Computación Cuántica) — Implementación de algoritmos de optimización con átomos fríos para infraestructura de telecomunicaciones.",
      farm: "Hedge’s Farm (Trabajador temporal en Sligo, Irlanda) — Gestión del ganado y cuidados diarios, cosecha de cultivos y trabajos de mantenimiento."
    },
    leadership: {
      surf: "Presidente – Télécom Paris Surf Club — Organización de viajes de surf por la costa atlántica (Lacanau, Biarritz), logística y alojamiento para más de 40 participantes, entrenamiento a principiantes y crecimiento del club.",
      forum: "Secretario General – Forum Télécom Paris — Dirección de un equipo de 48 personas y un presupuesto de 300k€ para una feria con 1.000+ estudiantes y 90 empresas; 100k€ de beneficio; entrevista en Forbes.",
      rugby: "Capitán del equipo – Rugby de Télécom Paris — Liderazgo en entrenamientos y estrategia, coordinación de torneos interuniversitarios, fomento de la cohesión y rendimiento del equipo."
    },
    buttons: { visitApp: "Visitar sitio", viewOnGithub: "Ver en GitHub" },
    footer: { copyright: "© Paul Archer 2025" }
  }
} as const;

type Dict = typeof dict;
// Allow nested dot-notation keys (e.g., "sections.about.title")
type Keys = string;

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: Keys) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored && ["en", "fr", "de", "es"].includes(stored)) {
      setLangState(stored);
      return;
    }
    const nav = navigator.language?.toLowerCase() || "en";
    const map: Record<string, Lang> = { en: "en", "en-us": "en", "en-gb": "en", fr: "fr", "fr-fr": "fr", de: "de", "de-de": "de", es: "es", "es-es": "es", "es-la": "es" };
    const detected = map[nav] || map[nav.split("-")[0]] || "en";
    setLangState(detected);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const t = useMemo(() => {
    const table = dict[lang];
    const getDeep = (obj: any, path: string) =>
      path.split(".").reduce((acc, part) => (acc != null ? acc[part] : undefined), obj);
    return (key: Keys) => {
      return (getDeep(table, key) as string) ?? (getDeep(dict.en, key) as string) ?? key;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
