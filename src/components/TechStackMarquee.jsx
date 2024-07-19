import Marquee from "react-fast-marquee";
import logos from "./Icons";

function TechStackMarquee() {
  return (
    <div>
      <Marquee
        autoFill={true}
        pauseOnClick={true}
        pauseOnHover={true}
        gradient={true}
        gradientColor="black"
        gradientWidth={window.innerWidth > 768 ? 600 : 90}
        speed={40}
      >
        <div className="flex gap-16 sm:gap-6 m-8 sm:mx-3">
          {logos.map((logo) => (
            <div key={logo} className="scale-110">
              {logo}
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default TechStackMarquee;
