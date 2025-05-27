import type React from 'react';
import { useState, useEffect } from 'react';

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
  useEffect(() => {
    // Load the Typeform embed script
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const faqItems = [
    {
      question: 'Як ВНЗ може долучитися до мережі стартап-шкіл, інкубаторів та акселераторів?',
      answer: 'ВНЗ може подати заявку через наш сайт. Ми допоможемо підготувати всі необхідні документи, структурувати проєкт та супроводжуватимемо на всіх етапах до офіційного приєднання до мережі.'
    },
    {
      question: 'Які послуги надає ГО Консультанти?',
      answer: 'Ми надаємо експертні консультації, допомогу у підготовці заявок, практичний супровід проєктів, аналітику, стратегії розвитку інновацій, а також офіційну сертифікацію для ВНЗ, студентів і професорів.'
    },
    {
      question: 'Що таке офіційна сертифікація і хто її отримує?',
      answer: 'Після успішного захисту проєкту стартап-школи або участі у програмі, ВНЗ, студенти та професори отримують сертифікат державного зразка, який підтверджує їхню участь у національній інноваційній екосистемі.'
    },
    {
      question: 'Яку практичну користь отримують студенти?',
      answer: 'Студенти працюють з реальними стартапами, отримують менторську підтримку, доступ до інвестицій та можливість розвивати підприємницькі навички у сучасному інноваційному середовищі.'
    },
    {
      question: 'Яку підтримку отримують професори та викладачі?',
      answer: 'Професори беруть участь у сучасних освітніх програмах, підвищують кваліфікацію, отримують сертифікат державного зразка та можуть стати менторами для студентських команд.'
    },
    {
      question: 'Чи можна отримати консультацію або підтримку до подачі заявки?',
      answer: 'Так, ми надаємо попередні консультації для ВНЗ, студентів і викладачів, щоб допомогти визначити оптимальний шлях до приєднання до мережі та розвитку інноваційних проєктів.'
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
            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <div 
                data-tf-live="01JVKYS9NVN8MER92N9NCMCPQF"
                className="rounded-xl overflow-hidden"
                style={{ height: '400px' }}
              ></div>
              <p className="mt-4 text-center text-xs text-gray-600">
                Наші експерти готові відповісти на всі ваші запитання
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
