import type React from 'react';
import { useState } from 'react';

// FAQ Item Component
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-mipt-purple-dark">{question}</span>
        <span className="text-xl text-mipt-purple">{isOpen ? '−' : '+'}</span>
      </button>

      {isOpen && (
        <div className="pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection: React.FC = () => {
  const faqItems = [
    {
      question: 'Коли починається навчання?',
      answer: 'Набір на безкоштовні курси для викладачів ВНЗ проводиться кілька разів на рік. Точні дати старту найближчого потоку можна дізнатися, залишивши заявку на сайті або зв\'язавшись з координаторами програми.',
    },
    {
      question: 'Які вимоги до учасників програми?',
      answer: 'Програма розроблена для співробітників вищих навчальних закладів: викладачів, наукових співробітників, керівників студентських проєктів. Для участі необхідно працювати у ВНЗ та мати бажання розвивати інноваційні студентські проєкти.',
    },
    {
      question: 'Як проходить навчання?',
      answer: 'Програма включає онлайн-лекції, практичні заняття, роботу з реальними студентськими проєктами під керівництвом досвідчених менторів, а також індивідуальні консультації та групові семінари.',
    },
    {
      question: 'Скільки триває навчання?',
      answer: 'Тривалість програми становить 6 місяців. Заняття проводяться 2-3 рази на тиждень у вечірній час, що дозволяє поєднувати навчання з основною роботою у ВНЗ.',
    },
    {
      question: 'Який документ отримують учасники після завершення програми?',
      answer: 'Після успішного завершення програми учасники отримують сертифікат ГО КОНСУЛЬТАНТИ, що підтверджує кваліфікацію ментора для студентських стартапів та інноваційних команд.',
    },
    {
      question: 'Чи справді участь у програмі безкоштовна?',
      answer: 'Так, наша програма є повністю безкоштовною для співробітників вищих навчальних закладів. Це частина нашої некомерційної місії з розвитку інноваційної екосистеми в Україні через підготовку менторів для студентських стартапів.',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-mipt-purple-dark md:text-4xl">
          Часті запитання
        </h2>

        <div className="mx-auto max-w-3xl">
          {faqItems.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}

          <div className="mt-12 text-center">
            <p className="mb-6 text-lg text-gray-600">
              Не знайшли відповідь на своє запитання? Зв'яжіться з нами напряму
            </p>
            <a
              href="#contact"
              className="inline-block rounded-lg bg-mipt-purple px-8 py-3 font-medium text-white hover:bg-mipt-purple-dark"
            >
              Поставити запитання
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
