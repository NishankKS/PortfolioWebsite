import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';
import { ResearchDetails as ResearchDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ReserachDetails = ({
  
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
  
  techstack,
}: ResearchDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
      
      <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4" style={{width: 80 + '%'}}>
      
        <Typography variant="body2" className="font-semibold text-gray-900">
          {position}
        </Typography>
        <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-400"></span>
                </span>
              </div>
              <Typography>In Progress</Typography>
            </div>
            <Typography style={{ textAlign: 'justify' }}>
              {summary}
            </Typography>
        
      </div>
      <Typography className="text-gray-700 md:text-right">
          {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
            startDate
          )}{' '}
          -{' '}
          {currentlyWorkHere
            ? 'Present'
            : endDate
            ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                endDate
              )
            : 'NA'}
        </Typography>
    </Card>
  );
};

export default ReserachDetails;
