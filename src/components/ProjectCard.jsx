//props : link, interactive, title, description, features, github(repo link)
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function ProjectCard({
  link = "https://www.linkedin.com/in/kingsuk-nandi/",
  interactive = true,
  title = "title",
  description = "description",
  github = "https://github.com/KingsukNandi",
  features = null,
}) {
  return (
    <div>
      <a href={link} target="_blank">
        <div className="relative aspect-video sm:aspect-reel sm:max-h-[80vh] bg-cardbg w-[66vw] sm:w-[90vw] rounded-xl">
          <div
            className={
              interactive && interactive
                ? ""
                : "w-full h-full absolute top-0 left-0 opacity-0"
            }
          ></div>
          <div className="p-4 w-full h-full">
            <iframe
              src={link}
              // width={100}
              className="border-0 rounded-lg w-full h-full overflow-hidden"
            ></iframe>
          </div>
          <div className="w-2/5 sm:w-3/5 rounded-r-xl absolute top-0 right-0 z-0 h-full bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-opacity-20 border-transparent">
            <div className="w-full h-full p-6 flex flex-col justify-between items-center gap-6">
              <div className="flex flex-col gap-6 overflow-auto">
                <div className="font-bold text-4xl sm:text-2xl bg-opacity-50">
                  {title}
                </div>
                <div className="font-medium text-xl sm:text-base bg-opacity-50">
                  {description}
                </div>
                <div className="font-normal text-base sm:text-sm bg-opacity-50">
                  <ul className="list-disc pl-[18px] flex flex-col gap-2">
                    {features &&
                      features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-evenly w-full">
                <Link
                  className=" bg-opacity-50 hover:scale-110 active:scale-95 transition-all"
                  to={github}
                  target="_blank"
                >
                  <FaGithub size={36} />
                </Link>
                <Link
                  className="text-xl sm:text-base font-semibold bg-opacity-50 hover:scale-x-125 active:scale-95 transition-all"
                  to={link}
                  target="_blank"
                >
                  Live Link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
