import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useI18n } from "@/context/I18nContext";

const FeaturedProject = () => {
  const { t, lang } = useI18n();
  const desc: Record<"en"|"fr"|"de"|"es", string> = {
    en: "AI-powered matching platform connecting content creators with sponsors using Cerebras for fast inference, behavioral analysis, and compatibility scoring.",
    fr: "Plateforme de mise en relation créateurs‑sponsors dopée à l’IA, utilisant Cerebras pour une inférence rapide, l’analyse comportementale et un score de compatibilité.",
    de: "KI‑gestützte Plattform, die Creator mit Sponsoren verbindet – mit Cerebras für schnelle Inferenz, Verhaltensanalyse und Kompatibilitäts‑Scoring.",
    es: "Plataforma con IA que conecta creadores y patrocinadores usando Cerebras para inferencia rápida, análisis de comportamiento y puntuación de compatibilidad.",
  };
  return (
    <article className="mb-10 rounded-lg border bg-card p-6 shadow-sm">
      <header className="mb-4">
        <h3 className="text-xl font-semibold">VibeMatch — AI-Powered Creator-Sponsor Matching</h3>
        <p className="text-muted-foreground">
          {desc[lang]}
        </p>
      </header>
      <div className="mb-4">
        <AspectRatio ratio={16 / 9}>
          <iframe
            className="h-full w-full rounded-md"
            src="https://www.youtube.com/embed/byYYXNICKCA?autoplay=1&mute=1&playsinline=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=byYYXNICKCA"
            title="VibeMatch demo video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </AspectRatio>
      </div>
      <div className="flex items-center gap-3">
        <Button asChild variant="accent" size="sm" className="hover-scale">
          <a
            href="https://vibematch.tech/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit VibeMatch app"
          >
            {t("buttons.visitApp")}
          </a>
        </Button>
      </div>
    </article>
  );
};

export default FeaturedProject;