import { motion } from "framer-motion";
import PropTypes from "prop-types";

/**
 * Primary Button Atom Component
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant (primary, secondary, outline)
 * @param {string} props.size - Button size (sm, md, lg)
 * @param {React.ReactNode} props.children - Button content
 * @param {function} props.onClick - Click handler
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.type - Button type
 * @param {Object} props.animationProps - Framer motion animation props
 */
const Button = ({
  variant = "primary",
  size = "md",
  children,
  onClick,
  disabled = false,
  type = "button",
  animationProps = {},
  className = "",
  ...props
}) => {
  const baseClasses = "font-medium rounded-xl cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-[#915eff] text-white hover:bg-[#7c4dff] focus:ring-[#915eff] shadow-primary",
    secondary: "bg-tertiary text-white hover:bg-opacity-80 focus:ring-tertiary",
    outline: "border-2 border-[#915eff] text-[#915eff] hover:bg-[#915eff] hover:text-white focus:ring-[#915eff]",
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed hover:bg-[#915eff]"
    : "";

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`.trim();

  const defaultAnimationProps = {
    whileHover: { scale: disabled ? 1 : 1.05 },
    whileTap: { scale: disabled ? 1 : 0.95 },
    transition: { duration: 0.2 },
    ...animationProps,
  };

  return (
    <motion.button
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...defaultAnimationProps}
      {...props}
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  animationProps: PropTypes.object,
  className: PropTypes.string,
};

export default Button;