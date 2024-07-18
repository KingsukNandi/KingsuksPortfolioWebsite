import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import SideScroll from "./SideScroll";
import About from "./About";
import Tilt from "react-parallax-tilt";
import headshot from "../assets/KingsukHeadshot.jpg";
import {
  reactLogo,
  viteLogo,
  tailwindLogo,
  reduxLogo,
  linkedinLogo,
  githubLogo,
  gmailLogo,
  instagramLogo,
} from "./Icons";
import TechStackMarquee from "./TechStackMarquee";
import EducationTimeline from "./EducationTimeline";
import EmailJSForm from "./EmailJSForm";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect, useState } from "react";
function Hero() {
  const logos = [reactLogo(), viteLogo(), tailwindLogo(), reduxLogo()];
  const contactLogos = [
    [linkedinLogo(), githubLogo(), gmailLogo(), instagramLogo()],
    [
      "https://www.linkedin.com/in/kingsuk-nandi/",
      "https://github.com/KingsukNandi",
      "mailto: kingsuk24nandi@gmail.com",
      "https://www.instagram.com/kingsuk_nandi?igsh=MWZwdW5vMWZyZTE0NQ==",
    ],
    ["_blank", "_blank", "", "_blank"],
  ];

  return (
    <div>
      <div id="home" className="w-full h-screen flex sm:pt-10">
        <div className="w-1/2 sm:w-full pl-4 sm:pl-0 relative overflow-hidden">
          <div className="text-primary sm:text-center sm:text-3xl font-bold text-xl mb-12 sm:mb-4 hover:text-secondary">
            <div>KINGSUK NANDI</div>
          </div>
          <div className="flex items-center gap-2 sm:flex-col">
            <div className="headshot rounded-full bg-accent bg-opacity-60">
              <img src={headshot} className="rounded-full size-40" />
            </div>
            {/* <div className="flex items-center border rounded-full"> */}

            {/* <div className="bg-green-500 rounded-full text-xs size-2.5 mx-2"></div>
              <div className="text-sm my-1 mr-2 text-nowrap">
                Available for work
              </div> */}
            {/* </div> */}
          </div>
          <div className="text-5xl sm:text-2xl font-semibold my-6 sm:my-0 sm:mt-6 sm:text-center">
            I am a
            <div className="text-primary text-7xl sm:text-5xl font-bold h-36 hover:text-secondary hover:font-extrabold">
              <Typewriter
                options={{
                  strings: [
                    `Web\nDeveloper`,
                    "Coding Enthusiast",
                    "React Developer",
                    "Photography Hobbyist",
                  ],
                  autoStart: true,
                  loop: true,
                  cursorClassName: "font-light",
                }}
              />
            </div>
          </div>
          <div className="text-base sm:text-center text-slate-400 pt-4 sm:pt-0 hover:text-gray-300 hover:font-bold">
            Building tools, coding dreams, and capturing moments.
          </div>
          <div className="my-7 flex justify-start sm:justify-center gap-6">
            <button className="text-base w-32 sm:w-fit bg-primary text-black rounded-xl font-semibold p-3 hover:bg-secondary hover:scale-110 active:scale-95">
              <AnchorLink href="#contact">Contact</AnchorLink>
            </button>
            <button className="text-base w-32 sm:w-fit rounded-xl bg-background font-semibold border border-primary text-primary p-3 hover:border-secondary hover:text-secondary hover:scale-110 active:scale-95">
              Resume
            </button>
          </div>
        </div>
        {/* <div className="w-1/2"></div> */}
      </div>

      <div id="projects" className="">
        {/* My projects */}
        {/* <div className="text-6xl font-bold">Projects</div> */}

        <SideScroll backText="Projects" />
      </div>

      <div id="about" className="h-fit flex items-center">
        <About />
      </div>

      <div id="techstack" className="h-fit ">
        <div className="text-7xl sm:text-5xl font-bold w-fit m-auto mt-16 mb-28 sm:mb-7">
          Tech Stack
        </div>
        <div className="flex sm:max-w-[298px] sm:m-auto sm:grid sm:grid-cols-2 sm:justify-items-center sm:items-center sm:aspect-square justify-center gap-7 sm:gap-2 m-10">
          {logos.map((logo) => (
            <Tilt
              key={logo}
              className="size-44 sm:size-4/5 bg-cardbg rounded-xl parallax-effect"
              perspective={500}
            >
              <div className="inner-element flex justify-center items-center h-full w-full">
                <div className="scale-150 sm:scale-110 bg-gray-800 rounded-lg p-4">
                  {logo}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
        <div className="relative z-0">
          <TechStackMarquee />
        </div>
      </div>

      <div id="education" className="">
        <div className="text-7xl sm:text-5xl font-bold w-fit m-auto mb-8">
          Education
        </div>
        <EducationTimeline />
      </div>

      <div id="contact" className={`Contact h-fit mb-[26rem] sm:mb-2`}>
        <div className="text-7xl sm:text-5xl text-center font-bold w-fit m-auto mt-24 mb-10">
          Contact Me
        </div>
        <div className="w-full flex sm:flex-col gap-4">
          <div className="w-3/5 sm:w-full bg-cardbg text-text rounded-xl p-8 sm:p-4">
            <h2 className="w-fit m-auto font-bold text-3xl sm:text-2xl mb-6">
              Email Me
            </h2>
            <EmailJSForm />
          </div>
          <div className="w-2/5 sm:w-full grid grid-cols-2 sm:grid-cols-4 sm:grid-rows-1 items-center justify-items-center">
            {contactLogos[0].map((logo, index) => (
              <a
                target={contactLogos[2][index]}
                href={String(contactLogos[1][index])}
                key={logo}
                className="scale-150 sm:scale-75"
              >
                <Tilt
                  className="size-32 sm:size-20 bg-cardbg rounded-xl parallax-effect"
                  perspective={500}
                >
                  <div className="inner-element flex justify-center items-center h-full w-full">
                    <div className="scale-150">{logo}</div>
                  </div>
                </Tilt>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div id="footer" className="Footer relative">
        <div
          id="foot"
          className="p-10 sm:pb-20 grid grid-cols-2 sm:grid-cols-1 grid-rows-4 absolute sm:relative -bottom-4 -right-4 sm:right-4 w-screen h-max bg-neutral-700 bg-opacity-30"
        >
          <div className="row-span-3 sm:row-span-1">
            <h2 className=" text-secondary text-3xl sm:text-xl font-bold mb-6 sm:mb-3">
              KINGSUK NANDI
            </h2>
            {/*  */}
            <div className="flex flex-col sm:text-base">
              <a href="mailto: kingsuk24nandi@gmail.com">
                kingsuk24nandi@gmail.com
              </a>
              <a href="tel: +919433619635">+91 9433619635</a>
            </div>
          </div>
          <div className="row-span-3 sm:col-span-3">
            <h2 className="text-xl font-semibold mb-4 sm:my-4">Resources</h2>
            <ul className="grid grid-cols-2 sm:text-xs">
              <li>
                <a href="https://icons8.com/icon/17842/linux">Linux</a> icon by{" "}
                <a href="https://icons8.com">Icons8</a>
              </li>
              <li>
                <a href="https://icons8.com/icon/108784/javascript">
                  JavaScript
                </a>{" "}
                icon by <a href="https://icons8.com">Icons8</a>
              </li>
              <li>
                <a href="https://icons8.com/icon/13444/arduino">Arduino</a> icon
                by <a href="https://icons8.com">Icons8</a>
              </li>
              <li>
                <a href="https://icons8.com/icon/40670/c-programming">
                  C Programming
                </a>{" "}
                icon by <a href="https://icons8.com">Icons8</a>
              </li>
              <li>
                <a href="https://icons8.com/icon/21278/css3">CSS3</a> icon by{" "}
                <a href="https://icons8.com">Icons8</a>
              </li>
              <li>
                <a href="https://icons8.com/icon/20906/git">Git</a> icon by{" "}
                <a href="https://icons8.com">Icons8</a>
              </li>
              <li>
                <a href="https://icons8.com/icon/63777/github">GitHub</a> icon
                by <a href="https://icons8.com">Icons8</a>
              </li>
              <li>
                <a href="https://icons8.com/icon/20909/html-5">Html 5</a> icon
                by <a href="https://icons8.com">Icons8</a>
              </li>
              <li>
                <a href="https://icons8.com/icon/108784/javascript">
                  JavaScript
                </a>{" "}
                icon by <a href="https://icons8.com">Icons8</a>
              </li>
              <li>
                <a href="https://icons8.com/icon/123603/react-native">
                  React Native
                </a>{" "}
                icon by <a href="https://icons8.com">Icons8</a>
              </li>
              <li>
                <a href="https://icons8.com/icon/jD-fJzVguBmw/redux">Redux</a>{" "}
                icon by <a href="https://icons8.com">Icons8</a>
              </li>
              <li>
                <a href="https://icons8.com/icon/CIAZz2CYc6Kc/tailwindcss">
                  Tailwindcss
                </a>{" "}
                icon by <a href="https://icons8.com">Icons8</a>
              </li>
            </ul>
          </div>
          <div className="sm:text-xs mt-4 sm:mt-0 py-4 border-t-2 border-white border-opacity-60 grid grid-cols-2 sm:flex sm:flex-col-reverse sm:gap-4 col-span-2 items-center">
            {/* <div>© 2024. All rights reserved.</div> */}
            <div></div>
            <div className="flex justify-end sm:w-full">
              <div className="flex gap-4 sm:justify-evenly sm:w-full">
                <Link
                  target="_blank"
                  to={"https://github.com/KingsukNandi"}
                  className="hover:text-white"
                >
                  <FaGithub size={30} />
                </Link>
                <Link
                  target="_blank"
                  to={"https://www.linkedin.com/in/kingsuk-nandi/"}
                  className="hover:text-white"
                >
                  <FaLinkedin size={30} />
                </Link>
                <Link
                  target="_blank"
                  to={
                    "https://www.instagram.com/kingsuk_nandi?igsh=MWZwdW5vMWZyZTE0NQ=="
                  }
                  className="hover:text-white"
                >
                  <FaInstagram size={30} />
                </Link>
                <Link
                  target="_blank"
                  to={"https://x.com/Kingsuk_Nandi"}
                  className="hover:text-white"
                >
                  <FaTwitter size={30} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
