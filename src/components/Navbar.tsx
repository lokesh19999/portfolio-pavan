import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const navItems = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Technology", to: "technology" },
  { name: "Experience", to: "experience" },
  { name: "Capabilities", to: "capabilities" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="hero" smooth duration={500} className="text-xl font-bold gradient-text cursor-pointer">
            PB
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth
                duration={500}
                offset={-70}
                className="text-slate-300 hover:text-blue-400 transition-colors cursor-pointer text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl">
          <div className="container-custom px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth
                duration={500}
                offset={-70}
                className="block text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}