import { useCallback, useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const SideScroll = ({ backText = "Back Text" }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   setWindowWidth(window.innerWidth);
  //   console.log(windowWidth);
  // }, [windowWidth, window.innerWidth]);

  const [hover, setHover] = useState(false);
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x =
    window.innerWidth > 768
      ? useTransform(scrollYProgress, [0, 1], ["0%", "-65%"])
      : useTransform(scrollYProgress, [0, 1], ["0%", "-82%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <>
      <section ref={targetRef} className="h-[200vh] relative">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="sm:w-40 sm:flex sm:justify-center sm:items-center">
            <motion.div
              style={{ "--tw-text-opacity": opacity }}
              className="text-nowrap text-9xl sm:text-8xl sm:-rotate-90 sm:w-fit font-bold mr-10 text-white"
            >
              {backText}
            </motion.div>
          </div>
          <motion.div style={{ x }} className="flex gap-4">
            <ProjectCard
              link={"https://trieditor.vercel.app/"}
              interactive={false}
              title="Trieditor"
              description="A text editor with a focus on productivity."
              features={[
                "Live Preview: Combined code output displayed in real-time.",
                "User-Friendly Interface: Simple and clean design for easy navigation.",
                "Code Compilation: Instant preview eliminates the need for manual compilation.",
                "Seamless Integration: Combines HTML, CSS, and JavaScript in one platform.",
                "Efficient Debugging: Immediate feedback helps in quick error detection and correction.",
              ]}
              github="https://github.com/KingsukNandi/trieditor"
            />
            <ProjectCard
              link={"https://sgpa-calculator-6fad5.web.app/"}
              interactive={false}
              title="SGPA Calculator"
              description="An SGPA calculator tool for KIIT students."
              features={[
                "Real-Time Calculation: Automatically calculates SGPA based on input.",
                "User-Friendly Interface: Simple and intuitive design for easy usage.",
                "Manual Calculation Errors: Eliminates the need for manual SGPA calculations, reducing errors.",
                "Time Efficiency: Speeds up the process of calculating SGPA.",
                "Accessibility: Provides an easy-to-access online tool for students.",
              ]}
              github="https://github.com/KingsukNandi/"
            />
            <div
              className="moreProjects rounded-xl text-background hover:text-primary bg-primary hover:bg-opacity-0 w-10 flex justify-center items-center moreProjects"
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
            >
              <button className="text-xl font-semibold h-fit w-fit -rotate-90 text-nowrap">
                {hover ? "HOLD UP, LET ME COOK !!!" : "MORE PROJECTS"}
              </button>
            </div>
          </motion.div>

          {/* TODO: smooth scroll */}
          {/* TODO: at ending "hold up let me cook" slide */}
        </div>
      </section>
    </>
  );
};

export default SideScroll;
