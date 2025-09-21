import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useI18n } from "@/context/I18nContext";

interface MultiAssetProjectProps {
  className?: string;
}

const MultiAssetProject = ({ className = "" }: MultiAssetProjectProps) => {
  const { t, lang } = useI18n();
  
  const projectData = {
    en: {
      title: "Multi-Asset Trading Framework",
      description: "Quantitative trading system combining ML ensemble (XGBoost, LSTM, Transformers) with real-time sentiment analysis (Bloomberg, Reuters, Reddit, Congressional trading). Sharpe 1.34, 13% annual returns, 6.8% max drawdown.",
      tech: "Python, PyTorch, XGBoost, LSTM, Transformers, PostgreSQL, Redis, Next.js, Flask-SocketIO"
    },
    fr: {
      title: "Framework de Trading Multi-Actifs",
      description: "Système de trading quantitatif combinant ensemble ML (XGBoost, LSTM, Transformers) et analyse de sentiment temps réel (Bloomberg, Reuters, Reddit, Congressional trading). Sharpe 1.34, rendements annuels 13%, drawdown max 6.8%.",
      tech: "Python, PyTorch, XGBoost, LSTM, Transformers, PostgreSQL, Redis, Next.js, Flask-SocketIO"
    },
    de: {
      title: "Multi-Asset-Trading-Framework",
      description: "Quantitatives Trading-System mit ML-Ensemble (XGBoost, LSTM, Transformers) und Echtzeit-Sentiment-Analyse (Bloomberg, Reuters, Reddit, Congressional Trading). Sharpe 1.34, 13% Jahresrendite, 6.8% max. Drawdown.",
      tech: "Python, PyTorch, XGBoost, LSTM, Transformers, PostgreSQL, Redis, Next.js, Flask-SocketIO"
    },
    es: {
      title: "Framework de Trading Multi-Activos",
      description: "Sistema de trading cuantitativo combinando ensemble ML (XGBoost, LSTM, Transformers) con análisis de sentimiento en tiempo real (Bloomberg, Reuters, Reddit, Congressional trading). Sharpe 1.34, 13% rendimientos anuales, 6.8% drawdown máximo.",
      tech: "Python, PyTorch, XGBoost, LSTM, Transformers, PostgreSQL, Redis, Next.js, Flask-SocketIO"
    }
  };
  
  const data = projectData[lang];

  return (
    <article className={`mb-10 rounded-lg border bg-card p-6 shadow-sm ${className}`}>
      <header className="mb-4">
        <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
        <p className="text-muted-foreground mb-3">
          {data.description}
        </p>
        <p className="text-sm text-muted-foreground/80">
          <strong>Technologies:</strong> {data.tech}
        </p>
      </header>
      
      <div className="mb-4">
        <div className="rounded-md overflow-hidden border">
          <img
            src="/images/trading-infrastructure-dashboard.png"
            alt="Multi-Asset Trading Infrastructure Dashboard"
            className="w-full h-auto rounded-md"
            loading="lazy"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Button asChild variant="accent" size="sm" className="hover-scale">
          <a
            href="https://quantitative-alpha-engine.web.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Multi-Asset Trading app"
          >
            {t("buttons.visitApp")}
          </a>
        </Button>
        <Button asChild variant="outline" size="sm" className="hover-scale">
          <a
            href="https://github.com/archer-paul/multi-asset-systematic-trading"
            target="_blank"
            rel="noreferrer"
            aria-label="View Multi-Asset Trading on GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            {t("buttons.viewOnGithub")}
          </a>
        </Button>
      </div>
    </article>
  );
};

export default MultiAssetProject;