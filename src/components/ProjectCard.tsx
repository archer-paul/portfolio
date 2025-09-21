import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useI18n } from "@/context/I18nContext";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  videoId?: string;
  appUrl?: string;
  autoPlay?: boolean;
}

const ProjectCard = ({ title, description, href, videoId, appUrl, autoPlay = false }: ProjectCardProps) => {
  const [play, setPlay] = useState(autoPlay);
  const { t } = useI18n();
  return (
    <article className="group rounded-lg border bg-card p-6 transition-colors hover:border-accent/40 hover:shadow-md">
      {videoId && (
        <div className="mb-4">
          <AspectRatio ratio={16 / 9}>
            {play ? (
              <iframe
                className="h-full w-full rounded-md"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`}
                title={`${title} video`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlay(true)}
                className="relative h-full w-full rounded-md overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Play ${title} video`}
              >
                <img
                  src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                  alt={`${title} video preview`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-background/20 group-hover:bg-background/30 transition-colors" aria-hidden />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary/90 text-primary-foreground shadow-md ring-1 ring-accent/30">
                    <FontAwesomeIcon icon={faPlay} />
                  </span>
                </span>
              </button>
            )}
          </AspectRatio>
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex items-center gap-3">
        <Button asChild variant="outline" size="sm" className="hover-scale">
          <a href={href} target="_blank" rel="noreferrer" aria-label={`${title} – GitHub`}>
            <FontAwesomeIcon icon={faGithub} />
            <span>{t("buttons.viewOnGithub")}</span>
          </a>
        </Button>
        {appUrl && (
          <Button asChild variant="accent" size="sm" className="hover-scale">
            <a href={appUrl} target="_blank" rel="noreferrer" aria-label={`${title} – Visit App`}>
              <span>{t("buttons.visitApp")}</span>
            </a>
          </Button>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
