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
                        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 16.615h-1.744c-.66 0-.864-.525-2.05-1.725-1.032-.967-1.483-.967-1.735-.967-.356 0-.458.102-.458.593v1.575c0 .424-.135.594-1.235.594-1.83 0-3.864-1.104-5.294-3.18C4.863 10.66 4.336 8.303 4.336 7.795c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.743c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.372 0 .508.203.508.643v3.464c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.118-.237.305-.457.745-.457h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.03-2.354 4.03-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
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
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.308.23-.467.23-.16 0-.34-.23-.34-.23l.013-3.975 7.246-6.589c.173-.169-.044-.265-.262-.098l-8.98 5.647-3.87-1.196c-.86-.242-.863-.855.217-1.29l15.08-5.83c.673-.252 1.327.172 1.083 1.16z"/>
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
