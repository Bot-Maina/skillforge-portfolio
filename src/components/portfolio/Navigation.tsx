import { useState, useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";

const navItems = [
  { id: "title", label: "Home" },
  { id: "identity", label: "Identity" },
  { id: "declaration", label: "Declaration" },
  { id: "case-studies", label: "Case Studies" },
  { id: "intro-letter", label: "Introduction" },
  { id: "resume", label: "Resume" },
  { id: "prior-learning", label: "Prior Learning" },
  { id: "gallery", label: "Gallery" },
  { id: "rpl-criteria", label: "RPL Criteria" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/98 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("title")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <BookOpen className="text-primary-foreground" size={20} />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                OMBERE THOMAS
              </span>
              <span className="block text-xs text-muted-foreground -mt-1">
                RPL E-Portfolio
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link px-3 py-2 text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-3 px-4 hover:bg-muted rounded-lg transition-colors text-foreground font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
