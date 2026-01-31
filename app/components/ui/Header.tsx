"use client";

import Logo from "@/app/components/logo/Logo";

const navLinks = [
  { label: "Products", href: "#produtos" },
  { label: "How it works", href: "#como-funciona" },
  { label: "Gallery", href: "#galeria" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Logo size="sm" />

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#hero" className="btn-primary text-sm px-4 py-2">
          Create now
        </a>
      </div>
    </header>
  );
}
