"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Константа для базового пути
const BASE_PATH = '/anemon-flowers';

// Вспомогательная функция для получения полного пути к изображению
const getImagePath = (path: string) => {
  return `${BASE_PATH}${path}`;
};

// Используем только изображения, которые точно существуют в репозитории
const testimonials = [
  {
    id: 1,
    name: "Елена Соколова",
    role: "Постоянный клиент",
    testimonial: "Я всегда покупаю цветы в Anemon. Их букеты невероятно свежие и красивые, а упаковка просто потрясающая. Спасибо за ваш профессионализм и внимание к деталям!",
    image: "/images/happy-customer1.jpg"
  },
  {
    id: 2,
    name: "Михаил Петров",
    role: "Новый клиент",
    testimonial: "Недавно заказал букет для жены на годовщину. Был приятно удивлен скоростью доставки и качеством цветов. Букет простоял свежим больше недели! Обязательно буду заказывать снова.",
    image: "/images/happy-customer2.jpg"
  },
  {
    id: 3,
    name: "Анна Кузнецова",
    role: "Корпоративный клиент",
    testimonial: "Наша компания регулярно заказывает цветы для офиса и мероприятий. Anemon всегда предоставляет отличный сервис и прекрасные композиции. Рекомендую всем!",
    image: "/images/happy-customer3.jpg"
  },
  {
    id: 4,
    name: "Дмитрий Иванов",
    role: "Постоянный клиент",
    testimonial: "Уже третий год заказываю цветы только в этом магазине. Всегда помогают выбрать идеальный букет под любой случай. Качество цветов и обслуживание на высшем уровне!",
    image: "/images/happy-customer4.jpg"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 dark:bg-gray-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e1da68] mb-4">
            Что говорят наши клиенты
          </h2>
          <p className="text-white/80 dark:text-gray-300 max-w-2xl mx-auto">
            Мы гордимся тем, что наши клиенты остаются довольны нашей работой.
            Вот некоторые отзывы от людей, которые выбрали Anemon.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="h-full dark:bg-gray-800 border-0 bg-white/80">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={getImagePath(testimonial.image)}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#50714d] dark:text-[#e1da68]">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.testimonial}"</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="relative static mr-2 bg-[#50714d] hover:bg-[#3f5a3c] text-white dark:bg-[#d5ce5e] dark:hover:bg-[#e1da68] dark:text-[#3a543a]" />
            <CarouselNext className="relative static bg-[#50714d] hover:bg-[#3f5a3c] text-white dark:bg-[#d5ce5e] dark:hover:bg-[#e1da68] dark:text-[#3a543a]" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
