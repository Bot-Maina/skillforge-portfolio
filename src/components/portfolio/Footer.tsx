import { BookOpen, Mail, Phone, MapPin, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <BookOpen className="text-secondary" size={24} />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">OMBERE THOMAS</h3>
                <p className="text-primary-foreground/70 text-sm">RPL E-Portfolio</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Recognition of Prior Learning portfolio demonstrating competencies 
              in pastoral ministry and RPL practitioner skills.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Portfolio Sections</h4>
            <ul className="space-y-2">
              {[
                { label: "Identity Documents", id: "identity" },
                { label: "Declaration", id: "declaration" },
                { label: "Case Studies", id: "case-studies" },
                { label: "Resume", id: "resume" },
                { label: "RPL Criteria", id: "rpl-criteria" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin size={18} className="text-secondary flex-shrink-0" />
                <span className="text-sm">Kenya</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <span className="text-sm">omberethomas@email.com</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <span className="text-sm">+254 XXX XXX XXX</span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="https://sites.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 transition-colors"
              >
                <ExternalLink size={16} />
                View on Google Sites
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} Ombere Thomas Opado. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
              Made with <Heart className="text-secondary" size={14} /> for RPL Certification
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
