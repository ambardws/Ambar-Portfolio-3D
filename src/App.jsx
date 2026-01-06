import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

// Design System
import { PageLayout } from "./design-system/templates";

// Features
import { HeroSection } from "./features/hero";
import { AboutSection } from "./features/about";

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
import { AboutRepository } from "./infrastructure/repositories/AboutRepository";
import { ServicesRepository } from "./infrastructure/repositories/ServicesRepository";
import { PortfolioRepository } from "./infrastructure/repositories/PortfolioRepository";
import { GetAboutUseCase, GetServicesUseCase, GetPortfolioUseCase } from "./domain/usecases";

const App = () => {
  const [profileData, setProfileData] = useState(null); // Data dari profile-collection untuk Hero
  const [aboutData, setAboutData] = useState(null); // Data dari about untuk About section
  const [servicesData, setServicesData] = useState([]); // Data dari services
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAllData = async () => {
      try {
        // Load Profile Data dari profile-collection untuk Hero Section
        const portfolioRepository = new PortfolioRepository();
        const getPortfolioUseCase = new GetPortfolioUseCase(portfolioRepository);
        const portfolioResult = await getPortfolioUseCase.execute();
        
        if (portfolioResult.success) {
          setProfileData(portfolioResult.data);
        } else {
          console.error("Failed to load profile data:", portfolioResult.error);
        }

        // Load About Data dari about API untuk About Section description
        const aboutRepository = new AboutRepository();
        const getAboutUseCase = new GetAboutUseCase(aboutRepository);
        const aboutResult = await getAboutUseCase.execute();
        console.log("About Result:", aboutResult);
        
        if (aboutResult.success) {
          setAboutData(aboutResult.data);
        } else {
          console.error("Failed to load about data:", aboutResult.error);
        }

        // Load Services Data dari services API
        const servicesRepository = new ServicesRepository();
        const getServicesUseCase = new GetServicesUseCase(servicesRepository);
        const servicesResult = await getServicesUseCase.execute();
        
        if (servicesResult.success) {
          setServicesData(servicesResult.data);
        } else {
          console.error("Failed to load services data:", servicesResult.error);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAllData();
  }, []);

  const handleViewProjects = () => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
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
        {/* Hero Section with Background Pattern - Data dari profile-collection */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          {profileData && (
            <HeroSection
              name={profileData.name}
              title={profileData.title}
              description={profileData.description}
              profileImage={profileData.profileImage}
              onViewProjects={handleViewProjects}
            />
          )}
        </div>

        {/* About Section - Description dari about API, Services dari services API */}
        {aboutData && servicesData && (
          <AboutSection
            description={aboutData.description}
            services={servicesData}
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
