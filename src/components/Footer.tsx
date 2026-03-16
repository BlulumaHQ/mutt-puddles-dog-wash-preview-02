import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { label: "About Us", path: "/about-us/" },
  { label: "Services", path: "/services/" },
  { label: "Testimonials", path: "/testimonials/" },
  { label: "FAQ", path: "/frequently-asked-questions/" },
  { label: "Contact Us", path: "/contact-us/" },
  { label: "Tips", path: "/tips/" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-extrabold mb-3">Mutt Puddles Dog Wash LLC</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Bonding through grooming. Professional pet grooming and self-service wash facility serving Tacoma, WA since 2007.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-primary mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                605 156th St E, Tacoma, WA 98445
              </li>
              <li>
                <a
                  href="tel:2535313387"
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  (253) 531-3387
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                Emergency Hours Available Upon Request
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Mutt Puddles Dog Wash LLC
          </p>
          <p className="text-xs text-primary-foreground/40">
            Website Launch by{" "}
            <a
              href="https://swiftlift.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              SwiftLift
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
