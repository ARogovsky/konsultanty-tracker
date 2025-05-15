import type React from 'react';

const ServiceDetails: React.FC = () => {
  return (
    <section id="service" className="bg-gradient-to-b from-mipt-light to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-mipt-purple-dark md:text-4xl">
          Наші послуги в ГО «Консультанти»
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
          Ми допомагаємо ВНЗ долучитися до національної мережі стартап-шкіл, інкубаторів та акселераторів, отримувати фінансування та реалізовувати інновації через експертні консультації, практичну підтримку та сертифікацію.
        </p>

        <h3 className="mb-6 text-2xl font-bold text-mipt-purple">Чому обирають нас</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-12">
          <div className="rounded-xl bg-mipt-purple p-6 text-white shadow-lg">
            <h4 className="mb-2 text-lg font-semibold">Досвідчені експерти</h4>
            <p>Наші фахівці з комерціалізації інновацій та створення стартап-шкіл знають, як відповідати вимогам МОН.</p>
          </div>
          <div className="rounded-xl bg-mipt-pink p-6 text-white shadow-lg">
            <h4 className="mb-2 text-lg font-semibold">Практичні кейси</h4>
            <p>Розробляємо реальні проєкти ВНЗ для переконливих заявок до мережі.</p>
          </div>
          <div className="rounded-xl bg-mipt-orange p-6 text-white shadow-lg">
            <h4 className="mb-2 text-lg font-semibold">Офіційна сертифікація</h4>
            <p>Сертифікат після захисту вашого проєкту стартап-школи.</p>
          </div>
        </div>

        <h3 className="mb-6 text-2xl font-bold text-mipt-purple">Етапи підтримки</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-12">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h4 className="mb-2 text-lg font-semibold text-mipt-purple-dark">Етап 1: Підготовка заявки</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Вивчення вимог МОН до стартап-шкіл.</li>
              <li>Інструменти для структуризації діяльності.</li>
              <li>Допомога з описом проєкту та інфраструктури.</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h4 className="mb-2 text-lg font-semibold text-mipt-purple-dark">Етап 2: Розвиток інновацій</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Аналіз потреб ВНЗ та стартапів.</li>
              <li>Консультації з комерціалізації розробок.</li>
              <li>Стратегії залучення партнерів і менторів.</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h4 className="mb-2 text-lg font-semibold text-mipt-purple-dark">Етап 3: Оцінка ефективності</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Визначення метрик для оцінки проєкту.</li>
              <li>Аналітика та підготовка звітів для МОН.</li>
              <li>Планування залучення фінансування.</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h4 className="mb-2 text-lg font-semibold text-mipt-purple-dark">Етап 4: Практика та захист</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Створення презентації проєкту.</li>
              <li>Супровід реальних кейсів ВНЗ.</li>
              <li>Захист проєкту та отримання сертифіката.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <h3 className="mb-4 text-2xl font-bold text-mipt-purple-dark">Як почати</h3>
          <p className="mb-6 text-center text-lg text-gray-700 max-w-xl">
            Подайте заявку на сайті та станьте частиною інноваційної екосистеми!
          </p>
          <a href="/contact" className="rounded-lg bg-mipt-pink px-8 py-3 font-medium text-white hover:bg-opacity-90">
            Подати заявку
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails; 