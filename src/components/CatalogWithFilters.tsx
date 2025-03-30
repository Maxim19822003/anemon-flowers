"use client";

import { FlowerProduct, flowers } from "./FlowerCatalog";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ShoppingBag, SlidersHorizontal } from "lucide-react";
import { useCart } from "./Cart";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Константа для базового пути
const BASE_PATH = '/anemon-flowers';

// Определяем типы для фильтров
type PriceRange = [number, number];
type FlowerComposition = {
  name: string;
  checked: boolean;
}

// Получение уникальных категорий цветов из коллекции
const getUniqueCategories = () => {
  const categories = flowers.map(flower => flower.category);
  const uniqueCategories = [...new Set(categories)];

  return uniqueCategories.map(category => ({
    name: category,
    checked: false,
  }));
};

// Нахождение минимальной и максимальной цены
const findPriceRange = () => {
  const prices = flowers.map(flower => flower.price);
  return [
    Math.min(...prices),
    Math.max(...prices)
  ] as PriceRange;
};

export function CatalogWithFilters() {
  const [selectedFlower, setSelectedFlower] = useState<FlowerProduct | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { addToCart } = useCart();

  // Состояния для фильтров
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<PriceRange>(findPriceRange());
  const [currentPriceRange, setCurrentPriceRange] = useState<PriceRange>(findPriceRange());
  const [compositions, setCompositions] = useState<FlowerComposition[]>(getUniqueCategories());
  const [filteredFlowers, setFilteredFlowers] = useState(flowers);

  // Форматирование цены
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(price);
  };

  // Вспомогательная функция для получения полного пути к изображению
  const getImagePath = (path: string) => {
    return `${BASE_PATH}${path}`;
  };

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

  // Обработчик изменения диапазона цен
  const handlePriceChange = (values: number[]) => {
    setCurrentPriceRange([values[0], values[1]]);
  };

  // Обработчик изменения состава букета
  const handleCompositionChange = (index: number, checked: boolean) => {
    const newCompositions = [...compositions];
    newCompositions[index].checked = checked;
    setCompositions(newCompositions);
  };

  // Применение фильтров
  const applyFilters = () => {
    const filtered = flowers.filter(flower => {
      // Фильтрация по цене
      if (flower.price < currentPriceRange[0] || flower.price > currentPriceRange[1]) {
        return false;
      }

      // Фильтрация по составу букета
      const activeCategories = compositions.filter(comp => comp.checked).map(comp => comp.name);
      if (activeCategories.length > 0 && !activeCategories.includes(flower.category)) {
        return false;
      }

      return true;
    });

    setFilteredFlowers(filtered);
    setIsFilterOpen(false);
  };

  // Сброс фильтров
  const resetFilters = () => {
    setCurrentPriceRange(findPriceRange());
    setCompositions(getUniqueCategories());
    setFilteredFlowers(flowers);
    setIsFilterOpen(false);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white dark:text-[#e1da68] mb-2">
              Каталог цветов
            </h1>
            <p className="text-white/80 dark:text-gray-300 mb-4 md:mb-0">
            Создаем букеты для важных событий Вашей жизни .
            Откройте для себя мир красоты и изящества с «Анемон»!
            В нашем каталоге вы найдёте потрясающие цветочные букеты и композиции,
            созданные с любовью и вдохновением.
            Погрузитесь в атмосферу уюта и гармонии вместе с нами!
            </p>
          </div>

          {/* Кнопка фильтра */}
          <Button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            variant="outline"
            className="flex items-center space-x-2 bg-white/20 dark:bg-gray-800 border-[#50714d] dark:border-[#d5ce5e] text-white"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span>Фильтры</span>
          </Button>
        </div>

        {/* Панель фильтров */}
        {isFilterOpen && (
          <div className="bg-white/90 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4 text-[#50714d] dark:text-[#d5ce5e]">Фильтры</h3>

            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3 text-[#50714d] dark:text-[#d5ce5e]">Диапазон цен</h4>
              <div className="px-2">
                <Slider
                  defaultValue={[currentPriceRange[0], currentPriceRange[1]]}
                  min={priceRange[0]}
                  max={priceRange[1]}
                  step={100}
                  value={[currentPriceRange[0], currentPriceRange[1]]}
                  onValueChange={handlePriceChange}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                  <span>{formatPrice(currentPriceRange[0])}</span>
                  <span>{formatPrice(currentPriceRange[1])}</span>
                </div>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3 text-[#50714d] dark:text-[#d5ce5e]">Состав букета</h4>
              <div className="space-y-2">
                {compositions.map((composition, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox
                      id={`composition-${index}`}
                      checked={composition.checked}
                      onCheckedChange={(checked) => handleCompositionChange(index, checked as boolean)}
                    />
                    <Label
                      htmlFor={`composition-${index}`}
                      className="text-gray-700 dark:text-gray-300"
                    >
                      {composition.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={applyFilters}
                className="bg-[#50714d] hover:bg-[#3f5a3c] text-white dark:bg-[#d5ce5e] dark:hover:bg-[#e1da68] dark:text-[#3a543a]"
              >
                Применить
              </Button>
              <Button
                onClick={resetFilters}
                variant="outline"
                className="border-[#50714d] text-[#50714d] hover:bg-[#50714d]/10 dark:border-[#d5ce5e] dark:text-[#d5ce5e] dark:hover:bg-[#d5ce5e]/10"
              >
                Сбросить
              </Button>
            </div>
          </div>
        )}

        {/* Результаты фильтрации */}
        {filteredFlowers.length === 0 ? (
          <div className="text-center py-10">
            <h3 className="text-xl font-semibold text-white dark:text-[#e1da68] mb-2">Нет результатов</h3>
            <p className="text-white/80 dark:text-gray-300">
              К сожалению, по вашим критериям ничего не найдено. Попробуйте изменить фильтры.
            </p>
            <Button
              onClick={resetFilters}
              className="mt-4 bg-[#50714d] hover:bg-[#3f5a3c] text-white dark:bg-[#d5ce5e] dark:hover:bg-[#e1da68] dark:text-[#3a543a]"
            >
              Сбросить фильтры
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFlowers.map((flower) => (
              <Card key={flower.id} className="overflow-hidden transition-all hover:shadow-lg border-0 bg-white/90 dark:bg-gray-800">
                <div className="relative h-64 w-full">
                  <Image
                    src={getImagePath(flower.image)}
                    alt={flower.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-[#50714d] dark:text-[#d5ce5e]">{flower.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{flower.description}</p>
                    </div>
                    <span className="inline-block px-2 py-1 bg-[#e1da68]/20 text-[#50714d] dark:text-[#d5ce5e] text-xs rounded">
                      {flower.category}
                    </span>
                  </div>
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
        )}
      </div>

      {/* Диалог с деталями букета */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
                src={getImagePath(selectedFlower.image)}
                alt={selectedFlower.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedFlower.description}</p>
            <div className="flex justify-between items-center">
              <p className="text-[#50714d] dark:text-[#d5ce5e] text-xl font-bold">
                {formatPrice(selectedFlower.price)}
              </p>
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
