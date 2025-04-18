import type React from 'react';

const AboutCourse: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-mipt-purple-dark md:text-4xl">
          Что такое трекинг?
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature Card 1 */}
          <div className="rounded-xl bg-mipt-purple p-8 text-white shadow-lg">
            <h3 className="mb-4 text-xl font-bold">Кто такой трекер?</h3>
            <p>
              Трекер — это специалист, который помогает проектным командам
              и основателям стартапов преодолевать трудности и достигать
              конкретных результатов.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="rounded-xl bg-mipt-red p-8 text-white shadow-lg">
            <h3 className="mb-4 text-xl font-bold">Чем занимается трекер?</h3>
            <p>
              Трекер работает с командами над постановкой целей,
              созданием планов и выбором правильных метрик для отслеживания
              прогресса. Он помогает находить узкие места и решать их.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="rounded-xl bg-mipt-pink p-8 text-white shadow-lg">
            <h3 className="mb-4 text-xl font-bold">Почему это востребовано?</h3>
            <p>
              Стартапы и инновационные команды нуждаются в профессиональной поддержке.
              Трекеры помогают им развиваться быстрее, преодолевать кризисы и
              превращать идеи в успешные продукты.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-mipt-purple-dark md:text-4xl">
            Для кого подходит курс?
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Target Group 1 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 font-semibold text-mipt-purple">Для предпринимателей</h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Владельцев бизнеса</li>
                <li>Основателей стартапов</li>
                <li>Предпринимателей с опытом</li>
              </ul>
            </div>

            {/* Target Group 2 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 font-semibold text-mipt-purple">Для специалистов</h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Проджект-менеджеров</li>
                <li>Продакт-менеджеров</li>
                <li>Консультантов по бизнесу</li>
                <li>Менторов и коучей</li>
              </ul>
            </div>

            {/* Target Group 3 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 font-semibold text-mipt-purple">Для корпораций</h3>
              <ul className="list-inside list-disc space-y-2">
                <li>HR-специалистов</li>
                <li>Руководителей инноваций</li>
                <li>Менеджеров внутренних проектов</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
