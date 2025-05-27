import type React from 'react';

// Team member card component
const TeamMember = ({
  name,
  role,
  image,
  description,
}: {
  name: string;
  role: string;
  image: string;
  description: string;
}) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:scale-105">
      <img src={image} alt={name} className="h-120 w-full object-cover" width="400" height="480" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-mipt-purple-dark">{name}</h3>
        <p className="mb-3 text-mipt-pink">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Антоніна Осипенко',
      role: 'Продуктовий дизайнер',
      image: '/assets/images/pic_001.webp',
      description:
        'Досвідчений CXO з більш ніж 25-річним стажем роботи з технологічними компаніями та стартапами.',
    },
    {
      name: 'Андрій Роговський',
      role: 'Провідний ментор',
      image: '/assets/images/pic_002.webp',
      description:
        'Експерт з роботи з інноваційними проєктами та внутрішніми стартапами в технологічних компаніях.',
    },
    {
      name: 'Ірина Кабакова',
      role: 'Методолог фандрейзингу',
      image: '/assets/images/pic_003.webp',
      description:
        'Спеціаліст з розробки методологій фандрейзингу та генеральний директор інвестиційної компанії.',
    },
  ];

  return (
    <section id="team" className="bg-mipt-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-mipt-purple-dark md:text-4xl">
          Команда програми
        </h2>
        <p className="mb-12 text-center text-lg text-gray-600">
          Наші експерти мають великий досвід роботи у сфері інновацій та менторства
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              description={member.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="mb-4 text-2xl font-bold text-mipt-purple-dark">
            Приєднуйтесь до нашої команди професіоналів
          </h3>
          <p className="mb-8 text-gray-600">
            Програма навчання розроблена досвідченими менторами, які діляться своїми практичними
            знаннями та підходами
          </p>
          <button className="rounded-lg bg-mipt-purple px-8 py-3 font-medium text-white hover:bg-mipt-purple-dark">
            Дізнатися більше про викладачів
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
