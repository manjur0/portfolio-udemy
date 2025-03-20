import { useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="flex justify-between items-center p-6 relative">
      <div className="flex items-center space-x-4">
        <span className="bg-gray-300 p-2 rounded-full ">
          <AiTwotoneMail className="text-2xl text-black cursor-pointer" />
        </span>
        <span className="cursor-pointer">sfmanjur21@gmail.com</span>
      </div>
      {/* Mobile nav button*/}
      <div className="md:hidden z-50 " onClick={() => setNavOpen(!navOpen)}>
        <div
          className={`w-6 h-0.5 bg-gray-300 transition-all ${
            navOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 my-1 bg-gray-300 transition-all ${
            navOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-gray-300 transition-all ${
            navOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <li>
            <a className="text-gray-300 hover:text-gray-400" href="#">
              Linkdin
            </a>
            <span className="text-gray-300 hover:text-gray-400 ml-2">/</span>
          </li>
          <li>
            <a className="text-gray-300 hover:text-gray-400" href="#">
              Driball
            </a>
            <span className="text-gray-300 hover:text-gray-400 ml-2">/</span>
          </li>
          <li>
            <a className="text-gray-300 hover:text-gray-400" href="#">
              Instagram
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
