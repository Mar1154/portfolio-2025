import SectionTitle from '../ui/SectionTitle';
import Container from '../ui/Container';
import Card from '../ui/Card';
import { SERVICES } from '../../constants';

const Services = () => {

  return (
    <section id="about" className="py-48 bg-[#222222] text-white">
      <Container>

        {/* Text Section */}
        <div className="mb-12 sm:mb-16">
          <SectionTitle className="text-4xl sm:text-5xl md:text-6xl uppercase leading-tight sm:leading-snug md:leading-normal w-full max-w-xl xl:max-w-2xl mb-8">
            Offered Services
          </SectionTitle>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <Card
              key={service.id}
              hover
              className="p-6 sm:p-8 bg-white/10 rounded-2xl md:rounded-3xl flex flex-col justify-between min-h-[160px] sm:min-h-[180px] md:min-h-[220px]"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white w-1/2 min-w-[180px] self-start">
                {service.title}
              </h3>

              <p className="w-1/2 min-w-[180px] self-end text-right text-white text-sm sm:text-base">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Services;
