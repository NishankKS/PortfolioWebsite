import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const WorkSection = () => {
  return (
    <Container id="projects">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Projects" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
        Through each line written, and bug resolved, my projects emerge, their stories evolved.
        </Typography>
        <Typography variant="subtitle" className="max-w-xl text-center">
        A Showcase of My Projects:
        </Typography>
      </div>

      {PROJECTS?.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}
    </Container>
  );
};

export default WorkSection;
