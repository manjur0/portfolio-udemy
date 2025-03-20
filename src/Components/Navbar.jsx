const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-6 relative">
      <div>sfmanjur21@gmail.com</div>
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
