import type { StaticImageData } from 'next/image';

export type TechDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
};

export type ExperienceDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
  techstack: string;
  title:string;
};

export type ProjectDetails = {
  name: string;
  description: string;
  url: string;
  previewImage: string | StaticImageData;
  technologies: string[];
};

export type HackathonsDetails = {
  hackathonName: string;
  place:string;
  personAvatar?: string | StaticImageData;
  hackathoninfo: string;
  title: string;
};

export type VolunteerDetails = {
  volunteerName: string;
  volunteerentity: string;
  issuer:string;
  personAvatar?: string | StaticImageData;
  volunteerinfo: string;

};

export type ResearchDetails = {
 
  position: string;
  summary: string;
  status?: string;
  
  
};



