import type React from 'react';

// Outcome Card Component
const OutcomeCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <div className="mb-4 inline-flex rounded-full bg-mipt-purple/10 p-3 text-mipt-purple">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold text-mipt-purple-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const OutcomesSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-mipt-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-mipt-purple-dark md:text-4xl">
          По итогам обучения вы получите
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
          Знания и навыки, необходимые для успешной карьеры трекера и помощи проектным командам
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <OutcomeCard
            title="Работу с реальными проектами"
            description="Практический опыт трекинга стартап-команд под руководством опытных менторов"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />

          <OutcomeCard
            title="Набор инструментов трекера"
            description="Методики и инструменты для диагностики команд, выявления проблем и помощи в их решении"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            }
          />

          <OutcomeCard
            title="Навыки фасилитации"
            description="Умение структурировать и направлять групповую работу, управлять обсуждениями и конфликтами"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          />

          <OutcomeCard
            title="Диплом государственного образца"
            description="Диплом о профессиональной переподготовке МФТИ, подтверждающий вашу квалификацию"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            }
          />

          <OutcomeCard
            title="Сеть профессиональных контактов"
            description="Знакомство с практикующими трекерами, основателями стартапов и экспертами рынка"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />

          <OutcomeCard
            title="Возможность трудоустройства"
            description="Рекомендации для работы в стартапах, акселераторах, инновационных отделах корпораций"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            }
          />
        </div>

        <div className="mt-16 flex justify-center">
          <div className="rounded-xl bg-mipt-purple-dark p-8 text-center text-white md:max-w-2xl">
            <h3 className="mb-4 text-2xl font-bold">А также диплом государственного образца</h3>
            <p className="mb-6">
              По окончании курса вы получите диплом о профессиональной переподготовке МФТИ,
              который подтвердит ваши навыки и компетенции трекера.
            </p>
            <img
              src="/assets/images/diploma.png"
              alt="Диплом МФТИ"
              className="mx-auto h-32 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
