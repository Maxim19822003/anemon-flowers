"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { flowers } from "@/components/FlowerCatalog";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/Cart";

// Константа для базового пути
const BASE_PATH = '/anemon-flowers';

// Вспомогательная функция для получения полного пути к изображению
const getImagePath = (path: string) => {
  return `${BASE_PATH}${path}`;
};

// Компонент секции-превью для каталога с самыми популярными букетами
function CatalogPreview() {
  const { addToCart } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Выбираем только 3 самых популярных букета для отображения на главной
  const popularBouquets = [
    {
      ...flowers[0],
      popularity: "Лидер продаж"
    },
    {
      ...flowers[1],
      popularity: "Популярный выбор"
    },
    {
      ...flowers[2],
      popularity: "Сезонный хит"
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(price);
  };

  const handleAddToCart = (bouquet: { id: number; name: string; price: number; image: string }) => {
    if (!isMounted) return;
  
    addToCart({
      id: bouquet.id,
      name: bouquet.name,
      price: bouquet.price,
      image: bouquet.image
    });
  };

  return (
    <section id="catalog-preview" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Наш каталог цветов
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Выберите из нашей коллекции свежих букетов, созданных с любовью и вниманием к деталям
          </p>
        </div>

        {/* Самые популярные букеты */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {popularBouquets.map((bouquet) => (
            <div key={bouquet.id} className="group relative overflow-hidden rounded-lg bg-white/90 dark:bg-gray-800 shadow-md">
              <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-[#e1da68] dark:bg-[#d5ce5e] text-[#50714d] dark:text-[#3a543a] text-xs font-semibold rounded">
                {bouquet.popularity}
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src={getImagePath(bouquet.image)}
                  alt={bouquet.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#50714d] dark:text-[#d5ce5e]">{bouquet.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-[#50714d] dark:text-[#d5ce5e] font-bold">{formatPrice(bouquet.price)}</p>
                  <Button
                    onClick={() => handleAddToCart(bouquet)}
                    className="bg-[#50714d] hover:bg-[#3f5a3c] text-white dark:bg-[#3a543a] dark:hover:bg-[#304830]"
                    size="sm"
                    disabled={!isMounted}
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    В корзину
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/catalog"
            className="inline-block bg-[#50714d] hover:bg-[#3f5a3c] text-white font-medium px-8 py-4 rounded-md dark:bg-[#d5ce5e] dark:hover:bg-[#e1da68] dark:text-[#3a543a]"
            prefetch={true}
            aria-label="Перейти в полный каталог"
          >
            Перейти в полный каталог
          </Link>
        </div>
      </div>
    </section>
  );
}

// Компонент секции-превью для галереи с примерами фото
function GalleryPreview() {
  // Примеры фото для отображения на главной
  const previewImages = [
    {
      id: 1,
      alt: "Пурпурные анемоны",
      image: "/images/purple-anemones.jpg"
    },
    {
      id: 2,
      alt: "Красные розы",
      image: "/images/red-roses.jpg"
    },
    {
      id: 4,
      alt: "Смешанный букет",
      image: "/images/mixed-bouquet.jpg"
    }
  ];

  return (
    <section id="gallery-preview" className="py-16 md:py-24 bg-white/20 dark:bg-gray-800/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e1da68] mb-4">
            Наша галерея
          </h2>
          <p className="text-white/80 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Взгляните на наши работы и вдохновитесь красотой цветочных композиций
          </p>
        </div>

        {/* Примеры фото */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {previewImages.map((image) => (
            <div
              key={image.id}
              className="relative h-64 overflow-hidden rounded-lg group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity z-10"></div>
              <Image
                src={getImagePath(image.image)}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-block bg-[#e1da68] hover:bg-[#d5ce5e] text-[#50714d] font-medium px-8 py-4 rounded-md dark:bg-[#3a543a] dark:hover:bg-[#4b6a4b] dark:text-white"
          >
            Перейти в галерею
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CatalogPreview />
        <GalleryPreview />
        <AboutUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
