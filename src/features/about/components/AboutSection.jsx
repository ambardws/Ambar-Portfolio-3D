import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Typography } from "../../../design-system/atoms";
import { ServiceCard } from "../../../design-system/molecules";
import { textVariant, fadeIn } from "../../../shared/utils/motion";

/**
 * About Section Organism Component
 * Refactored to use clean architecture and atomic design
 */
const AboutSection = ({
  title = "Introduction",
  heading = "Overview",
  description = "I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Angular, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!",
  services = [],
}) => {
  return (
    <section className="flex justify-center sm:px-16 px-6 sm:py-16 py-10">
      <div>
        <motion.div variants={textVariant()}>
          <Typography
            variant="caption"
            color="text-secondary"
            className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"
          >
            {title}
          </Typography>
          <Typography
            variant="h2"
            color="text-white"
            className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
          >
            {heading}
          </Typography>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <Typography variant="body2" color="text-secondary">
            {description}
          </Typography>
        </motion.div>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

AboutSection.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ),
};

export default AboutSection;
