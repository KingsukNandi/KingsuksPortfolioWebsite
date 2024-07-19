import { ParticleBackground, Navbar } from "./components/index";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="m-4 sm:m-4 ml-32 mt-14">
        <Outlet />
      </div>
      <Navbar />
      <div className="relative -z-10">
        <ParticleBackground />
      </div>
    </>
  );
}

export default Layout;
