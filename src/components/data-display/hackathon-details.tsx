import Image from 'next/image';

import { HackathonsDetails as HackathonsDetailsProps } from '@/lib/types';
import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';

const HackathonsDetails = ({
  hackathonName,
  place,
  personAvatar,
  hackathoninfo,
  title,
}: HackathonsDetailsProps) => {
  return (
    <Card className="mx-auto flex flex-col items-center gap-6 p-8 md:w-2/3 md:p-12 lg:w-1/3">
      <Typography
          variant="subtitle"
          className="w-full text-center font-semibold text-gray-900"
        >
          {hackathonName}
        </Typography>
        <Typography
          variant="body3"
          className="w-full text-center font-semibold text-gray-900"
        >
          {place}
        </Typography>
        <Typography variant="body3" className="w-full text-center">
          {title}
        </Typography>
        
      <Image src={personAvatar!} alt={`${hackathonName} avatar`}></Image>
      <Typography style={{ textAlign: 'justify' }}>{hackathoninfo}</Typography>
      <div className="flex w-full flex-col gap-1">
        
      </div>
    </Card>
  );
};

export default HackathonsDetails;
