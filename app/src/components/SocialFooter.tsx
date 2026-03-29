import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/JoeKym',
    icon: '/social/github.svg',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/JoeKym07',
    icon: '/social/twitter.svg',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/ky.money223',
    icon: '/social/facebook.svg',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/ky.money223',
    icon: '/social/instagram.svg',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/254117412271',
    icon: '/social/whatsapp.svg',
  },
  {
    name: 'Linktree',
    url: 'https://linktr.ee/Joekym07',
    icon: '/social/linktree.svg',
  },
];

const aboutLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Work', path: '/work' },
  { name: 'Careers', path: '/careers' },
  { name: 'Studio', path: '/studio' },
  { name: 'Philosophy', path: '/philosophy' },
];

const contactLinks = [
  { name: 'Support', path: '/support' },
  { name: 'Help', path: '/help' },
  { name: 'Feedback', path: '/feedback' },
  { name: 'Contact', path: '/contact' },
  { name: 'Legal', path: '/legal' },
];

export default function SocialFooter() {
  return (
    <footer className="px-6 lg:px-12 py-12 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Left: About Us */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-foreground">About Us</h3>
            <nav className="space-y-3">
              {aboutLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Middle: Community (Social Links) */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-foreground text-center">Community</h3>
            <nav className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="group p-3 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-primary-glow hover:scale-110 flex-shrink-0"
                >
                  <img
                    src={link.icon}
                    alt={link.name}
                    className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Contact Us */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-foreground">Contact Us</h3>
            <nav className="space-y-3">
              {contactLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="mailto:mail.jkyme@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={16} />
                mail.jkyme@gmail.com
              </a>
              <a
                href="tel:+254117412271"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone size={16} />
                +254 117 412271
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © JoeKym Labs™ | A Web Development Studio and Company
          </p>
        </div>
      </div>
    </footer>
  );
}
