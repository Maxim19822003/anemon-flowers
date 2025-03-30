"use client";

import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingBag } from "lucide-react";
import { useCart } from "./Cart";
import { ThemeToggle } from "./ThemeToggle";
import { usePathname } from "next/navigation";

// Константа для базового пути
const BASE_PATH = '/anemon-flowers';

// Вспомогательная функция для получения полного пути к изображению
const getImagePath = (path: string) => {
  return `${BASE_PATH}${path}`;
};

const navigationLinks = [
  { title: "Главная", href: "/" },
  { title: "Каталог", href: "/catalog" },
  { title: "Галерея", href: "/gallery" },
  { title: "О нас", href: "/#about" },
  { title: "Отзывы", href: "/#testimonials" },
  { title: "Контакты", href: "/#contact" },
];

export function Navbar() {
  const { totalItems, openCart } = useCart();
  const pathname = usePathname();

  // Функция для прокрутки к разделу при клике
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      const sectionId = href.split('#')[1];
      const section = document.getElementById(sectionId);
      
      if (section) {
        e.preventDefault();
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#50714d] text-white shadow-md dark:bg-[#3a543a]">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={getImagePath("/images/logo.png")} alt="Anemon Flowers" width={40} height={40} className="h-10 w-auto" />
          <span className="text-xl font-bold">Anemon</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-[#e1da68] dark:hover:text-[#d5ce5e]"
              prefetch={link.href === "/catalog"}
              aria-label={link.title}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Phone */}
          <a href="tel:+79610063116" className="hidden md:block text-sm">
            +7 961 006 31 16
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Cart Button */}
          <button
            onClick={openCart}
            className="relative p-2 text-white hover:text-[#e1da68] transition-colors dark:text-white dark:hover:text-[#d5ce5e]"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#e1da68] text-xs text-[#50714d] font-semibold dark:bg-[#d5ce5e] dark:text-[#3a543a]">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger className="md:hidden" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-white dark:bg-gray-800 dark:text-white">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-gray-800 text-sm font-medium transition-colors hover:text-[#50714d] dark:text-white dark:hover:text-[#d5ce5e]"
                    prefetch={link.href === "/catalog"}
                    aria-label={link.title}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.title}
                  </Link>
                ))}
                <a
                  href="tel:+79610063116"
                  className="text-gray-800 text-sm font-medium transition-colors hover:text-[#50714d] dark:text-white dark:hover:text-[#d5ce5e]"
                >
                  +7 961 006 31 16
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
