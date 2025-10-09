import { motion } from "framer-motion";
import PropTypes from "prop-types";

/**
 * Image Atom Component with animation support
 * @param {Object} props - Component props
 * @param {string} props.src - Image source
 * @param {string} props.alt - Alt text
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.animationProps - Framer motion animation props
 */
const Image = ({
  src,
  alt,
  className = "",
  animationProps = {},
  loading = "lazy",
  ...props
}) => {
  const defaultAnimationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeInOut" },
    ...animationProps,
  };

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      {...defaultAnimationProps}
      {...props}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  animationProps: PropTypes.object,
  loading: PropTypes.oneOf(["lazy", "eager"]),
};

export default Image;