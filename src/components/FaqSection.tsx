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
      question: 'Когда начинается обучение?',
      answer: 'Набор на курс проводится несколько раз в год. Точные даты старта ближайшего потока можно узнать, оставив заявку на сайте или связавшись с нашими консультантами.',
    },
    {
      question: 'Какие требования к поступающим?',
      answer: 'Для поступления необходимо иметь высшее или неоконченное высшее образование. Опыт работы в стартапах, проектных командах или менеджменте будет преимуществом, но не является обязательным условием.',
    },
    {
      question: 'Как проходит обучение?',
      answer: 'Программа включает в себя онлайн-лекции, практические занятия, работу с реальными проектами под руководством опытных менторов, а также индивидуальные консультации и групповые семинары.',
    },
    {
      question: 'Сколько длится обучение?',
      answer: 'Продолжительность программы составляет 6 месяцев. Занятия проводятся 2-3 раза в неделю в вечернее время, что позволяет совмещать обучение с работой.',
    },
    {
      question: 'Какой документ я получу по окончании?',
      answer: 'По успешному завершению программы и защите итогового проекта выдается диплом о профессиональной переподготовке МФТИ государственного образца.',
    },
    {
      question: 'Можно ли оплатить обучение в рассрочку?',
      answer: 'Да, мы предлагаем различные варианты оплаты, включая рассрочку платежа. Подробности можно узнать у наших консультантов после подачи заявки.',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-mipt-purple-dark md:text-4xl">
          Часто задаваемые вопросы
        </h2>

        <div className="mx-auto max-w-3xl">
          {faqItems.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}

          <div className="mt-12 text-center">
            <p className="mb-6 text-lg text-gray-600">
              Не нашли ответ на свой вопрос? Свяжитесь с нами напрямую
            </p>
            <a
              href="#contact"
              className="inline-block rounded-lg bg-mipt-purple px-8 py-3 font-medium text-white hover:bg-mipt-purple-dark"
            >
              Задать вопрос
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
