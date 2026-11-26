import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "../data/navigation";
import { courses } from "../data/courses";

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white/70">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-5 text-sm leading-relaxed max-w-xs">
              Computer education and technical training in programming,
              enterprise software, and modern web development.
            </p>
            <p className="mt-5 text-xs font-mono tracking-[0.2em] uppercase text-brand-blue">
              Learn. Practice. Build. Grow.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">
              Courses
            </h4>
            <ul className="space-y-2.5">
              {courses.map((c) => (
                <li key={c.id}>
                  <a
                    href="#courses"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm">
                <MapPin
                  className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-blue"
                  strokeWidth={1.75}
                />
                <span>
                  01 Bandal Complex, Opposite to Patanjali Shop, Ramnagar
                  Sangamwadi, Pune – 411003
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail
                  className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-blue"
                  strokeWidth={1.75}
                />
                <a
                  href="mailto:team.ajinkyacomputersinfoweb@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  team.ajinkyacomputersinfoweb@gmail.com
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone
                  className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-blue"
                  strokeWidth={1.75}
                />
                <a
                  href="tel:+918600225653"
                  className="hover:text-white transition-colors"
                >
                  +91 8600225653
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © 2026 Ajinkya Computers Infoweb. All rights reserved.
          </p>
          <p className="text-xs text-white/40 font-mono tracking-wider">
            Academy for Computer Studies · Pune, India
          </p>
        </div>
      </div>
    </footer>
  );
}
