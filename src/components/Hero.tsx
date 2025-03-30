"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();

  const scrollToCatalog = () => {
    // Сначала попробуем найти каталог на текущей странице
    const catalogSection = document.getElementById("catalog");
    if (catalogSection) {
      // Если каталог есть на странице, прокручиваем к нему
      catalogSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Если каталога нет на текущей странице, перенаправляем на страницу каталога
      router.push("/catalog");
    }
  };

  return (
    <section className="relative py-24 md:py-32 flex items-center justify-center text-white">
      <div className="container text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Анемон - салон <br />
          Ваших букетов
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Красота в каждом цветке и каждом букете. Наш магазин предлагает
          уникальность и изысканный вкус в оформлении, ведь в деталях
          кроется совершенство.
        </p>
        <Button
          onClick={scrollToCatalog}
          className="bg-[#e1da68] hover:bg-[#d5ce5e] text-[#50714d] font-medium px-8 py-6 h-auto text-base dark:bg-[#d5ce5e] dark:hover:bg-[#e1da68]"
        >
          Каталог букетов
        </Button>
      </div>
    </section>
  );
}
