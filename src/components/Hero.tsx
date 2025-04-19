import type React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-hero from-mipt-purple-dark to-mipt-red py-16 text-white md:py-24">
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              ГО КОНСУЛЬТАНТИ
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              Освойте востребованную профессию трекера и начните помогать
              стартапам и командам достигать результатов
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button className="rounded-lg bg-mipt-pink px-8 py-3 font-medium text-white hover:bg-opacity-90">
                Записаться на курс
              </button>
              <a
                href="#program"
                className="rounded-lg border border-white px-8 py-3 text-center font-medium text-white hover:bg-white hover:bg-opacity-10"
              >
                Подробнее
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/images/hero-image.png"
              alt="KONSULTANTY"
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>

      {/* Abstract decorative elements */}
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-mipt-pink opacity-20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-mipt-purple-light opacity-20 blur-3xl" />
    </section>
  );
};

export default Hero;
