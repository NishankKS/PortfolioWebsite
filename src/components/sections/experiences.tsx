import { EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const ExperienceSection = () => {
  return (
    <Container className="bg-gray-50" id="experiences">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Experience" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
        Through career&apos;s maze, I navigate with grace, seizing opportunities in every workplace.
        </Typography>

        <Typography variant="subtitle" className="max-w-xl text-center">
        A Showcase of My Recent Experiences:
        </Typography>
      </div>

      {EXPERIENCES?.map((experience, index) => (
        <ExperienceDetails {...experience} key={index} />
      ))}
    </Container>
  );
};

export default ExperienceSection;
