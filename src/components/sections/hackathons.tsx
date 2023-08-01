import { HACKATHONS } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import HackathonDetails from '@/components/data-display/hackathon-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HackathonsSection = () => {
  return (
    <Container id="hackathons" className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Hackathons" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
        Through teamwork and wit, challenges I foresee, hackathons cultivate the resilience in me. 

        </Typography>
        <Typography variant="subtitle" className="max-w-xl text-center">
        A Showcase of My Top Hackathons:
        </Typography>
      </div>

      <div className="flex gap-12 max-md:flex-col md:max-lg:flex-wrap">
        {HACKATHONS?.map((testimonial, index) => (
          <HackathonDetails key={index} {...testimonial} />
        ))}
      </div>
    </Container>
  );
};

export default HackathonsSection;
