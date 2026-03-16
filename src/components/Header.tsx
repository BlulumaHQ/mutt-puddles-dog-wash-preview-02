import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us/" },
  {
    label: "Services",
    path: "/services/",
    children: [
      { label: "Dog Wash Studio", path: "/dog-wash-studio-tacoma-wa/" },
      { label: "Self-Service Dog Wash", path: "/service-dog-wash-tacoma-wa/" },
      { label: "Pet Groomer", path: "/pet-groomer-in-tacoma-wa/" },
      { label: "Dog Grooming", path: "/dog-grooming-tacoma-wa/" },
      { label: "Dog Groomer", path: "/dog-groomer-tacoma-wa/" },
    ],
  },
  { label: "Testimonials", path: "/testimonials/" },
  { label: "Contact Us", path: "/contact-us/" },
  { label: "FAQ", path: "/frequently-asked-questions/" },
  { label: "Tips", path: "/tips/" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      {/* Top bar */}
      <div className="border-b border-border/50">
        <div className="section-container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Tacoma, WA 98445</span>
          </div>
          <a
            href="tel:2535313387"
            className="flex items-center gap-2 font-semibold text-secondary hover:text-secondary/80 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            (253) 531-3387
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="section-container flex items-center justify-between py-3">
        <Link to="/" className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight">
          Mutt Puddles Dog Wash LLC
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.path}
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`px-3 py-2 rounded-button text-sm font-medium transition-colors hover:bg-muted ${
                    location.pathname === link.path ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 rounded-card bg-background card-shadow p-2"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-3 py-2 rounded-button text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-button text-sm font-medium transition-colors hover:bg-muted ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-button hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-border/50 bg-background"
          >
            <nav className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    className={`block px-3 py-2.5 rounded-button text-sm font-medium transition-colors hover:bg-muted ${
                      location.pathname === link.path ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
