import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "en" | "fr" | "de" | "es";

// Minimal key-based translations synchronized with LaTeX CV
const dict = {
  en: {
    nav: { about: "About", projects: "Projects", experience: "Experience", skills: "Skills", leadership: "Leadership" },
    hero: {
      title: "Paul Archer",
      tagline: "MSc Mathematics & Finance @ Imperial College London | Incoming Quant Intern @ BAM",
      quote: "Quantitative Research, Machine Learning & Quantum Computing",
      viewResume: "View Resume",
      resumeTitle: "Resume — Paul Archer",
      openInNewTab: "Open in new tab",
      downloadPdf: "Download PDF"
    },
    projects: {
      multiAsset: {
        title: "Multi-Strategy Alpha Engine",
        description: "Systematic equity strategy using Bayesian Model Averaging (Transformer/LSTM/XGBoost) and NLP/NER pipeline on Bloomberg/Reddit data. Sharpe 1.42."
      },
      jpmorgan: {
        title: "JP Morgan Data for Good (1st Place)",
        description: "Geospatial analytics platform for UK school expansion. Applied K-means/DBSCAN clustering on government deprivation data."
      }
    },
    sections: {
      about: { 
        title: "About Me", 
        body: "I am an incoming Quantitative Research Intern at Balyasny Asset Management (Summer 2026) within a L/S Equity pod (Aerospace & Defense). Currently pursuing an MSc in Mathematics and Finance at Imperial College London and an Engineering degree at Télécom Paris, I am passionate about Machine Learning, Finance, and Quantum Computing. I also co-founded vibematch.tech, an AI platform connecting creators with sponsors." 
      },
      projects: { title: "Projects" },
      experience: { title: "Experience" },
      skills: {
        title: "Skills",
        finance: "Quantitative Methods & Risk",
        programming: "Programming",
        languages: "Languages",
        items: {
          finance: {
            derivativesPricing: "Monte Carlo, Time Series (ARIMA, GARCH, VAR)",
            portfolioOptimization: "PCA, Cointegration, Kalman Filtering",
            riskManagement: "VaR, Expected Shortfall, Greeks",
            algorithmicTrading: "Black-Scholes, Heston, Hull-White",
            monteCarlo: "Cox Proportional Hazards"
          },
          programming: {
            python: "Python (NumPy, Pandas, Scikit-Learn, PyTorch, QuantLib)",
            cpp_r_matlab_sql_vba: "C++, R, SQL, Java, Excel VBA"
          },
          languages: {
            french: "French (Native)",
            english: "English (C2)",
            german: "German (B2)",
            spanish: "Spanish (Conversational)",
            danish: "Danish (Basics)"
          }
        }
      },
      leadership: { title: "Leadership & Activities" }
    },
    experience: {
      balyasny: "Balyasny Asset Management — Incoming Quantitative Research Intern (Summer 2026, London)",
      mondor: "Henri Mondor Hospital — Data Science Research Intern (Summer 2025, France)",
      vibematch: "VibeMatch (AI Startup) — Co-Founder & CEO (2024-2025)",
      sopra: "Sopra Steria — Quantum Computing Intern (Summer 2024, France)"
    },
    leadership: {
      surf: "President – Télécom Paris Surf Club — Organized Atlantic coast surf trips (Lacanau, Biarritz), managed logistics and accommodation for 40+ participants.",
      forum: "General Secretary – Forum Télécom Paris — Managed €300K budget and 48-member team for career fair; featured in Forbes Interview.",
      rugby: "Team Captain – Télécom Paris Rugby Team — Led team training, strategy, and coordinated inter-university tournaments."
    },
    buttons: { visitApp: "Visit App", viewOnGithub: "View on GitHub" },
    footer: { copyright: "© Paul Archer 2025" }
  },
  fr: {
    nav: { about: "À propos", projects: "Projets", experience: "Expérience", skills: "Compétences", leadership: "Leadership" },
    hero: {
      title: "Paul Archer",
      tagline: "MSc Mathematics & Finance @ Imperial College London | Futur Stagiaire Quant @ BAM",
      quote: "Recherche Quantitative, Machine Learning & Calcul Quantique",
      viewResume: "Voir le CV",
      resumeTitle: "CV — Paul Archer",
      openInNewTab: "Ouvrir dans un nouvel onglet",
      downloadPdf: "Télécharger le PDF"
    },
    projects: {
      multiAsset: {
        title: "Multi-Strategy Alpha Engine",
        description: "Stratégie actions systématique via Bayesian Model Averaging (Transformer/LSTM/XGBoost) et pipeline NLP sur Bloomberg/Reddit. Sharpe 1.42."
      },
      jpmorgan: {
        title: "JP Morgan Data for Good (1er Prix)",
        description: "Plateforme d'analyse géospatiale pour l'expansion scolaire au Royaume-Uni via clustering K-means/DBSCAN."
      }
    },
    sections: {
      about: { 
        title: "À propos", 
        body: "Je rejoindrai Balyasny Asset Management en tant que stagiaire en Recherche Quantitative (Été 2026) au sein d'un pod L/S Equity (Aerospace & Defense). Actuellement en MSc Mathematics and Finance à Imperial College London et élève-ingénieur à Télécom Paris, je suis passionné par le Machine Learning, la Finance et le Calcul Quantique. J'ai également co-fondé vibematch.tech, une plateforme IA reliant créateurs et sponsors." 
      },
      projects: { title: "Projets" },
      experience: { title: "Expérience" },
      skills: {
        title: "Compétences",
        finance: "Méthodes Quantitatives & Risque",
        programming: "Programmation",
        languages: "Langues",
        items: {
          finance: {
            derivativesPricing: "Monte Carlo, Séries Temporelles (ARIMA, GARCH, VAR)",
            portfolioOptimization: "PCA, Cointégration, Filtre de Kalman",
            riskManagement: "VaR, Expected Shortfall, Grecs",
            algorithmicTrading: "Black-Scholes, Heston, Hull-White",
            monteCarlo: "Cox Proportional Hazards"
          },
          programming: {
            python: "Python (NumPy, Pandas, Scikit-Learn, PyTorch, QuantLib)",
            cpp_r_matlab_sql_vba: "C++, R, SQL, Java, Excel VBA"
          },
          languages: {
            french: "Français (Natif)",
            english: "Anglais (C2)",
            german: "Allemand (B2)",
            spanish: "Espagnol (Courant)",
            danish: "Danois (Bases)"
          }
        }
      },
      leadership: { title: "Leadership & Activités" }
    },
    experience: {
      balyasny: "Balyasny Asset Management — Stagiaire en Recherche Quantitative (Été 2026, Londres)",
      mondor: "Hôpital Henri Mondor — Stagiaire Recherche Data Science (Été 2025, France)",
      vibematch: "VibeMatch (Startup IA) — Co-fondateur & CEO (2024-2025)",
      sopra: "Sopra Steria — Stagiaire Calcul Quantique (Été 2024, France)"
    },
    leadership: {
      surf: "Président – Télécom Paris Surf Club — Organisation de surf trips (Lacanau, Biarritz), gestion logistique pour 40+ participants.",
      forum: "Secrétaire Général – Forum Télécom Paris — Gestion d'un budget de 300k€ et 48 membres ; cité dans Forbes Interview.",
      rugby: "Capitaine – Équipe de Rugby Télécom Paris — Direction des entraînements, stratégie et tournois inter-universitaires."
    },
    buttons: { visitApp: "Visiter", viewOnGithub: "Voir sur GitHub" },
    footer: { copyright: "© Paul Archer 2025" }
  },
  de: {
    nav: { about: "Über mich", projects: "Projekte", experience: "Erfahrung", skills: "Fähigkeiten", leadership: "Leadership" },
    hero: {
      title: "Paul Archer",
      tagline: "MSc Mathematics & Finance @ Imperial College London | Zukünftiger Quant Intern @ BAM",
      quote: "Quantitative Forschung, Machine Learning & Quantencomputing",
      viewResume: "Lebenslauf ansehen",
      resumeTitle: "Lebenslauf — Paul Archer",
      openInNewTab: "In neuem Tab öffnen",
      downloadPdf: "PDF herunterladen"
    },
    projects: {
      multiAsset: {
        title: "Multi-Strategy Alpha Engine",
        description: "Systematische Aktienstrategie mittels Bayesian Model Averaging (Transformer/LSTM/XGBoost) und NLP/NER-Pipeline. Sharpe 1.42."
      },
      jpmorgan: {
        title: "JP Morgan Data for Good (1. Platz)",
        description: "Geodaten-Analyseplattform für Schulausbauten in UK mittels K-means/DBSCAN-Clustering."
      }
    },
    sections: {
      about: { 
        title: "Über mich", 
        body: "Ich werde im Sommer 2026 als Quantitative Research Intern bei Balyasny Asset Management in einem L/S Equity Pod (Aerospace & Defense) tätig sein. Derzeit absolviere ich den MSc in Mathematik und Finanzen am Imperial College London und ein Ingenieursstudium an der Télécom Paris. Ich begeistere mich für Machine Learning, Finanzen und Quantencomputing. Zudem habe ich vibematch.tech mitbegründet." 
      },
      projects: { title: "Projekte" },
      experience: { title: "Erfahrung" },
      skills: {
        title: "Fähigkeiten",
        finance: "Quantitative Methoden & Risiko",
        programming: "Programmierung",
        languages: "Sprachen",
        items: {
          finance: {
            derivativesPricing: "Monte Carlo, Zeitreihen (ARIMA, GARCH, VAR)",
            portfolioOptimization: "PCA, Kointegration, Kalman-Filter",
            riskManagement: "VaR, Expected Shortfall, Greeks",
            algorithmicTrading: "Black-Scholes, Heston, Hull-White",
            monteCarlo: "Cox Proportional Hazards"
          },
          programming: {
            python: "Python (NumPy, Pandas, Scikit-Learn, PyTorch, QuantLib)",
            cpp_r_matlab_sql_vba: "C++, R, SQL, Java, Excel VBA"
          },
          languages: {
            french: "Französisch (Muttersprache)",
            english: "Englisch (C2)",
            german: "Deutsch (B2)",
            spanish: "Spanisch (Fließend)",
            danish: "Dänisch (Grundkenntnisse)"
          }
        }
      },
      leadership: { title: "Leadership & Aktivitäten" }
    },
    experience: {
      balyasny: "Balyasny Asset Management — Quantitative Research Intern (Sommer 2026, London)",
      mondor: "Henri-Mondor-Krankenhaus — Data Science Research Intern (Sommer 2025, Frankreich)",
      vibematch: "VibeMatch (KI-Startup) — Mitgründer & CEO (2024-2025)",
      sopra: "Sopra Steria — Quantencomputing-Praktikum (Sommer 2024, Frankreich)"
    },
    leadership: {
      surf: "Präsident – Télécom Paris Surf Club — Organisation von Surf-Trips (Lacanau, Biarritz), Logistik für 40+ Teilnehmer.",
      forum: "Generalsekretär – Forum Télécom Paris — Leitung eines 300k€ Budgets und 48 Mitgliedern; Forbes Interview.",
      rugby: "Rugby-Team von Télécom Paris — Teamkapitän."
    },
    buttons: { visitApp: "App besuchen", viewOnGithub: "Auf GitHub ansehen" },
    footer: { copyright: "© Paul Archer 2025" }
  },
  es: {
    nav: { about: "Sobre mí", projects: "Proyectos", experience: "Experiencia", skills: "Habilidades", leadership: "Liderazgo" },
    hero: {
      title: "Paul Archer",
      tagline: "MSc Mathematics & Finance @ Imperial College London | Futuro Intern Quant @ BAM",
      quote: "Investigación Cuantitativa, Machine Learning y Computación Cuántica",
      viewResume: "Ver CV",
      resumeTitle: "CV — Paul Archer",
      openInNewTab: "Abrir en nueva pestaña",
      downloadPdf: "Descargar PDF"
    },
    projects: {
      multiAsset: {
        title: "Multi-Strategy Alpha Engine",
        description: "Estrategia de renta variable sistemática usando Bayesian Model Averaging (Transformer/LSTM/XGBoost) y pipeline NLP. Sharpe 1.42."
      },
      jpmorgan: {
        title: "JP Morgan Data for Good (1er Puesto)",
        description: "Plataforma de análisis geoespacial para la expansión escolar en el Reino Unido mediante clustering K-means/DBSCAN."
      }
    },
    sections: {
      about: { 
        title: "Sobre mí", 
        body: "Me uniré a Balyasny Asset Management como pasante de Investigación Cuantitativa (Verano 2026) en un pod L/S Equity (Aerospace & Defense). Actualmente curso el MSc en Matemáticas y Finanzas en el Imperial College London y estudio ingeniería en Télécom Paris. Me apasiona el Machine Learning, las Finanzas y la Computación Cuántica. También cofundé vibematch.tech." 
      },
      projects: { title: "Proyectos" },
      experience: { title: "Experiencia" },
      skills: {
        title: "Habilidades",
        finance: "Métodos Cuantitativos y Riesgo",
        programming: "Programación",
        languages: "Idiomas",
        items: {
          finance: {
            derivativesPricing: "Monte Carlo, Series Temporales (ARIMA, GARCH, VAR)",
            portfolioOptimization: "PCA, Cointegración, Filtro de Kalman",
            riskManagement: "VaR, Expected Shortfall, Griegas",
            algorithmicTrading: "Black-Scholes, Heston, Hull-White",
            monteCarlo: "Cox Proportional Hazards"
          },
          programming: {
            python: "Python (NumPy, Pandas, Scikit-Learn, PyTorch, QuantLib)",
            cpp_r_matlab_sql_vba: "C++, R, SQL, Java, Excel VBA"
          },
          languages: {
            french: "Francés (Nativo)",
            english: "Inglés (C2)",
            german: "Alemán (B2)",
            spanish: "Español (Fluido)",
            danish: "Danés (Básico)"
          }
        }
      },
      leadership: { title: "Liderazgo y Actividades" }
    },
    experience: {
      balyasny: "Balyasny Asset Management — Pasante de Investigación Cuantitativa (Verano 2026, Londres)",
      mondor: "Hospital Henri Mondor — Pasante de Investigación en Data Science (Verano 2025, Francia)",
      vibematch: "VibeMatch (Startup IA) — Cofundador y CEO (2024-2025)",
      sopra: "Sopra Steria — Pasante de Computación Cuántica (Verano 2024, Francia)"
    },
    leadership: {
      surf: "Presidente – Télécom Paris Surf Club — Organización de viajes de surf (Lacanau, Biarritz), logística para 40+ participantes.",
      forum: "Secretario General – Forum Télécom Paris — Dirección de un presupuesto de 300k€ y un equipo de 48 personas para una feria con 1.000+ estudiantes y 90 empresas ; 100k€ de beneficio ; entrevista en Forbes.",
      rugby: "Equipo de Rugby de Télécom Paris — Capitán."
    },
    buttons: { visitApp: "Visitar", viewOnGithub: "Ver en GitHub" },
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
