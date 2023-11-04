import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';
import { ResearchDetails as ResearchDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ReserachDetails = ({
  
  position,

  summary,
  status,
  

}: ResearchDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
      
      <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4" style={{width: 100 + '%'}}>
      
        <Typography variant="body2" className="font-semibold text-gray-900">
          {position}
        </Typography>
        <Typography className="font-semibold text-gray-600" style={{ fontStyle: "italic" }}>
          {status}
          </Typography>
            <Typography style={{ textAlign: 'justify' }}>
              {summary}
            </Typography>
            
      </div>
      
    </Card>
  );
};

export default ReserachDetails;
