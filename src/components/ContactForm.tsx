"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать не менее 2 символов" }),
  email: z.string().email({ message: "Пожалуйста, введите корректный email адрес" }),
  phone: z.string().min(10, { message: "Пожалуйста, введите корректный номер телефона" }),
  message: z.string().min(10, { message: "Сообщение должно содержать не менее 10 символов" }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    // В реальном приложении здесь будет отправка данных на сервер
    console.log(values);
    setIsSubmitted(true);
    form.reset();

    // Сбросить сообщение об успешной отправке через 5 секунд
    setTimeout(() => setIsSubmitted(false), 5000);
  }

  return (
    <section id="contact" className="py-16 bg-white/20 dark:bg-gray-800/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e1da68] mb-4">Свяжитесь с нами</h2>
          <p className="text-white/80 dark:text-gray-300">
            У вас есть вопросы или особые пожелания? Заполните форму ниже, и мы свяжемся с вами в ближайшее время.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#e1da68]">Наши контакты</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-[#e1da68]">Адрес:</p>
                <p className="text-white/80 dark:text-gray-300"> г. Калуга ул. Платова 19</p>
              </div>
              <div>
                <p className="font-medium text-[#e1da68]">Телефон:</p>
                <p className="text-white/80 dark:text-gray-300">+7 961 006 31 16
                </p>
              </div>
              <div>
                <p className="font-medium text-[#e1da68]">Email:</p>
                <p className="text-white/80 dark:text-gray-300">Anemon_mon_flowers@gmail.com </p>
              </div>
              <div>
                <p className="font-medium text-[#e1da68]">Часы работы:</p>
                <p className="text-white/80 dark:text-gray-300">Пн-Пт: 8:00 - 20:00</p>
                <p className="text-white/80 dark:text-gray-300">Сб-Вс: 10:00 - 19:00</p>
              </div>
              <div>
                <p className="font-medium text-[#e1da68]">Социальные сети:</p>
                <div className="flex space-x-4 mt-2">
                  <a 
                    href="https://vk.com/club227392874" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/80 hover:text-[#e1da68] transition-colors"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.734 3.23C14.734 12.813 14 12.126 14 11.368V7.577c0-.4-.334-.577-.577-.577h-1.9A2.4 2.4 0 0 0 9 9.39c0 1.4 1.823 1.56 1.823 2.43v.98c0 .81-.957 1.69-1.823 1.69-2.3 0-5-2-5-6.5 0-3.3 2.7-6 6-6h8.5c3.3 0 6 2.7 6 6 0 3.3-2.7 6-6 6h-1.972c-1.17 0-2.5-.83-2.5-2s1.33-2 2.5-2h1.972c1.17 0 2-.83 2-2s-.83-2-2-2h-1.972c-1.17 0-2-.83-2-2s.83-2 2-2h1.972c2.8 0 5 2.2 5 5s-2.2 5-5 5h-1.972c-.57 0-1.1.16-1.6.44a3.8 3.8 0 0 0-1.9 3.16 3.8 3.8 0 0 0 3.9 3.9c1.83 0 3.53-1.06 4.4-2.48.4-.67.6-1.45.6-2.22V9a.5.5 0 0 1 .5-.5h1.972a4.8 4.8 0 0 1 4.28 7 .5.5 0 0 1-.88-.47A3.8 3.8 0 0 0 20 9a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h1.547a.5.5 0 0 1 0 1z" />
                      </svg>
                      ВКонтакте
                    </div>
                  </a>
                  <a 
                    href="https://t.me/anemon_flowers" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/80 hover:text-[#e1da68] transition-colors"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.572 3.021c-1.937-.7-7.91-2.613-13.276.045-3.99 2.012-5.25 5.835-5.296 10.107-.022 2.012.432 3.828.903 5.242.903 2.702 1.713 3.605 2.616 3.605.474 0 1.354-.452 2.233-2.265.498-1.04.996-2.373 1.47-3.413a.39.39 0 0 1 .373-.245h3.823a.399.399 0 0 1 .373.245c.498 1.04.973 2.35 1.471 3.413.879 1.813 1.759 2.265 2.233 2.265.903 0 1.713-.903 2.616-3.605.474-1.414.925-3.23.903-5.242-.045-4.272-1.305-8.095-5.296-10.107-.022 0-.022 0-.022-.022-.022 0-.022 0-.022 0zm-2.256 15.304c-.452 1.337-.855 1.971-1.067 2.152-.211-.18-.616-.813-1.067-2.152-.406-.88-.789-1.938-1.173-2.952h3.48c-.384 1.014-.79 2.072-1.173 2.952zm-9.83-2.952c-.384 1.014-.768 2.072-1.173 2.952-.452 1.337-.855 1.971-1.067 2.152-.211-.18-.616-.813-1.067-2.152-.366-.88-.76-1.938-1.152-2.952h4.46zm14.27-2.127c.02 1.684-.352 3.186-.768 4.387-.526 1.594-1.21 3.142-2.908 3.142-1.08 0-2.244-.632-3.323-2.797-.352-.723-.703-1.549-1.022-2.37h-6.16c-.32.821-.67 1.646-1.021 2.37-1.08 2.165-2.244 2.797-3.323 2.797-1.697 0-2.382-1.548-2.907-3.142-.417-1.2-.79-2.703-.769-4.387.044-3.726 1.102-6.945 4.453-8.619 4.54-2.264 9.704-.7 11.4-.067 3.35 1.674 4.409 4.893 4.453 8.62l-.105.045z" />
                      </svg>
                      Телеграм
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/90 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-8">
                <div className="text-green-600 mb-4 text-4xl">✓</div>
                <h3 className="text-xl font-semibold text-green-600 mb-2">Сообщение отправлено!</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-200">Имя</FormLabel>
                        <FormControl>
                          <Input placeholder="Введите ваше имя" {...field} className="dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-200">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Введите ваш email" {...field} className="dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-200">Телефон</FormLabel>
                        <FormControl>
                          <Input placeholder="Введите ваш телефон" {...field} className="dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-200">Сообщение</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Введите ваше сообщение" rows={4} {...field} className="dark:bg-gray-700 dark:text-white dark:border-gray-600" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-[#3a543a] hover:bg-[#4b6a4b] dark:bg-[#d5ce5e] dark:hover:bg-[#e1da68] dark:text-[#3a543a]">Отправить</Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
