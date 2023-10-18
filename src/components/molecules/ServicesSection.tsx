import { ServiceCard } from '../atoms/ServiceCard';

interface ServicesKeys {
  header: string;
  description: string;
  iconSrc: string;
}

const services: ServicesKeys[] = [
  {
    header: 'Pranie',
    description:
      'Pranie krzeseł, foteli, kanap. Pranie tapicerki samochodowej oraz impregnacja.',
    iconSrc: '/assets/vacuum.svg',
  },
  // {
  //   header: 'Zamiatanie',
  //   description: 'Lorem ipsum, lorem ipsum, lorem ipsum',
  //   iconSrc: '/assets/broom.svg',
  // },
  {
    header: 'Impregnacja',
    description:
      'Zabezpieczenie okien powłoką odpychającą brud. Impregnacja tapicerki materiałowej również samochodowej.',
    iconSrc: '/assets/rag.svg',
  },
  {
    header: 'Mycie',
    description:
      'Mycie okien, usuwanie osadów, żywicy, grzybów, farby. Mycie parapetów i ram okiennych.',
    iconSrc: '/assets/detergent.svg',
  },
];

const ServicesSection = () => {
  return (
    <div id="uslugi" className="scroll-smooth	flex flex-col gap-14 py-12">
      <h1 className="text-xl font-semibold tracking-wider">Usługi</h1>
      <div className="flex flex-row flex-wrap gap-10">
        {services.map((service, index: number) => {
          return (
            <ServiceCard
              key={index}
              header={service.header}
              description={service.description}
              iconSrc={service.iconSrc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSection;
