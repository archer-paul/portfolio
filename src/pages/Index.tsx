import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectCard from "@/components/ProjectCard";
import SocialLinks from "@/components/SocialLinks";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold story-link" aria-label="Aller au début">Paul Archer</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="story-link">About</a>
            <a href="#projects" className="story-link">Projects</a>
            <a href="#experience" className="story-link">Experience</a>
            <a href="#skills" className="story-link">Skills</a>
            <a href="#leadership" className="story-link">Leadership</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />

        <section id="about" className="container py-16 md:py-20">
          <header className="mb-6">
            <h2 className="text-2xl font-semibold">About Me</h2>
          </header>
          <p className="text-muted-foreground max-w-3xl animate-fade-in">
            I am a quantitative finance and AI enthusiast with a strong background in stochastic modeling, machine learning, and algorithmic trading. Currently pursuing my MSc in Mathematics and Finance at Imperial College London, I combine technical expertise with entrepreneurial drive as Co-Founder of VibeMatch.
          </p>
        </section>

        <section id="projects" className="bg-secondary/40 py-16 md:py-20">
          <div className="container">
            <header className="mb-8">
              <h2 className="text-2xl font-semibold">Projects</h2>
            </header>
            <FeaturedProject />
            <div className="grid gap-6 md:grid-cols-2">
              <ProjectCard
                title="Trading Bot"
                description="Algorithmic trading system using deep reinforcement learning with advanced technical indicators (MACD, RSI, Bollinger Bands), achieving 18% annual returns with full backtesting and risk management framework."
                href="https://github.com/archer-paul/trading-bot"
              />
              <ProjectCard
                title="CareSync AI Triage"
                description="AI-powered triage assistant for emergency departments, integrating voice recognition, symptom extraction, and real-time patient prioritization."
                href="https://github.com/archer-paul/CareSync-AI-Triage"
                appUrl="https://medical-triage-ai.lovable.app/"
                videoId="AN8mFCh62HA"
              />
              <ProjectCard
                title="GEMCARE"
                description="AI-powered medical record platform using Gemma 3/MedGemma, with intelligent document processing and ClinicalTrials.gov API integration. Top 10 at Google DeepMind Healthcare Hackathon."
                href="https://github.com/archer-paul/gemcare-smart-medical-record"
              />
              <ProjectCard
                title="Quantum Network Optimizer"
                description="Quantum optimization algorithms on Pasqal’s cold atoms-based computing for telecom network resource allocation."
                href="https://github.com/archer-paul/quantum-network-optimizer"
              />
            </div>
          </div>
        </section>

        <section id="experience" className="container py-16 md:py-20">
          <header className="mb-6">
            <h2 className="text-2xl font-semibold">Experience</h2>
          </header>
          <ul className="space-y-4 text-muted-foreground">
            <li>
              <strong className="text-foreground">VibeMatch (Co‑Founder)</strong> — Built AI-powered creator-sponsor matching platform with social media data integration (YouTube, Instagram APIs) and Cerebras inference engine, led B2B outreach to marketing agencies.
            </li>
            <li>
              <strong className="text-foreground">Henri Mondor Hospital (Data Science Internship)</strong> — Developed time series forecasting models, built NLP pipeline, created funding analysis tool.
            </li>
            <li>
              <strong className="text-foreground">Sopra Steria (Quantum Computing Internship)</strong> — Implemented cold atom quantum optimization algorithms for telecom network infrastructure.
            </li>
            <li>
              <strong className="text-foreground">Hedge's Farm (Seasonal Worker)</strong> — Livestock management, crop harvesting, and farm maintenance in Sligo, Ireland.
            </li>
          </ul>
        </section>

        <section id="skills" className="bg-secondary/40 py-16 md:py-20">
          <div className="container">
            <header className="mb-8">
              <h2 className="text-2xl font-semibold">Skills</h2>
            </header>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="font-semibold mb-2">Finance</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Derivatives Pricing</li>
                  <li>Portfolio Optimization</li>
                  <li>Risk Management</li>
                  <li>Algorithmic Trading</li>
                  <li>Monte Carlo Simulation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Programming</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Python (Pandas, Scikit-Learn, PyTorch, QuantLib)</li>
                  <li>C++, R, MATLAB, SQL, VBA</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Languages</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>French (Native)</li>
                  <li>English (C2)</li>
                  <li>German (B2)</li>
                  <li>Spanish (A2)</li>
                  <li>Danish (A1)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="leadership" className="container py-16 md:py-20">
          <header className="mb-6">
            <h2 className="text-2xl font-semibold">Leadership & Activities</h2>
          </header>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>President – Surf Association of Télécom Paris</li>
            <li>General Secretary – Forum Télécom Paris (€300k budget, €100k profit, <a href="https://www.forbes.fr/mediasfrance/forum-telecom-paris/" target="_blank" rel="noreferrer" className="story-link underline">Forbes interview</a>)</li>
            <li>Team Captain – Télécom Paris Rugby Team</li>
          </ul>
        </section>
      </main>

      <footer className="border-t py-10">
        <div className="container flex items-center justify-between flex-col md:flex-row gap-4">
          <p className="text-sm text-muted-foreground">© Paul Archer 2025</p>
          <SocialLinks email="paul.archer@example.com" github="https://github.com/archer-paul" linkedin="https://www.linkedin.com/in/p-archer/" />
        </div>
      </footer>
    </div>
  );
};

export default Index;
