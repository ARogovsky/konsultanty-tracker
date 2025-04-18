import type React from 'react';
import { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the form submission logic
    console.log('Form submitted:', formData);
    alert('Заявку відправлено! Ми зв\'яжемося з вами найближчим часом.');
    setFormData({ name: '', email: '', phone: '', comment: '' });
  };

  return (
    <section id="contact" className="bg-mipt-purple-dark py-16 text-white md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
            Залиште заявку для участі
          </h2>
          <p className="mb-10 text-center text-lg">
            Ми зв'яжемося з вами та розповімо детальніше про нашу організацію, відповімо на всі запитання
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold">Процес поступления</h3>
              <ol className="space-y-6">
                <li className="flex">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-mipt-pink text-lg font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-medium">Оставьте заявку</h4>
                    <p className="text-white/80">
                      Заполните форму, и наш менеджер свяжется с вами для консультации
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-mipt-pink text-lg font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-medium">Пройдите собеседование</h4>
                    <p className="text-white/80">
                      Мы обсудим ваш опыт и цели обучения
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-mipt-pink text-lg font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-medium">Заключите договор</h4>
                    <p className="text-white/80">
                      Оформите необходимые документы и выберите удобный формат оплаты
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-mipt-pink text-lg font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="mb-1 text-lg font-medium">Начните обучение</h4>
                    <p className="text-white/80">
                      Приступите к занятиям по расписанию вашей группы
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm md:p-8">
              <h3 className="mb-6 text-xl font-bold">Зв'язатися з нами</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Ваше ім'я <span className="text-mipt-pink">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/20 bg-transparent p-3 text-white"
                    placeholder="Іван Іванов"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email <span className="text-mipt-pink">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/20 bg-transparent p-3 text-white"
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                    Телефон <span className="text-mipt-pink">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/20 bg-transparent p-3 text-white"
                    placeholder="+380 (XX) XXX-XX-XX"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="comment" className="mb-2 block text-sm font-medium">
                    Коментар
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg border border-white/20 bg-transparent p-3 text-white"
                    placeholder="Розкажіть про ваші цілі"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-mipt-pink px-6 py-3 font-medium text-white hover:bg-opacity-90"
                >
                  Надіслати заявку
                </button>

                <p className="mt-4 text-center text-xs text-white/60">
                  Натискаючи кнопку, ви погоджуєтеся з нашою політикою обробки персональних даних
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
