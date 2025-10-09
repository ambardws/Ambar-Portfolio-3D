import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Typography } from "../../atoms";

/**
 * Animated Text Molecule Component with letter/word animation
 * @param {Object} props - Component props
 * @param {string} props.text - Text to animate
 * @param {string} props.variant - Typography variant
 * @param {string} props.animationType - Animation type (letters, words)
 * @param {number} props.delay - Animation delay
 * @param {number} props.stagger - Stagger delay between elements
 */
const AnimatedText = ({
  text,
  variant = "body1",
  animationType = "letters",
  delay = 0,
  stagger = 0.08,
  color = "text-white",
  className = "",
}) => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const elementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const renderAnimatedElements = () => {
    if (animationType === "words") {
      return text.split(" ").map((word, idx) => (
        <motion.span
          key={`word-${idx}`}
          variants={elementVariants}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ));
    }

    // Default to letters
    return text.split("").map((char, idx) => (
      <motion.span
        key={`letter-${idx}`}
        variants={elementVariants}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <Typography
      variant={variant}
      color={color}
      className={className}
      animationProps={{
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
      }}
    >
      {renderAnimatedElements()}
    </Typography>
  );
};

AnimatedText.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
  animationType: PropTypes.oneOf(["letters", "words"]),
  delay: PropTypes.number,
  stagger: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default AnimatedText;