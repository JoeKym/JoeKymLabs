import React from 'react';

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

export default function SocialFooter() {
  return (
    <footer className="px-6 lg:px-12 py-12 border-t border-border bg-card text-center">
      <div className="max-w-4xl mx-auto">
        <nav className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
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
                className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
              />
            </a>
          ))}
        </nav>
        <p className="text-sm text-muted-foreground">
          Connect with JoeKym Labs on social media
        </p>
      </div>
    </footer>
  );
}

