import type React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-mipt-purple-dark py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <h1 className="mr-8 text-xl text-white"><a href="/">ГО КОНСУЛЬТАНТИ</a></h1>
          <img
            src="/assets/images/logo.png"
            alt="ГО КОНСУЛЬТАНТИ Логотип"
            className="h-10"
          />
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="/about" className="text-white hover:text-mipt-orange">Про курс</a></li>
            <li><a href="/program" className="text-white hover:text-mipt-orange">Програма</a></li>
            <li><a href="/team" className="text-white hover:text-mipt-orange">Команда</a></li>
            <li><a href="/faq" className="text-white hover:text-mipt-orange">Питання та відповіді</a></li>
            <li><a href="/contact" className="text-white hover:text-mipt-orange">Контакти</a></li>
          </ul>
        </nav>
        <button className="rounded-lg bg-mipt-pink px-6 py-2 font-medium text-white hover:bg-mipt-red">
          Записатися
        </button>
      </div>
    </header>
  );
};

export default Header;
