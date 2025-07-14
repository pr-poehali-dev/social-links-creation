import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tertiary to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="TreePine" className="text-secondary" size={32} />
              <h1 className="text-2xl font-cormorant font-bold text-primary">
                Гранд Кафе "Терраса"
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
              <a href="#gallery" className="text-gray-700 hover:text-primary transition-colors">Галерея</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-primary mb-6">
            Добро пожаловать в<br />
            <span className="text-secondary">Гранд Кафе "Терраса"</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-sans">
            Изысканная кухня в атмосфере загородного уюта. Наслаждайтесь 
            блюдами высокой кухни в окружении природы и комфорта.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
              <Icon name="Calendar" size={20} className="mr-2" />
              Забронировать столик
            </Button>
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 text-lg">
              <Icon name="Menu" size={20} className="mr-2" />
              Посмотреть меню
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-cormorant font-bold text-primary mb-6">
                О нашем ресторане
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Гранд Кафе "Терраса" — это место, где сочетаются традиции высокой кухни 
                и уютная атмосфера загородного дома. Мы создали пространство, которое 
                объединяет изысканность городского ресторана с теплотой дачной террасы.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <Icon name="Clock" className="text-secondary mx-auto mb-2" size={32} />
                  <h4 className="font-cormorant font-semibold text-primary">Открыто ежедневно</h4>
                  <p className="text-gray-600">10:00 - 23:00</p>
                </div>
                <div className="text-center">
                  <Icon name="Users" className="text-secondary mx-auto mb-2" size={32} />
                  <h4 className="font-cormorant font-semibold text-primary">Вместимость</h4>
                  <p className="text-gray-600">До 80 гостей</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-primary hover:bg-primary/90">
                  <Icon name="Phone" size={18} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="/img/6826cc23-1208-41f3-b849-8f7c5fd87ce1.jpg" 
                    alt="Терраса ресторана" 
                    className="w-full h-64 object-cover"
                  />
                </CardContent>
              </Card>
              <div className="grid grid-cols-2 gap-4">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <img 
                      src="/img/a94f3f4d-90cd-43bb-81d7-8804eebe737b.jpg" 
                      alt="Блюда ресторана" 
                      className="w-full h-32 object-cover"
                    />
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <img 
                      src="/img/b116063f-74bd-446a-89c6-a9f4defc76a0.jpg" 
                      alt="Интерьер ресторана" 
                      className="w-full h-32 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-cormorant font-bold text-primary mb-4">
              Наша галерея
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Погрузитесь в атмосферу нашего ресторана через фотографии интерьера, 
              блюд и особых моментов.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img 
                  src="/img/6826cc23-1208-41f3-b849-8f7c5fd87ce1.jpg" 
                  alt="Терраса" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h4 className="font-cormorant font-semibold text-primary">Летняя терраса</h4>
                  <p className="text-gray-600 text-sm">Уютное место для трапез на свежем воздухе</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img 
                  src="/img/a94f3f4d-90cd-43bb-81d7-8804eebe737b.jpg" 
                  alt="Блюда" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h4 className="font-cormorant font-semibold text-primary">Авторская кухня</h4>
                  <p className="text-gray-600 text-sm">Изысканные блюда от шеф-повара</p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img 
                  src="/img/b116063f-74bd-446a-89c6-a9f4defc76a0.jpg" 
                  alt="Интерьер" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h4 className="font-cormorant font-semibold text-primary">Элегантный интерьер</h4>
                  <p className="text-gray-600 text-sm">Современный комфорт в классическом стиле</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Social Section */}
      <section id="contact" className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-cormorant font-bold mb-6">
                Контакты
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={24} />
                  <div>
                    <p className="font-semibold">Адрес:</p>
                    <p>г. Москва, Дачный проезд, 15</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={24} />
                  <div>
                    <p className="font-semibold">Телефон:</p>
                    <p>+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={24} />
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p>info@terrassa-cafe.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={24} />
                  <div>
                    <p className="font-semibold">Время работы:</p>
                    <p>Ежедневно: 10:00 - 23:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-cormorant font-bold mb-6">
                Следите за нами
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Будьте в курсе новостей, специальных предложений и мероприятий 
                нашего ресторана в социальных сетях.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="Instagram" size={20} className="mr-2" />
                  Instagram
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="Facebook" size={20} className="mr-2" />
                  Facebook
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Telegram
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="Phone" size={20} className="mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="TreePine" className="text-secondary" size={24} />
            <h4 className="text-xl font-cormorant font-bold">
              Гранд Кафе "Терраса"
            </h4>
          </div>
          <p className="text-gray-400 mb-4">
            © 2024 Гранд Кафе "Терраса". Все права защищены.
          </p>
          <p className="text-gray-500 text-sm">
            Изысканная кухня в атмосфере загородного уюта
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;