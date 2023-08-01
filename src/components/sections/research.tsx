import { RESEARCH } from '@/lib/data';
import ResearchDetails from '@/components/data-display/research-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const ResearchSection = () => {
  return (
    <Container className="bg-gray-50" id="research">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Research" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
        From labs to manuscripts, research journies unfold, leaving a trail of curiosity that never goes untold.
        </Typography>

        <Typography variant="subtitle" className="max-w-xl text-center">
        A Showcase of My Research Works:
        </Typography>
      </div>

      {RESEARCH?.map((experience, index) => (
        <ResearchDetails {...experience} key={index} />
      ))}
    </Container>
  );
};

export default ResearchSection;
