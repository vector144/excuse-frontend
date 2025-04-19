import { Github, Linkedin } from "lucide-react";
  
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 shadow-sm border-b border-white/20">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <span className="text-white font-semibold text-xl tracking-wide flex FunGroovy ">
          <img src="./images/laptop.svg" width={25} className="mr-1" />
          BlameShift
        </span>

        <div className="flex items-center gap-4 text-white">
          <a
            href="https://github.com/vector144"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5 hover:text-gray-300 transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/satish-kumar-webdev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5 hover:text-gray-300 transition" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
