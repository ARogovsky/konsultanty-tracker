import type React from 'react';

const AboutCourse: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-center text-4xl font-bold text-mipt-purple-dark md:text-5xl">
          Про членство
        </h1>
        <p className="mb-12 text-center text-lg text-gray-700">
          ГО КОНСУЛЬТАНТИ — провідний партнер експериментального проєкту щодо створення на базі закладів вищої освіти, наукових установ мережі стартап-шкіл — інкубаторів — акселераторів. Ми допомагаємо університетам, студентам і професорам стати частиною інноваційної екосистеми для розвитку стартапів, сприяємо економічному відновленню України та впровадженню сучасних освітніх практик.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-mipt-purple p-8 text-white shadow-lg">
            <h3 className="mb-4 text-xl font-bold">ВНЗ</h3>
            <p>
              Сприяння перетворенню інноваційного процесу та економічному відновленню України. Долучення до мережі стартап-шкіл, інкубаторів, акселераторів, партнерських програм та інвестиційних можливостей.
            </p>
          </div>
          <div className="rounded-xl bg-violet p-8 text-white shadow-lg">
            <h3 className="mb-4 text-xl font-bold">Студентам</h3>
            <p>
              Робота з реальними стартапами, участь у проєктах під керівництвом експертів, доступ до менторства та інвестицій, розвиток підприємницьких навичок і кар'єрних можливостей.
            </p>
          </div>
          <div className="rounded-xl bg-mipt-pink p-8 text-white shadow-lg">
            <h3 className="mb-4 text-xl font-bold">Професорам</h3>
            <p>
              Сертифікат про підвищення кваліфікації державного зразка, участь у сучасних освітніх та інноваційних програмах, можливість впливати на розвиток стартап-екосистеми в Україні.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-mipt-purple-dark md:text-4xl">
            Для кого підходить членство?
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Target Group 1 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 font-semibold text-mipt-purple">Для закладів вищої освіти</h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Адміністрацій та керівників університетів</li>
                <li>Інноваційних центрів та стартап-клубів</li>
                <li>Відділів трансферу технологій</li>
              </ul>
            </div>

            {/* Target Group 2 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 font-semibold text-mipt-purple">Для студентів</h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Молоді, яка прагне створювати стартапи</li>
                <li>Учасників інноваційних проєктів</li>
                <li>Студентських лідерів та активістів</li>
              </ul>
            </div>

            {/* Target Group 3 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 font-semibold text-mipt-purple">Для професорів та викладачів</h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Викладачів, які прагнуть підвищити кваліфікацію</li>
                <li>Менторів студентських команд</li>
                <li>Експертів з інноваційної освіти</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
