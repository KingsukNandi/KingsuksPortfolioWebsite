import AnchorLink from "react-anchor-link-smooth-scroll";
function About() {
  return (
    <div className="flex">
      <div className="w-2/3 sm:w-full pr-28 sm:pr-0 flex flex-col items-center m-auto">
        <div className="text-6xl sm:text-4xl text-center font-bold text-primary hover:text-secondary">
          KINGSUK NANDI
        </div>
        <div className="text-justify mt-20 flex flex-col gap-4 text-2xl sm:text-base">
          <div>
            Hi, I&apos;m{" "}
            <span className="text-primary font-semibold">Kingsuk Nandi</span>, a
            second-year B.Tech student majoring in Computer Science and
            Engineering. I&apos;m a{" "}
            <span className="text-primary font-semibold">
              passionate web developer
            </span>{" "}
            and tech enthusiast, always eager to dive into new technologies and
            explore different domains. With a love for competitive programming
            and a knack for capturing stunning photographs, I&apos;m dedicated
            to learning and growing in every aspect of my life.
          </div>
          <div>
            Whether it&apos;s{" "}
            <span className="text-primary font-semibold">
              building innovative tools
            </span>
            , strumming my guitar, or embarking on new adventures, I&apos;m{" "}
            <span className="text-primary font-semibold">
              driven by curiosity and creativity
            </span>
            .
          </div>
          <div>
            Join me on this exciting journey as{" "}
            <span className="text-primary font-semibold">
              I blend code, creativity, and curiosity to shape the future!
            </span>
          </div>
        </div>
        <div className="my-7 flex gap-6 sm:flex-col sm:items-center">
          <button className="text-base w-fit bg-primary text-black rounded-xl font-semibold p-3 hover:bg-secondary hover:scale-110 active:scale-95">
            <AnchorLink href="#contact">Contact</AnchorLink>
          </button>
          <a
            target="_blank"
            href="https://drive.google.com/drive/folders/1YAvYQYcAcJSBDIZKTtwhffnZ11ZywHXB?usp=sharing"
          >
            <button className="text-base w-fit text-nowrap rounded-xl bg-background font-semibold border border-primary text-primary p-3 hover:border-secondary hover:text-secondary hover:scale-110 active:scale-95">
              Checkout my Photography!
            </button>
          </a>
        </div>
      </div>
      {/* <div className="w-1/2 px-10">
        <div className="bg-accent bg-opacity-20 h-full">
          <img src="" alt="" />
        </div>
      </div> */}
    </div>
  );
}

export default About;
