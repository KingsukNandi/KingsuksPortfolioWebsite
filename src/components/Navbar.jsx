import { Anchor } from "@mui/icons-material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  HiOutlineCode,
  HiOutlineHome,
  HiOutlinePaperAirplane,
  HiOutlineUser,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Navbar() {
  const iconStyle = {
    size: "22px",
    color: "rgb(64, 201, 142)",
  };
  return (
    // TODO: remove tilt
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 flex justify-center items-center">
      {/* <Tilt
        scale={1.15}
        transitionSpeed={2500}
        // tiltReverse={true}
        // tiltAngleInitial={120}
        className="parallax-effect"
        // perspective={500}
      > */}
      <div className="w-64 bg-primary rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-transparent">
        <nav className="flex justify-between m-4">
          {/* TODO: add smooth scroll to section animations on NavLink */}

          <AnchorLink
            className="inner-element hover:scale-110 active:scale-95 flex justify-center items-center p-3 bg-subtle rounded-xl"
            href="#home"
          >
            <HiOutlineHome {...iconStyle} />
          </AnchorLink>

          <AnchorLink
            href="#projects"
            className="inner-element hover:scale-110 active:scale-95 flex justify-center items-center p-3 bg-subtle rounded-xl"
          >
            <HiOutlineCode {...iconStyle} />
          </AnchorLink>

          <AnchorLink
            href="#about"
            className="inner-element hover:scale-110 active:scale-95 flex justify-center items-center p-3 bg-subtle rounded-xl"
          >
            <HiOutlineUser {...iconStyle} />
          </AnchorLink>

          <AnchorLink
            href="#contact"
            className="inner-element hover:scale-110 active:scale-95 flex justify-center items-center p-3 bg-subtle rounded-xl"
          >
            <HiOutlinePaperAirplane {...iconStyle} className="rotate-45" />
          </AnchorLink>
        </nav>
      </div>
      {/* </Tilt> */}
    </div>
  );
}

export default Navbar;
