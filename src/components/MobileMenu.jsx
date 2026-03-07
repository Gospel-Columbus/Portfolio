export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-[rgba(10,10,10,0.95)] z-40 flex flex-col items-center justify-center
      transition-all duration-300 ease-in-out
      ${
        menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >

      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl cursor-pointer"
      >
        ×
      </button>

      {/* Menu Links */}

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-3xl font-semibold text-white my-4 transform transition-all duration-300
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Home
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-3xl font-semibold text-white my-4 transform transition-all duration-300
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        About
      </a>

      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-3xl font-semibold text-white my-4 transform transition-all duration-300
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Projects
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-3xl font-semibold text-white my-4 transform transition-all duration-300
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Contact
      </a>

    </div>
  );
};