import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import PropTypes from "prop-types";
import { Typography, Image } from "../../atoms";

/**
 * Service Card Molecule Component
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description
 * @param {string} props.icon - Icon source
 * @param {string} props.category - Service category for gradient colors
 * @param {number} props.index - Card index for animation delay
 * @param {Object} props.tiltOptions - Tilt configuration options
 */
const ServiceCard = ({
  title,
  description,
  icon,
  category = "default",
  index = 0,
  tiltOptions = {
    max: 45,
    scale: 1,
    speed: 450,
  },
  className = "",
}) => {
  // Gradient untuk background icon berdasarkan category
  const iconGradients = {
    development: "bg-gradient-to-br from-blue-700 via-cyan-700 to-teal-700",
    design: "bg-gradient-to-br from-purple-700 via-pink-700 to-rose-700",
    optimization:
      "bg-gradient-to-br from-orange-700 via-yellow-600 to-amber-700",
    consulting: "bg-gradient-to-br from-green-700 via-emerald-700 to-lime-700",
    default: "bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-700",
  };

  const gradientClass = iconGradients[category] || iconGradients.default;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={`xs:w-[250px] w-full ${className}`}
    >
      <Tilt options={tiltOptions}>
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            {/* Icon dengan Gradient Background */}
            <div className="relative group">
              {/* Glow effect */}
              <div
                className={`absolute -inset-1 ${gradientClass} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300`}
              ></div>

              {/* Icon container */}
              <div
                className={`relative w-20 h-20 ${gradientClass} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <Image
                  src={icon}
                  alt={title}
                  className="w-10 h-10 object-contain filter brightness-0 invert"
                  animationProps={{
                    initial: { scale: 0, rotate: -180 },
                    animate: { scale: 1, rotate: 0 },
                    transition: {
                      delay: 0.2 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                    },
                  }}
                />
              </div>
            </div>

            {/* Title */}
            <Typography
              variant="h3"
              color="text-white"
              className="text-center font-bold"
            >
              {title}
            </Typography>

            {/* Description */}
            {description && (
              <Typography
                variant="body"
                color="text-gray-300"
                className="text-center text-sm leading-relaxed"
              >
                {description}
              </Typography>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.string.isRequired,
  category: PropTypes.oneOf([
    "development",
    "design",
    "optimization",
    "consulting",
    "default",
  ]),
  index: PropTypes.number,
  tiltOptions: PropTypes.object,
  className: PropTypes.string,
};

export default ServiceCard;
