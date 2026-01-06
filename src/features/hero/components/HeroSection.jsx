import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Button, Image } from "../../../design-system/atoms";
import { AnimatedText } from "../../../design-system/molecules";

/**
 * Hero Section Organism Component
 * Refactored to use clean architecture and atomic design
 */
const HeroSection = ({
  name = "Ambar",
  description = "I'm a Software Engineer and I'm an experienced frontend developer with 3 years of professional expertise.",
  profileImage,
  onViewProjects,
}) => {
  const headingText = "Hi, I'm ";

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
          <Image
            src={profileImage}
            alt="Profile"
            className="h-72 sm:h-96 mx-auto my-auto rounded-full"
            animationProps={{
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 1.6, ease: "easeInOut" },
            }}
          />
          
          <div>
            <div className="flex flex-wrap items-center">
              <AnimatedText
                text={headingText}
                variant="h1"
                animationType="letters"
                delay={0.2}
                stagger={0.08}
                className="inline-block"
              />
              <AnimatedText
                text={name}
                variant="h1"
                animationType="letters"
                delay={0.8}
                stagger={0.08}
                color="text-[#915eff]"
                className="inline-block ml-2"
              />
            </div>

            <AnimatedText
              text={description}
              variant="body1"
              animationType="words"
              delay={1.5}
              stagger={0.1}
              color="text-[#dfd9ff]"
              className="mt-2"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.6 }}
              className="mt-5"
            >
              <Button
                variant="primary"
                size="md"
                onClick={onViewProjects}
                animationProps={{
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                }}
              >
                <a href="#projects">See Projects</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  profileImage: PropTypes.string.isRequired,
  onViewProjects: PropTypes.func,
};

export default HeroSection;