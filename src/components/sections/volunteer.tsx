import { VOLUNTEER } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import VolunteerDetails from '@/components/data-display/volunteer-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const VolunteerSection = () => {
  return (
    <Container id="volunteer" className="bg-black-50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Volunteer" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
        From community to causes, volunteer endeavors thrive, leaving an impact that ripples far and wide. 

        </Typography>
        <Typography variant="subtitle" className="max-w-xl text-center">
        A Showcase of My Top Volunteer Experiences:
        </Typography>
      </div>

      <div className="flex gap-12 max-md:flex-col md:max-lg:flex-wrap">
        {VOLUNTEER?.map((testimonial, index) => (
          <VolunteerDetails key={index} {...testimonial} />
        ))}
      </div>
    </Container>
  );
};

export default VolunteerSection;
