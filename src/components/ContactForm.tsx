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
            Заява на вступ до ГО Консультанти
          </h2>
          <p className="mb-10 text-center text-lg">
            Заповніть форму, щоб приєднатися до національної мережі стартап-шкіл, інкубаторів та акселераторів.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold">Процес вступу</h3>
              <ol className="space-y-6">
                <li className="flex">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-mipt-pink text-lg font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-medium">Подайте заявку</h4>
                    <p className="text-white/80">
                      Заповніть форму, і наш координатор зв'яжеться з вами для уточнення деталей
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
                      Ми обговоримо ваші цілі, мотивацію та можливості участі у мережі
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-mipt-pink text-lg font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-medium">Отримайте підтвердження членства</h4>
                    <p className="text-white/80">
                      Після відбору ми надішлемо вам підтвердження та інформацію про наступні кроки
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-mipt-pink text-lg font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-medium">Станьте учасником</h4>
                    <p className="text-white/80">
                      Долучайтеся до спільноти, отримуйте підтримку та розвивайте інновації разом з нами
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
                Вступ до членства відкритий для ВНЗ, студентів та професорів, які прагнуть розвивати інновації
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
