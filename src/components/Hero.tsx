import { Button } from "@/components/ui/button";
import HyperdriveBackground from "@/components/HyperdriveBackground";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-secondary/40">
      <div className="container relative py-20 md:py-28">
        <HyperdriveBackground className="opacity-70" />
        <div className="relative z-10 mx-auto max-w-3xl text-center animate-enter">
          <div className="mb-6 flex justify-center">
            <Avatar className="h-28 w-28 ring-1 ring-accent/30 shadow-sm">
              <AvatarImage src="/paul-archer.jpg" alt="Portrait of Paul Archer - quantitative finance" />
              <AvatarFallback>PA</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Paul Archer — Quantitative Finance Portfolio & CV
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            MSc Mathematics & Finance @ Imperial College London | Co‑Founder @ VibeMatch
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            "Quantitative finance, AI, and advanced mathematical modeling"
          </p>
          <div className="flex items-center justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="hero" size="lg" className="hover-scale" aria-label="Aperçu et téléchargement du CV">
                  <FontAwesomeIcon icon={faFileArrowDown} />
                  <span>View Resume</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Resume — Paul Archer</DialogTitle>
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
                    <a href="/CV_ARCHER_Paul.pdf" target="_blank" rel="noreferrer">Open in new tab</a>
                  </Button>
                  <Button asChild variant="accent" size="sm">
                    <a href="/CV_ARCHER_Paul.pdf" download>Download PDF</a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
