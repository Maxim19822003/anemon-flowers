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
      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 16.615h-1.744c-.66 0-.864-.525-2.05-1.725-1.032-.967-1.483-.967-1.735-.967-.356 0-.458.102-.458.593v1.575c0 .424-.135.594-1.235.594-1.83 0-3.864-1.104-5.294-3.18C4.863 10.66 4.336 8.303 4.336 7.795c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.743c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.372 0 .508.203.508.643v3.464c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.118-.237.305-.457.745-.457h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.03-2.354 4.03-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
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
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.308.23-.467.23-.16 0-.34-.23-.34-.23l.013-3.975 7.246-6.589c.173-.169-.044-.265-.262-.098l-8.98 5.647-3.87-1.196c-.86-.242-.863-.855.217-1.29l15.08-5.83c.673-.252 1.327.172 1.083 1.16z"/>
    </svg>
  </a>
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
