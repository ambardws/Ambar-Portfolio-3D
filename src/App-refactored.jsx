import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

// Design System
import { PageLayout } from "./design-system/templates";

// Features
import { HeroSection } from "./features/hero";
import { AboutSection } from "./features/about/components/AboutSection";

// Legacy components (to be refactored)
import {
  Contact,
  Experience,
  Feedbacks,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

// Infrastructure
import { PortfolioRepository } from "./infrastructure/repositories/PortfolioRepository";
import { GetPortfolioUseCase } from "./domain/usecases";

const App = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        const portfolioRepository = new PortfolioRepository();
        const getPortfolioUseCase = new GetPortfolioUseCase(portfolioRepository);
        
        const result = await getPortfolioUseCase.execute();
        
        if (result.success) {
          setPortfolioData(result.data);
        } else {
          console.error("Failed to load portfolio data:", result.error);
        }
      } catch (error) {
        console.error("Error loading portfolio:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPortfolioData();
  }, []);

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-primary">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <PageLayout>
        {/* Hero Section with Background Pattern */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          {portfolioData && (
            <HeroSection
              name={portfolioData.name}
              title={portfolioData.title}
              description={portfolioData.description}
              profileImage={portfolioData.profileImage}
              onViewProjects={handleViewProjects}
            />
          )}
        </div>

        {/* About Section */}
        {portfolioData && (
          <AboutSection
            services={portfolioData.services}
          />
        )}

        {/* Legacy Components - To be refactored */}
        <Experience />
        <Tech />
        <div id="projects">
          <Works />
        </div>
        <Feedbacks />
        
        {/* Contact Section with Stars */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </PageLayout>
    </BrowserRouter>
  );
};

export default App;