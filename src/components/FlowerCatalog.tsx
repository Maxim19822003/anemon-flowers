"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ShoppingBag } from "lucide-react";
import { useCart } from "./Cart";

export type FlowerProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export const flowers: FlowerProduct[] = [
  {
    id: 1,
    name: "Букет пурпурных анемонов",
    description: "Яркий букет из свежих пурпурных анемонов. Символизирует искренность и предвкушение.",
    price: 3200,
    image: "/images/purple-anemones.jpg",
    category: "Анемоны"
  },
  {
    id: 2,
    name: "Букет красных роз",
    description: "Классический букет из 11 свежих красных роз. Идеальный подарок для выражения любви и восхищения.",
    price: 2500,
    image: "/images/red-roses.jpg",
    category: "Розы"
  },
  {
    id: 3,
    name: "Розовые пионы",
    description: "Нежные розовые пионы в изысканной упаковке. Символ процветания и счастливого брака.",
    price: 3200,
    image: "/images/pink-peonies.jpg",
    category: "Пионы"
  },
  {
    id: 4,
    name: "Белая лаванда",
    description: "Ароматный букет белой лаванды, создающий атмосферу спокойствия и умиротворения.",
    price: 1800,
    image: "/images/white-lavender.jpg",
    category: "Лаванда"
  },
  {
    id: 5,
    name: "Смешанный букет",
    description: "Яркий букет из сезонных цветов. Каждый букет уникален и создается из лучших доступных цветов.",
    price: 2900,
    image: "/images/mixed-bouquet.jpg",
    category: "Смешанные"
  },
];

export function FlowerCatalog() {
  const [selectedFlower, setSelectedFlower] = useState<FlowerProduct | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { addToCart } = useCart();

  const handleOpenDialog = (flower: FlowerProduct) => {
    setSelectedFlower(flower);
    setIsDialogOpen(true);
  };

  const handleAddToCart = (flower: FlowerProduct) => {
    addToCart({
      id: flower.id,
      name: flower.name,
      price: flower.price,
      image: flower.image
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(price);
  };

  return (
    <section id="catalog" className="py-16 md:py-24 backdrop-blur-sm">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Наш каталог цветов
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Выберите из нашей коллекции свежих букетов, созданных с любовью и вниманием к деталям
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {flowers.map((flower) => (
            <Card key={flower.id} className="overflow-hidden transition-all hover:shadow-lg border-0 bg-white/90 dark:bg-gray-800/80">
              <div className="relative h-64 w-full">
                <Image
                  src={flower.image}
                  alt={flower.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#50714d] dark:text-[#d5ce5e]">{flower.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{flower.description}</p>
                <p className="text-[#50714d] dark:text-[#d5ce5e] font-bold mt-2">{formatPrice(flower.price)}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex space-x-2">
                <Button
                  onClick={() => handleOpenDialog(flower)}
                  variant="outline"
                  className="flex-1 border-[#50714d] text-[#50714d] hover:bg-[#50714d]/10 dark:border-[#d5ce5e] dark:text-[#d5ce5e] dark:hover:bg-[#d5ce5e]/10"
                >
                  Подробнее
                </Button>
                <Button
                  onClick={() => handleAddToCart(flower)}
                  className="bg-[#50714d] hover:bg-[#3f5a3c] dark:bg-[#3a543a] dark:hover:bg-[#304830] dark:text-white"
                >
                  <ShoppingBag className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedFlower} onOpenChange={setIsDialogOpen}>
        {selectedFlower && (
          <DialogContent className="max-w-3xl bg-white dark:bg-gray-800">
            <DialogHeader>
              <DialogTitle className="text-[#50714d] dark:text-[#d5ce5e]">{selectedFlower.name}</DialogTitle>
              <DialogDescription className="text-gray-600 dark:text-gray-300">
                Категория: {selectedFlower.category}
              </DialogDescription>
            </DialogHeader>
            <div className="relative h-64 w-full my-4">
              <Image
                src={selectedFlower.image}
                alt={selectedFlower.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedFlower.description}</p>
            <div className="flex justify-between items-center">
              <p className="text-[#50714d] dark:text-[#d5ce5e] text-xl font-bold">{formatPrice(selectedFlower.price)}</p>
              <Button
                className="bg-[#50714d] hover:bg-[#3f5a3c] dark:bg-[#3a543a] dark:hover:bg-[#304830]"
                onClick={() => {
                  handleAddToCart(selectedFlower);
                  setIsDialogOpen(false);
                }}
              >
                В корзину
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
