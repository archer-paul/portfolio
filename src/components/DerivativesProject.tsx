import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useI18n } from "@/context/I18nContext";

interface DerivativesProjectProps {
  className?: string;
}

const DerivativesProject = ({ className = "" }: DerivativesProjectProps) => {
  const { t, lang } = useI18n();
  
  const projectData = {
    en: {
      title: "Derivatives Pricing Engine",
      description: "High-performance pricing library implementing Black-Scholes, Heston stochastic volatility, and Merton jump-diffusion models. Sub-millisecond Greeks calculation with automatic differentiation, Monte Carlo simulation with variance reduction.",
      tech: "Python, NumPy, SciPy, QuantLib, PyTorch, Matplotlib"
    },
    fr: {
      title: "Moteur de Pricing de Dérivés",
      description: "Bibliothèque haute performance implémentant Black-Scholes, Heston et Merton jump-diffusion. Calcul des Grecs avec différentiation automatique en sub-milliseconde, simulation Monte Carlo avec réduction de variance.",
      tech: "Python, NumPy, SciPy, QuantLib, PyTorch, Matplotlib"
    },
    de: {
      title: "Derivate-Pricing-Engine",
      description: "Hochleistungs-Pricing-Bibliothek mit Black-Scholes, Heston stochastischer Volatilität und Merton Jump-Diffusion-Modellen. Sub-Millisekunden Greeks-Berechnung mit automatischer Differentiation, Monte-Carlo-Simulation mit Varianzreduktion.",
      tech: "Python, NumPy, SciPy, QuantLib, PyTorch, Matplotlib"
    },
    es: {
      title: "Motor de Pricing de Derivados",
      description: "Biblioteca de alto rendimiento implementando Black-Scholes, volatilidad estocástica Heston y modelos Merton jump-diffusion. Cálculo de Griegas sub-milisegundo con diferenciación automática, simulación Monte Carlo con reducción de varianza.",
      tech: "Python, NumPy, SciPy, QuantLib, PyTorch, Matplotlib"
    }
  };
  
  const data = projectData[lang];

  return (
    <article className={`rounded-lg border bg-card p-6 shadow-sm ${className}`}>
      <header className="mb-4">
        <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
        <p className="text-muted-foreground mb-3">
          {data.description}
        </p>
        <p className="text-sm text-muted-foreground/80">
          <strong>Technologies:</strong> {data.tech}
        </p>
      </header>
      
      
      <div className="flex items-center gap-3">
        <Button asChild variant="outline" size="sm" className="hover-scale">
          <a
            href="https://github.com/archer-paul/quantitative-derivatives-engine"
            target="_blank"
            rel="noreferrer"
            aria-label="View Derivatives Pricing Engine on GitHub"
          >
            {t("buttons.viewOnGithub")}
          </a>
        </Button>
      </div>
    </article>
  );
};

export default DerivativesProject;