import type React from 'react';

const AboutCourse: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-mipt-purple-dark md:text-4xl">
          Що таке менторинг?
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-mipt-purple p-8 text-white shadow-lg">
            <h3 className="mb-4 text-xl font-bold">Хто такий ментор?</h3>
            <p>
              Ментор — це фахівець, який допомагає проєктним командам
              та засновникам стартапів долати труднощі та досягати
              конкретних результатів.
            </p>
          </div>
          <div className="rounded-xl bg-violet p-8 text-white shadow-lg">
            <h3 className="mb-4 text-xl font-bold">Чим займається ментор?</h3>
            <p>
              Ментор працює з командами над постановкою цілей,
              створенням планів та вибором правильних метрик для відстеження
              прогресу. Він допомагає знаходити вузькі місця та вирішувати їх.
            </p>
          </div>
          <div className="rounded-xl bg-mipt-pink p-8 text-white shadow-lg">
            <h3 className="mb-4 text-xl font-bold">Чому це затребувано?</h3>
            <p>
              Стартапи та інноваційні команди потребують професійної підтримки.
              Ментори допомагають їм розвиватися швидше, долати кризи та
              перетворювати ідеї на успішні продукти.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-mipt-purple-dark md:text-4xl">
            Для кого підходить курс?
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Target Group 1 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 font-semibold text-mipt-purple">Для підприємців</h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Власників бізнесу</li>
                <li>Засновників стартапів</li>
                <li>Підприємців з досвідом</li>
              </ul>
            </div>

            {/* Target Group 2 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 font-semibold text-mipt-purple">Для фахівців</h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Проджект-менеджерів</li>
                <li>Продакт-менеджерів</li>
                <li>Консультантів з бізнесу</li>
                <li>Менторів та коучів</li>
              </ul>
            </div>

            {/* Target Group 3 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 font-semibold text-mipt-purple">Для корпорацій</h3>
              <ul className="list-inside list-disc space-y-2">
                <li>HR-фахівців</li>
                <li>Керівників інновацій</li>
                <li>Менеджерів внутрішніх проєктів</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
