import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useI18n } from "@/context/I18nContext";
import HyperdriveBackground from "@/components/HyperdriveBackground";

const Hero = () => {
  const { t } = useI18n();
  return (
    <section id="home" className="relative isolate overflow-hidden bg-secondary/40">
      <div className="container relative py-20 md:py-28">
        <div className="relative z-10 mx-auto max-w-3xl text-center animate-enter">
          <div className="mb-6 flex justify-center">
            <Avatar className="h-32 w-32 ring-2 ring-accent/50 shadow-2xl animate-pulse-slow">
              <AvatarImage src="/paul-archer.jpg" alt="Portrait of Paul Archer - quantitative finance" />
              <AvatarFallback>PA</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-gradient">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-2xl text-foreground font-medium mb-4">
            {t("hero.tagline")}
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto italic">
            "{t("hero.quote")}"
          </p>
          <div className="flex items-center justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="hero" size="xl" className="hover-lift bg-primary text-primary-foreground px-8 py-6 text-lg" aria-label={t("hero.viewResume")}>
                  <FontAwesomeIcon icon={faFileArrowDown} className="mr-2" />
                  <span>{t("hero.viewResume")}</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{t("hero.resumeTitle")}</DialogTitle>
                </DialogHeader>
                <div className="w-full">
                  <iframe
                    src="/CV_ARCHER_Paul.pdf#zoom=page-fit"
                    className="h-[70vh] w-full rounded-md"
                    title="Resume preview"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button asChild variant="outline" size="sm">
                    <a href="/CV_ARCHER_Paul.pdf" target="_blank" rel="noreferrer">{t("hero.openInNewTab")}</a>
                  </Button>
                  <Button asChild variant="accent" size="sm">
                    <a href="/CV_ARCHER_Paul.pdf" download>{t("hero.downloadPdf")}</a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <HyperdriveBackground />
    </section>
  );
};

export default Hero;
