import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import rocket from "../assets/rocket.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Ambar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I develop 3D visual, user <br className="sm:block hidden" />{" "}
            interfaces and web applications
          </p>
          <button className="mt-3 bg-[#915eff] px-2 py-3 rounded-xl shadow-primary cursor-pointer hover:bg-tertiary font-medium">
            <a href="#projects">See Project</a>
          </button>
        </div>

        <img
          src={rocket}
          alt="rocket"
          className="h-72 sm:h-96 mx-auto my-auto"
        />
      </div>
      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
