import type React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const skills = [
  { group: 'Стратегія й планування', details: 'Розробка дорожньої карти стартап-школи, постановка KPI' },
  { group: 'Фінанси та звітність', details: 'Бюджетування, підготовка фінансових звітів для МОН і донорів' },
  { group: 'Проєктний менеджмент', details: 'Керування програмами pre-seed → серія B, ресурсне планування' },
  { group: 'Побудова команди', details: 'Формування внутрішньої команди та координація зовнішніх менторів' },
  { group: 'Партнерства й переговори', details: 'Ведення переговорів з інвесторами та міжнародними донорами' },
  { group: 'Аналітика й моніторинг', details: 'Збір і аналіз даних, створення дашбордів для оцінки ефективності' },
  { group: 'Юридичні аспекти', details: 'Держбюджетні процедури, грантові правила (Horizon 2020/Europe), IP' },
];

const ProBono: React.FC = () => {
  useEffect(() => {
    // Set the document title
    document.title = 'Pro Bono | ГО КОНСУЛЬТАНТИ';
  }, []);

  return (
    <div className="bg-mipt-light min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-mipt-purple-dark py-16 text-white text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pro Bono</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Безкоштовна підготовка директорів стартап-шкіл для ВНЗ України</h2>
          </div>
          
          {/* Abstract decorative elements */}
          <div className="bg-mipt-pink opacity-20 blur-3xl" />
          <div className="bg-mipt-purple-light opacity-20 blur-3xl" />
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h3 className="text-2xl font-bold text-mipt-purple-dark mb-4">Наша місія</h3>
            <p className="text-lg text-gray-700 mb-6">
              ГО «КОНСУЛЬТАНТИ» — неприбуткова організація, що розвиває інноваційне середовище в Україні. Ми безкоштовно навчаємо співробітників вищих навчальних закладів, які очолюють або планують очолити стартап-школи, інкубатори та акселератори.
                      </p>
                    </div>
        </section>

        <section className="py-12 bg-mipt-light">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl font-bold text-mipt-purple-dark mb-8 text-center">Чому це важливо?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-xl bg-white p-6 shadow-md flex flex-col items-center">
                <span className="text-4xl mb-4">📈</span>
                <h4 className="font-semibold text-lg mb-2">Підсилення управління</h4>
                <p className="text-gray-700 text-center">Директори отримують навички стратегічного планування, бюджетування і звітності за держгрантами.</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-md flex flex-col items-center">
                <span className="text-4xl mb-4">🚀</span>
                <h4 className="font-semibold text-lg mb-2">Якісна підтримка стартапів</h4>
                <p className="text-gray-700 text-center">Від відбору MVP до масштабування: учасники опанують Lean Startup, Design Thinking та інші методики супроводу команд.</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-md flex flex-col items-center">
                <span className="text-4xl mb-4">🤝</span>
                <h4 className="font-semibold text-lg mb-2">Мережеві зв'язки</h4>
                <p className="text-gray-700 text-center">Навчимо налагоджувати партнерства з інвесторами, фондами та міжнародними програмами (Horizon, COST).</p>
              </div>
                    </div>
                    </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl font-bold text-mipt-purple-dark mb-8 text-center">Ключові компетенції випускника</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-mipt-purple-dark rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-mipt-purple-dark text-white">
                    <th className="py-3 px-4 text-left font-semibold">Група навичок</th>
                    <th className="py-3 px-4 text-left font-semibold">Конкретні вміння</th>
                  </tr>
                </thead>
                <tbody>
                  {skills.map((skill) => (
                    <tr key={skill.group} className="even:bg-mipt-light">
                      <td className="py-3 px-4 font-medium text-mipt-purple-dark">{skill.group}</td>
                      <td className="py-3 px-4 text-gray-700">{skill.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
                    </div>
                    </div>
        </section>

        <section className="py-12 bg-mipt-light">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-2xl font-bold text-mipt-purple-dark mb-8 text-center">Програма навчання</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h4 className="font-semibold text-lg mb-2">Онлайн-модулі</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Стратегічне керівництво стартап-школою</li>
                  <li>Методи відбору та прискорення стартапів</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h4 className="font-semibold text-lg mb-2">Практичні воркшопи</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Реальні кейси інкубації й акселерації</li>
                  <li>Робота з фінансовими та юридичними документами</li>
                  </ul>
                </div>
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h4 className="font-semibold text-lg mb-2">Інструменти</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Шаблони бюджетів, метрик і дашбордів</li>
                  <li>Методики Lean Startup, Design Thinking</li>
                  </ul>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h4 className="font-semibold text-lg mb-2">Менторська підтримка</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Супровід від досвідчених директорів акселераторів</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h3 className="text-2xl font-bold text-mipt-purple-dark mb-8 text-center">Для кого?</h3>
            <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
              <li>Проректори з інновацій і наукової роботи</li>
              <li>Керівники стартап-шкіл, інкубаторів, акселераторів</li>
              <li>Менеджери інноваційних центрів ВНЗ</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProBono; 