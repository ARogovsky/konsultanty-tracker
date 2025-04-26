import type React from 'react';
import { useEffect } from 'react';

const ContactForm: React.FC = () => {
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

  return (
    <section id="contact" className="bg-mipt-purple-dark py-16 text-white md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
            Подати заявку на участь у програмі
          </h2>
          <p className="mb-10 text-center text-lg">
            Наша некомерційна програма безкоштовно готує викладачів ВНЗ як менторів для студентських стартапів
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold">Процес участі</h3>
              <ol className="space-y-6">
                <li className="flex">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-mipt-pink text-lg font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-medium">Подайте заявку</h4>
                    <p className="text-white/80">
                      Заповніть форму, і координатор програми зв'яжеться з вами
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-mipt-pink text-lg font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-medium">Пройдіть співбесіду</h4>
                    <p className="text-white/80">
                      Ми обговоримо вашу роботу у ВНЗ та мотивацію участі в програмі
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-mipt-pink text-lg font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-medium">Отримайте підтвердження участі</h4>
                    <p className="text-white/80">
                      Після відбору ми надішлемо вам запрошення та інформацію про початок навчання
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-mipt-pink text-lg font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-medium">Почніть навчання</h4>
                    <p className="text-white/80">
                      Беріть участь у програмі та розвивайте навички менторингу для студентських стартапів
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm md:p-8">
              {/* Typeform Embed */}
              <div 
                data-tf-live="01JSRJY5C02BFF0YFA6FJMD9X4"
                className="rounded-xl overflow-hidden"
                style={{ height: '400px' }}
              ></div>
              <p className="mt-4 text-center text-xs text-white/60">
                Участь у програмі є повністю безкоштовною для співробітників ВНЗ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
