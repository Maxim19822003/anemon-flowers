"use client";

import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

// Константа для базового пути
const BASE_PATH = '/anemon-flowers';

// Вспомогательная функция для получения полного пути к изображению
const getImagePath = (path: string) => {
  return `${BASE_PATH}${path}`;
};

const currentYear = new Date().getFullYear();

export function Footer() {
  const pathname = usePathname();

  // Определить, нужно ли добавлять хэш к ссылке, если находимся не на главной странице
  const getHref = (href: string) => {
    if (href.startsWith('/#') && pathname !== '/') {
      return '/' + href;
    }
    return href;
  };

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Логотип и краткое описание */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src={getImagePath("/images/logo.png")} alt="Anemon Flowers" width={40} height={40} className="h-10 w-auto" />
              <span className="text-xl font-bold text-[#d5ce5e]">Anemon</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Магазин свежих цветов и букетов для любого случая. Доставка по всему городу.
            </p>
            
            {/* Социальные сети */}
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://vk.com/club227392874" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#d5ce5e] transition-colors"
                aria-label="ВКонтакте"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.734 3.23C14.734 12.813 14 12.126 14 11.368V7.577c0-.4-.334-.577-.577-.577h-1.9A2.4 2.4 0 0 0 9 9.39c0 1.4 1.823 1.56 1.823 2.43v.98c0 .81-.957 1.69-1.823 1.69-2.3 0-5-2-5-6.5 0-3.3 2.7-6 6-6h8.5c3.3 0 6 2.7 6 6 0 3.3-2.7 6-6 6h-1.972c-1.17 0-2.5-.83-2.5-2s1.33-2 2.5-2h1.972c1.17 0 2-.83 2-2s-.83-2-2-2h-1.972c-1.17 0-2-.83-2-2s.83-2 2-2h1.972c2.8 0 5 2.2 5 5s-2.2 5-5 5h-1.972c-.57 0-1.1.16-1.6.44a3.8 3.8 0 0 0-1.9 3.16 3.8 3.8 0 0 0 3.9 3.9c1.83 0 3.53-1.06 4.4-2.48.4-.67.6-1.45.6-2.22V9a.5.5 0 0 1 .5-.5h1.972a4.8 4.8 0 0 1 4.28 7 .5.5 0 0 1-.88-.47A3.8 3.8 0 0 0 20 9a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h1.547a.5.5 0 0 1 0 1z" />
                </svg>
              </a>
              <a 
                href="https://t.me/anemon_flowers" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#d5ce5e] transition-colors"
                aria-label="Телеграм"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.572 3.021c-1.937-.7-7.91-2.613-13.276.045-3.99 2.012-5.25 5.835-5.296 10.107-.022 2.012.432 3.828.903 5.242.903 2.702 1.713 3.605 2.616 3.605.474 0 1.354-.452 2.233-2.265.498-1.04.996-2.373 1.47-3.413a.39.39 0 0 1 .373-.245h3.823a.399.399 0 0 1 .373.245c.498 1.04.973 2.35 1.471 3.413.879 1.813 1.759 2.265 2.233 2.265.903 0 1.713-.903 2.616-3.605.474-1.414.925-3.23.903-5.242-.045-4.272-1.305-8.095-5.296-10.107-.022 0-.022 0-.022-.022-.022 0-.022 0-.022 0zm-2.256 15.304c-.452 1.337-.855 1.971-1.067 2.152-.211-.18-.616-.813-1.067-2.152-.406-.88-.789-1.938-1.173-2.952h3.48c-.384 1.014-.79 2.072-1.173 2.952zm-9.83-2.952c-.384 1.014-.768 2.072-1.173 2.952-.452 1.337-.855 1.971-1.067 2.152-.211-.18-.616-.813-1.067-2.152-.366-.88-.76-1.938-1.152-2.952h4.46zm14.27-2.127c.02 1.684-.352 3.186-.768 4.387-.526 1.594-1.21 3.142-2.908 3.142-1.08 0-2.244-.632-3.323-2.797-.352-.723-.703-1.549-1.022-2.37h-6.16c-.32.821-.67 1.646-1.021 2.37-1.08 2.165-2.244 2.797-3.323 2.797-1.697 0-2.382-1.548-2.907-3.142-.417-1.2-.79-2.703-.769-4.387.044-3.726 1.102-6.945 4.453-8.619 4.54-2.264 9.704-.7 11.4-.067 3.35 1.674 4.409 4.893 4.453 8.62l-.105.045z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#d5ce5e] transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-gray-400 hover:text-[#d5ce5e] transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-[#d5ce5e] transition-colors">
                  Галерея
                </Link>
              </li>
              <li>
                <Link href={getHref("/#about")} className="text-gray-400 hover:text-[#d5ce5e] transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href={getHref("/#testimonials")} className="text-gray-400 hover:text-[#d5ce5e] transition-colors">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link href={getHref("/#contact")} className="text-gray-400 hover:text-[#d5ce5e] transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Контактная информация */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                г. Калуга ул. Платова 19
              </li>
              <li className="text-gray-400">
                <a href="tel:+79610063116" className="hover:text-[#d5ce5e] transition-colors">
                  +7 961 006 31 16
                </a>
              </li>
              <li className="text-gray-400">
                <a href="mailto:Anemon_mon_flowers@gmail.com" className="hover:text-[#d5ce5e] transition-colors">
                  Anemon_mon_flowers@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                Пн-Пт: 8:00 - 20:00
              </li>
              <li className="text-gray-400">
                Сб-Вс: 10:00 - 19:00
              </li>
            </ul>
          </div>

          {/* Подписка на новости */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Подпишитесь на новости</h3>
            <p className="text-gray-400 text-sm mb-4">
              Получайте информацию о новых коллекциях и специальных предложениях.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Ваш email"
                className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-gray-300 text-sm w-full focus:outline-none focus:ring-1 focus:ring-[#d5ce5e]"
              />
              <button className="bg-[#3a543a] hover:bg-[#304830] px-4 py-2 rounded-r-md transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© {currentYear} Anemon. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#d5ce5e] transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="hover:text-[#d5ce5e] transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
