import { motion } from "framer-motion";
import PropTypes from "prop-types";

/**
 * Typography Atom Component
 * @param {Object} props - Component props
 * @param {string} props.variant - Typography variant (h1, h2, h3, h4, h5, h6, body1, body2, caption)
 * @param {React.ReactNode} props.children - Text content
 * @param {string} props.color - Text color class
 * @param {Object} props.animationProps - Framer motion animation props
 */
const Typography = ({
  variant = "body1",
  children,
  color = "text-white",
  className = "",
  animationProps = {},
  ...props
}) => {
  const variantClasses = {
    h1: "font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    h2: "font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    h3: "text-[20px] font-bold text-center",
    h4: "text-[18px] font-semibold",
    h5: "text-[16px] font-medium",
    h6: "text-[14px] font-medium",
    body1: "lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] font-medium",
    body2: "text-[17px] leading-[30px]",
    caption: "sm:text-[18px] text-[14px] uppercase tracking-wider",
  };

  const combinedClasses = `${variantClasses[variant]} ${color} ${className}`.trim();

  const Component = variant.startsWith('h') ? variant : 'p';

  return (
    <motion.div
      as={Component}
      className={combinedClasses}
      {...animationProps}
      {...props}
    >
      {children}
    </motion.div>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2", "caption"]),
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  animationProps: PropTypes.object,
};

export default Typography;