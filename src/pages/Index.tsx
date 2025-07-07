import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    attendance: "",
  });

  const targetDate = new Date("2025-07-26T17:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за ответ! Ваша заявка принята.");
    setFormData({ name: "", email: "", message: "", attendance: "" });
  };

  return (
    <div className="min-h-screen bg-birthday-light">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-birthday-cream to-birthday-beige py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <Icon
              name="Sparkles"
              size={48}
              className="mx-auto mb-6 text-birthday-red"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-birthday-dark-red mb-6">
              Полине 24!
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Приглашаем вас отметить мой день рождения
              <br />
              26 июля 2025 в 17:00
            </p>
            <div className="inline-flex items-center gap-2 bg-birthday-red text-white px-6 py-3 rounded-full text-lg font-semibold">
              <Icon name="GraduationCap" size={24} />
              Празднуем красный диплом магистра!
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-birthday-dark-red mb-12">
            До праздника осталось
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: timeLeft.days, label: "Дней" },
              { value: timeLeft.hours, label: "Часов" },
              { value: timeLeft.minutes, label: "Минут" },
              { value: timeLeft.seconds, label: "Секунд" },
            ].map((item, index) => (
              <Card key={index} className="border-birthday-red border-2">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-birthday-red mb-2">
                    {item.value}
                  </div>
                  <div className="text-gray-600">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-birthday-beige">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-birthday-dark-red mb-6">
                О празднике
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                В этом году мне исполняется 24 года, и я хочу отметить это
                особенно! Недавно я получила красный диплом магистра, поэтому
                этот день рождения особенно значимый для меня.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Shirt" size={24} className="text-birthday-red" />
                  <span className="text-lg">
                    Дресс-код: яркие красные акценты в одежде
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={24} className="text-birthday-red" />
                  <span className="text-lg">Место: уютная беседка</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={24} className="text-birthday-red" />
                  <span className="text-lg">Время: 26 июля, 17:00</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <img
                src="/img/6522460f-4f29-4c9d-9a0b-470751a13afc.jpg"
                alt="Graduation celebration"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-birthday-dark-red text-center mb-12">
            Галерея
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="/img/b0052397-0bdd-4136-9fe4-91f0f2332f5b.jpg"
              alt="Birthday celebration"
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/img/6522460f-4f29-4c9d-9a0b-470751a13afc.jpg"
              alt="Graduation celebration"
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src="/img/21d07ae2-fb01-4ff6-805d-ca0336f9940c.jpg"
              alt="Gazebo party setup"
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 bg-birthday-beige">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-birthday-dark-red mb-8">
            Локация
          </h2>
          <Card className="border-birthday-red border-2">
            <CardContent className="p-8">
              <Icon
                name="MapPin"
                size={48}
                className="mx-auto mb-6 text-birthday-red"
              />
              <h3 className="text-2xl font-bold text-birthday-dark-red mb-4">
                Уютная беседка
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Празднование пройдет в красивой беседке с видом на природу.
                Уютная атмосфера и свежий воздух создадут идеальные условия для
                веселья!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="Car" size={20} className="text-birthday-red" />
                  <span>Парковка есть</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    name="Umbrella"
                    size={20}
                    className="text-birthday-red"
                  />
                  <span>Крытая беседка</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Music" size={20} className="text-birthday-red" />
                  <span>Музыка и танцы</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-birthday-dark-red text-center mb-12">
            Подтверждение участия
          </h2>
          <Card className="border-birthday-red border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Введите email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сможете ли вы прийти? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="attendance"
                        value="yes"
                        checked={formData.attendance === "yes"}
                        onChange={handleInputChange}
                        className="mr-2"
                        required
                      />
                      Да, буду!
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="attendance"
                        value="no"
                        checked={formData.attendance === "no"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      К сожалению, не смогу
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Пожелания или вопросы
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full"
                    placeholder="Напишите ваши пожелания или вопросы..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-birthday-red hover:bg-birthday-dark-red text-white py-3 text-lg font-semibold"
                >
                  Отправить ответ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-birthday-beige">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-birthday-dark-red mb-8">
            Контакты
          </h2>
          <Card className="border-birthday-red border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Icon
                    name="Phone"
                    size={32}
                    className="mx-auto mb-4 text-birthday-red"
                  />
                  <h3 className="text-xl font-bold text-birthday-dark-red mb-2">
                    Телефон
                  </h3>
                  <p className="text-gray-700">+7 (xxx) xxx-xx-xx</p>
                </div>
                <div>
                  <Icon
                    name="Mail"
                    size={32}
                    className="mx-auto mb-4 text-birthday-red"
                  />
                  <h3 className="text-xl font-bold text-birthday-dark-red mb-2">
                    Email
                  </h3>
                  <p className="text-gray-700">polina@example.com</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-birthday-red">
                <p className="text-gray-700 text-lg">
                  Если у вас есть вопросы или нужна дополнительная информация,
                  не стесняйтесь обращаться!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-birthday-dark-red text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="Heart" size={32} className="mx-auto mb-4" />
          <p className="text-lg">
            С нетерпением жду встречи с вами на моем дне рождения!
          </p>
          <p className="text-sm mt-4 opacity-80">С любовью, Полина ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
