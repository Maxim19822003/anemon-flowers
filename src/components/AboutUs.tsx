"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const features = [
  {
    title: "Свежие цветы ежедневно",
    description: "Получаем свежие цветы каждый день, гарантируя их качество и долговечность."
  },
  {
    title: "Уникальный дизайн",
    description: "Наши флористы создают неповторимые композиции, учитывая все ваши пожелания."
  },
  {
    title: "Доставка в день заказа",
    description: "Быстрая доставка по всему городу в день заказа, чтобы ваш подарок прибыл вовремя."
  },
  {
    title: "Экологичная упаковка",
    description: "Используем экологически чистые материалы для упаковки наших букетов."
  }
];

export function AboutUs() {
  return (
    <section id="about" className="py-16 bg-white/20 dark:bg-gray-800/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e1da68] mb-4">О нас</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Левая колонка с сутью и ключевыми фактами */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/30 dark:bg-gray-700/70 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-[#e1da68] mb-4">Наша история</h3>
              <p className="text-gray-800 dark:text-gray-100 mb-4 leading-relaxed">
                С 2015 года <span className="text-[#50714d] dark:text-[#e1da68] font-medium">Anemon</span> создает уникальные цветочные композиции, которые дарят радость и восхищение.
              </p>
              <p className="text-gray-800 dark:text-gray-100 leading-relaxed">
                Мы верим, что каждый букет — это произведение искусства, способное выразить ваши самые искренние чувства и эмоции.
              </p>
            </div>

            <div className="bg-white/30 dark:bg-gray-700/70 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-[#e1da68] mb-4">Наши ценности</h3>
              <ul className="space-y-2 text-gray-800 dark:text-gray-100">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#e1da68] rounded-full mr-2"></span>
                  Качество и свежесть каждого цветка
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#e1da68] rounded-full mr-2"></span>
                  Индивидуальный подход к каждому клиенту
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#e1da68] rounded-full mr-2"></span>
                  Профессионализм и мастерство наших флористов
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-[#e1da68] rounded-full mr-2"></span>
                  Забота об окружающей среде
                </li>
              </ul>
            </div>
          </div>

          {/* Правая колонка с преимуществами */}
          <div className="lg:col-span-7">
            <div className="bg-white/30 dark:bg-gray-700/70 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-[#e1da68] mb-6">Почему выбирают нас</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/20 dark:bg-gray-800/50 p-4 rounded-lg transition-all hover:bg-white/30 dark:hover:bg-gray-700/60">
                    <h4 className="text-lg font-medium text-[#50714d] dark:text-[#e1da68] mb-2">{feature.title}</h4>
                    <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
