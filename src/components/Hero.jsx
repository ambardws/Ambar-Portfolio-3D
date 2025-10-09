import { motion } from "framer-motion";
import { styles } from "../styles";
import heroUser from "../assets/heroUser.jpeg";

const Hero = () => {
  const headingText = "Hi, I'm ";
  const name = "Ambar";
  const paragraph = "I'm a Software Engineer and I'm an experienced frontend developer with 3 years of professional expertise.";

  // Variants untuk heading container
  const headingContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Slower stagger for better visibility
        delayChildren: 0.2, // Start after image appears
      },
    },
  };

  // Variants untuk paragraph container
  const paragraphContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Slower stagger for words
        delayChildren: 1.5, // Start after heading is done (headingText + name letters * 0.08 + buffer)
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-center`}
      >
        <div className="flex items-center justify-center gap-10">
          <motion.img
            src={heroUser}
            alt="heroUser"
            className="h-72 sm:h-96 mx-auto my-auto rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
          <div>
            <motion.h1
              className={`${styles.heroHeadText} text-white flex flex-wrap items-center`}
              variants={headingContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Heading letters */}
              {headingText.split("").map((char, idx) => (
                <motion.span key={`h-${idx}`} variants={letterVariants} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}

              {/* Name with color, letters animated too */}
              <span className="inline-block">
                {name.split("").map((char, idx) => (
                  <motion.span
                    key={`n-${idx}`}
                    variants={letterVariants}
                    className="inline-block text-[#915eff]"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              className={`${styles.heroSubText} mt-2 text-white`}
              variants={paragraphContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {paragraph.split(" ").map((word, idx) => (
                <motion.span
                  key={`p-${idx}`}
                  variants={wordVariants}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>

            <motion.button
              className="mt-5 bg-[#915eff] px-2 py-3 rounded-xl shadow-primary cursor-pointer hover:bg-tertiary font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.6 }} // Increased delay to appear after paragraph
            >
              <a href="#projects">See Project</a>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
