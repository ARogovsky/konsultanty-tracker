import type React from 'react';
import { useState } from 'react';

// Simple Accordion component
const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 rounded-lg bg-white/5 backdrop-blur-sm">
      <button
        className="flex w-full items-center justify-between p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{title}</span>
        <span className="text-xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="border-t border-white/10 p-4">
          {children}
        </div>
      )}
    </div>
  );
};

const ProgramDetails: React.FC = () => {
  return (
    <section id="program" className="bg-gradient-to-b from-mipt-light to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-mipt-purple-dark md:text-4xl">
          Програма школи менторів ГО КОНСУЛЬТАНТИ
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-mipt-purple">
              Декілька слів про переваги програми
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-mipt-pink p-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-mipt-purple-dark">Експерти-практики</h4>
                  <p className="mt-1 text-gray-600">
                    Навчання ведуть практикуючі ментори з досвідом роботи з великими компаніями та стартапами
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-mipt-pink p-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-mipt-purple-dark">Реальні кейси</h4>
                  <p className="mt-1 text-gray-600">
                    Практика з реальними проєктами та командами під керівництвом досвідчених наставників
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-mipt-pink p-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-mipt-purple-dark">Державний диплом</h4>
                  <p className="mt-1 text-gray-600">
                    Диплом про професійну перепідготовку ГО КОНСУЛЬТАНТИ державного зразка
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-mipt-purple-dark p-6 text-white md:p-8">
            <h3 className="mb-6 text-2xl font-bold">Модулі програми</h3>

            <div className="space-y-2">
              <Accordion title="Модуль 1: Основи менторингу">
                <ul className="list-inside list-disc space-y-2">
                  <li>Хто такий ментор і чим він займається</li>
                  <li>Інструменти ментора</li>
                  <li>Методологія роботи з проєктами</li>
                  <li>Основи комунікації та фасилітації</li>
                </ul>
              </Accordion>

              <Accordion title="Модуль 2: Робота з командами">
                <ul className="list-inside list-disc space-y-2">
                  <li>Діагностика команд</li>
                  <li>Виявлення проблем і вузьких місць</li>
                  <li>Техніки фасилітації групової роботи</li>
                  <li>Управління конфліктами</li>
                </ul>
              </Accordion>

              <Accordion title="Модуль 3: Метрики та системи оцінки">
                <ul className="list-inside list-disc space-y-2">
                  <li>Визначення ключових показників</li>
                  <li>Системи оцінки прогресу</li>
                  <li>Аналітичні інструменти</li>
                  <li>Звітність та візуалізація даних</li>
                </ul>
              </Accordion>

              <Accordion title="Модуль 4: Практична робота">
                <ul className="list-inside list-disc space-y-2">
                  <li>Робота з реальними проєктами</li>
                  <li>Зворотний зв'язок від експертів</li>
                  <li>Розбір складних ситуацій</li>
                  <li>Підготовка до захисту підсумкового проєкту</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
