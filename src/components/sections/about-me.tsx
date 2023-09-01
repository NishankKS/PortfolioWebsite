import Image from 'next/image';

import NishankFullPose from '/public/images/nishank-full.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';


const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={NishankFullPose}
              alt="Fullpose of Nishank"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
          Unveiling the Creator Within : A Journey of Passion and Purpose 🚀</Typography>
          <Typography style={{ textAlign: 'justify' }}>
          Nishank is a passionate geek with love for coding and a relentless drive to explore new frontiers of technology. 
          He loves to dive into the fascinating world of programming and experiment with cutting-edge innovations.
          Currently, he is pursuing a <b>Bachelor of Engineering</b> focused in <b>Artificial Intelligence & Machine Learning</b> at DSCE, Bengaluru having a strong academic background with <b>9.40/10 CGPA</b> so far.

          </Typography>
          <Typography style={{ textAlign: 'justify' }}>
            As a fervent data science and machine learning enthusiast, he finds delight in extracting insights from data and using it to unravel hidden patterns. He is fueled by the vision of a data-driven world and aspires to be a <b>Data Engineer</b>. His quest for knowledge in this ever-evolving field knows no bounds, and is always eager to embrace the next challenge.


          </Typography>
          <Typography style={{ textAlign: 'justify' }}>
          Beyond the realms of technology, you will find him on the cricket pitch, a place where he finds joy in sportsmanship and teamwork. When he is not coding or breaking a sweat, he immerses himself in the world of non-fiction books, relishing the knowledge and wisdom they offer. Moreover, his treasured moments are spent with his beloved family and friends, cherishing the precious bonds they share.

          </Typography>
          
          <Typography>In short, here are some quick highlights about me:
</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Tech Aficionado 👨🏻‍💻
              </Typography>
              <Typography component="li">Charismatic Leader 👨🏻‍✈</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Lifelong Learner 📖</Typography>
              <Typography component="li">Far-Sighted Thinker 🎯</Typography>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
