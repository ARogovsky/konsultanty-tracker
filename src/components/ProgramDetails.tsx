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
          Программа школы трекеров МФТИ
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-mipt-purple">
              Пару слов о преимуществах программы
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-mipt-pink p-2 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-mipt-purple-dark">Эксперты-практики</h4>
                  <p className="mt-1 text-gray-600">
                    Обучение ведут практикующие трекеры с опытом работы с крупными компаниями и стартапами
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
                  <h4 className="text-lg font-medium text-mipt-purple-dark">Реальные кейсы</h4>
                  <p className="mt-1 text-gray-600">
                    Практика с реальными проектами и командами под руководством опытных наставников
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
                  <h4 className="text-lg font-medium text-mipt-purple-dark">Государственный диплом</h4>
                  <p className="mt-1 text-gray-600">
                    Диплом о профессиональной переподготовке МФТИ государственного образца
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-mipt-purple-dark p-6 text-white md:p-8">
            <h3 className="mb-6 text-2xl font-bold">Модули программы</h3>

            <div className="space-y-2">
              <Accordion title="Модуль 1: Основы трекинга">
                <ul className="list-inside list-disc space-y-2">
                  <li>Кто такой трекер и чем он занимается</li>
                  <li>Инструменты трекера</li>
                  <li>Методология работы с проектами</li>
                  <li>Основы коммуникации и фасилитации</li>
                </ul>
              </Accordion>

              <Accordion title="Модуль 2: Работа с командами">
                <ul className="list-inside list-disc space-y-2">
                  <li>Диагностика команд</li>
                  <li>Выявление проблем и узких мест</li>
                  <li>Техники фасилитации групповой работы</li>
                  <li>Управление конфликтами</li>
                </ul>
              </Accordion>

              <Accordion title="Модуль 3: Метрики и системы оценки">
                <ul className="list-inside list-disc space-y-2">
                  <li>Определение ключевых показателей</li>
                  <li>Системы оценки прогресса</li>
                  <li>Аналитические инструменты</li>
                  <li>Отчетность и визуализация данных</li>
                </ul>
              </Accordion>

              <Accordion title="Модуль 4: Практическая работа">
                <ul className="list-inside list-disc space-y-2">
                  <li>Работа с реальными проектами</li>
                  <li>Обратная связь от экспертов</li>
                  <li>Разбор сложных ситуаций</li>
                  <li>Подготовка к защите итогового проекта</li>
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
