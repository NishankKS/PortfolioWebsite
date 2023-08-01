import Image from 'next/image';

import { VolunteerDetails as VolunteerDetailsProps } from '@/lib/types';
import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';

const VolunteerDetails = ({
  volunteerName,
  personAvatar,
  issuer,
  volunteerinfo,
  volunteerentity,
}: VolunteerDetailsProps) => {
  return (
    <Card className="mx-auto flex flex-col items-center gap-6 p-8 md:w-2/3 md:p-12 lg:w-1/3">
      <Typography
          variant="subtitle"
          className="w-full text-center font-semibold text-gray-900"
          
        >
          {volunteerName}
        </Typography>
        <Typography
          variant="body3"
          className="w-full text-center font-semibold text-gray-900"
        >
          {volunteerentity}
        </Typography>
        
        <Typography variant="body3" className="w-full text-center">
          {issuer}
        </Typography>
        
      <Image src={personAvatar!} alt={`${volunteerName} avatar`}></Image>
      <Typography style={{ textAlign: 'justify' }}>{volunteerinfo}</Typography>
      <div className="flex w-full flex-col gap-1">
        
      </div>
    </Card>
  );
};

export default VolunteerDetails;
