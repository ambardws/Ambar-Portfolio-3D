import { motion } from "framer-motion";
import PropTypes from "prop-types";

/**
 * Page Layout Template
 * Provides consistent layout structure for all pages
 */
const PageLayout = ({ 
  children, 
  className = "",
  showStars = false,
  backgroundColor = "bg-primary"
}) => {
  return (
    <div className={`relative z-0 ${backgroundColor} ${className}`}>
      {children}
      {showStars && (
        <div className="relative z-0">
          {/* Stars canvas would go here */}
        </div>
      )}
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  showStars: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

export default PageLayout;