import { Github, Twitter, Linkedin, BookmarkMinus } from 'lucide-react';

import LogoMySQL from '/public/images/logos/icons8-mysql.svg';
import LogoPython from '/public/images/logos/icons8-python.svg';
import LogoJava from '/public/images/logos/icons8-java.svg';
import LogoSL from '/public/images/logos/icons8-scikitlearn.svg';
import LogoTF from '/public/images/logos/icons8-tensorflow.svg';
import LogoPBI from '/public/images/logos/icons8-power-bi.svg';
import LogoExcel from '/public/images/logos/icons8-excel.svg';
import LogoFirebase from '/public/images/logos/icons8-firebase.svg';
import LogoOpenCV from '/public/images/logos/icons8-opencv.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSpark from '/public/images/logos/icons8-spark.svg';
import LogoHadoop from '/public/images/logos/icons8-hadoop.svg';
import LogoAWS from '/public/images/logos/icons8-aws.svg';
import LogoCPP from '/public/images/logos/icon-cpp-light.svg';
import LogoStreamlit from '/public/images/logos/icons8-streamlit.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoAnand from '/public/images/logos/logo-anand.png';
import LogoSIFF from '/public/images/logos/logo-siff.png';

import LogoUGRS from '/public/images/logos/ugrslogo.png';
import LogoC4T from '/public/images/logos/c4tlogo.png';


import ProjectTraffiKAI from '/public/images/traffikai.png';
import ProjectCleanSweep from '/public/images/cleansweep.png';
import ProjectTimeCapsule from '/public/images/timecapsule.png';
import ProjectPharmAI from '/public/images/pharmaicist.jpg';


import MSRIT from '/public/images/Centuriton.webp';
import GenAI from '/public/images/combined.png';
import InteloneAPI from '/public/images/intel.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  HackathonsDetails,
  VolunteerDetails,
  ResearchDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/NishankKS',
  GITHUB_REPO: 'https://github.com/NishankKS/PortfolioWebsite',
  TWITTER: 'https://twitter.com/nishank_satish',
  LINKEDIN: 'https://www.linkedin.com/in/nishank-satish-087304206/',
 
 };

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Experience',
    href: '#experiences',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Hackathons',
    href: '#hackathons',
  },
  {
    label: 'Volunteer',
    href: '#volunteer',
  },
  {
    label: 'Research',
    href: '#research',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
  
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/NishankKS',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/nishank-satish-087304206/',
  },
  {
    icon: Twitter,
    url: 'https://twitter.com/nishank_satish',
  },
  
  {
    icon: BookmarkMinus,
    url: 'https://medium.com/@nishank.satish',
  },
  
  
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'CPP',
    logo: LogoCPP,
    url: 'https://isocpp.org/',
  },
  
  {
    label: 'Python',
    logo: LogoPython,
    url: 'https://www.python.org/',
  },
  {
    label: 'Java',
    logo: LogoJava,
    url: 'https://www.java.com/ ',
  },
  {
    label: 'MySQL',
    logo: LogoMySQL,
    url: 'https://www.mysql.com',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  
  {
    label: 'scikit-learn',
    logo: LogoSL,
    url: 'https://scikit-learn.org/stable/',
  },
  {
    label: 'Tensorflow',
    logo: LogoTF,
    url: 'https://www.tensorflow.org',
  },
  {
    label: 'Power BI',
    logo: LogoPBI,
    url: 'https://powerbi.microsoft.com/',
  },
  {
    label: 'OpenCV',
    logo: LogoOpenCV,
    url: 'https://opencv.org/',
  },
  {
    label: 'Excel',
    logo: LogoExcel,
    url: 'https://www.microsoft.com/en-in/microsoft-365/excel',
  },
  
  {
    label: 'Spark',
    logo: LogoSpark,
    url: 'https://spark.apache.org/',
  },
  {
    label: 'Hadoop',
    logo: LogoHadoop,
    url: 'https://hadoop.apache.org/',
  },
  {
    label: 'AWS',
    logo: LogoAWS,
    url: 'https://aws.amazon.com/',
  },
  
  {
    label: 'Streamlit',
    logo: LogoStreamlit,
    url: 'https://streamlit.io/',
  },
  {
    label: 'Firebase',
    logo: LogoFirebase,
    url: 'https://firebase.google.com/',
  },

  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoAnand,
    title:'Anand Diagnostic Laboratory - A Neuberg Associate & Neuberg Anand Reference Laboratory',
    logoAlt: 'Anand logo',
    position: 'Data Science Intern',
    startDate: new Date(2023, 3),
    endDate: new Date(2023, 7),
    summary: [
      'Developed an image processing model, that helps to identify the results obtained from the Typhifast ICT Card images and update it in the LIS.',
      'Implemented the process of segmentation, pre-processing, augmentation and prediction of results from images with an accuracy of 97%.'
    ],
    techstack:'Tech Stack: Python, Tensorflow, OpenCV',
  },
  {
    logo: LogoSIFF,
    
    logoAlt: 'SIFF Young Artiste Logo',
    title:'SIFF Young Artiste',
    position: 'Intern',
    startDate: new Date(2022, 8),
    endDate: new Date(2023, 2),
    summary: [
      'Developed a full stack web voting application which can be used to carry out the voting of uploaded videos and can also be used to track the votes under each category and participants.',
      'Implemented authentication and voting dashboard for admins and ensured seamless integration with MySQL using the XAMPP server.'
    ],
    techstack:'Tech-Stack: HTML, CSS, JS, PHP and MySQL',
  },
  
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'PharmAIcist',
    description:
      'PharmAIcist aims to leverage advanced AI techniques to accelerate the drug discovery process by predicting the bioactivity and toxicity of potential drug candidates. By applying machine learning algorithms to vast datasets, the aim is to identify promising compounds with high bioactivity while simultaneously assessing their potential toxicity, enabling faster and safer drug development.',
    url: 'https://github.com/Manikanta-7342/bioactivity-prediction',
    previewImage: ProjectPharmAI,
    technologies: [
      'Python',
      'Scikit-Learn',
      'ChEMBL',
      'PubChem',
      'SMILE',
      'Streamlit',
    ],
  },
  {
    name: 'TraffiKAI',
    description:
      'An object classification model which helps in the identification of emergency and non emergency vehicles and uses dynamic traffic signalling.',
    url: 'https://devfolio.co/projects/traffikai-c242',
    previewImage: ProjectTraffiKAI,
    technologies: [
      'Python',
      'Scikit-Learn',
      'Tensorflow',
      'Keras',
      'PyTorch',
      'OpenCV',
      'Single Shot Detector',
      'LSTM',
      'DenseNet-169',
      'Streamlit',
      'PyQt5',
      
      
    ],
  },
  {
    name: 'TimeCapsule',
    description:
      'TimeCapsule is an AI-based system that can summarize and generate historical events into concise and informative summaries. TimeCapsule aims to create an AI-based system that can generate visually compelling and accurate videos and images of historical events.',
    url: 'https://github.com/NishankKS/TimeCapsule',
    previewImage: ProjectTimeCapsule,
    technologies: [
      'Python',
      'Tensorflow',
      'PyTorch',
      'BART',
      'Vicuna 13b',
      'Stable Diffusion API',
      'Gradio',
    ],
  },
  {
    name: 'CleanSweep.AI',
    description:
      'An object classification model which segregates garbage and scattered scrap.',
    url: 'https://github.com/NishankKS/CleanSweep.AI',
    previewImage: ProjectCleanSweep,
    technologies: [
      'Python',
      'Scikit-Learn',
      'Tensorflow',
      'Keras',
      'OpenCV',
      'MobileNetv2',
      'GeoCoder',
      'yagmail',
      'Streamlit',
      'Twilio',
    ],
  },
  
  
];

export const HACKATHONS: HackathonsDetails[] = [
  {
    hackathonName: 'CentuRITon',
    place:'Winner (AI/ML Track)',
    personAvatar: MSRIT,
    title: 'M S Ramaiah Institute of Technology',
    hackathoninfo:
      'Won the first position in the AI/ML Track with over 250+ participants from all over India. One among the 79 teams who attended the offline event and competed among 12 finalists to eventually finish first in the AI/ML track.',
  },
  {
    hackathonName: 'Generative AI Hack Day',
    place:'Runner-Up',
    personAvatar: GenAI,
    title: 'Dept. of AI&ML, DSCE & CellStrat',
    hackathoninfo:
      'Won the runner-up in the inter-department Generative AI hackathon conducted by CellStrat, an AI based SaaS startup and Dept. of AI&ML, DSCE with over 40+ participants from various departments across the college.',
  },
  {
    hackathonName: 'Intel oneAPI Challenge',
    place:'Winner',
    personAvatar: InteloneAPI,
    title: 'Intel',
    hackathoninfo:
      'Won the first position in the intra-department Intel oneAPI hackathon at Dept. of AI&ML, DSCE with over 30+ participants.',
  },
];

export const VOLUNTEER: VolunteerDetails[] = [
  {
    volunteerName: 'Student Ambassador',
    volunteerentity:'Intel oneAPI ',
    personAvatar: InteloneAPI,
    issuer: 'Intel',
    volunteerinfo:
      'Responsible for educating, conducting events and building the community of oneAPI.',
  },
  {
    volunteerName: 'Vice Chair',
    volunteerentity:'UG Research Society',
    personAvatar: LogoUGRS,
    issuer: 'Dept. of AI&ML,DSCE',
    volunteerinfo:
      'Responsible for organizing workshops and sessions for the researchers of the society.',
  },{
    volunteerName: 'Student Coordinator',
    volunteerentity:'Code4Thought',
    personAvatar: LogoC4T,
    issuer: 'Dept. of AI&ML,DSCE',
    volunteerinfo:
      'Conducted sessions on C Programming and Git/Github and helped in driving the CodeChef Coding Program across the college',
  },
];

export const RESEARCH: ResearchDetails[] = [
 
  {   
    position: 'Comprehensive Analysis and Prediction of Bioactivity and Toxicity in Drug Discovery using Machine Learning Approach',
    summary:
      'Research article focussed on application of AI techniques in drug discovery, enabling faster assessment and ranking of potential drug candidates based on their target characteristics. The study specifically focuses on Alzheimer\'s disease and uses machine-learning algorithms to identify prospective AChE inhibitor candidates. Additionally, toxicity data from comprehensive databases aids in evaluating compound safety.',
    status:"Published in the International Journal on Recent and Innovation Trends in Computing and Communication (Scopus Indexed)",
  },
  {
    position: 'Enhancing Traffic Management through Density-Based Dynamic Traffic Signaling and Audio-Visual Emergency Vehicle Priority Coordination',
    summary: 'Research article focused on addressing the challenges of increasing traffic congestion and its adverse effects on daily life and emergency services. The paper presents a hybrid system that employs deep learning models for dynamic traffic signaling and real-time detection of emergency vehicles. Vehicle Detection uses Single Shot Detector (SSD) and Emergency Vehicle Detection combines audio and video inputs to confirm the presence of an emergency vehicle.',
    status: 'Under Review in the International Arab Journal of Information Technology (Scopus Indexed)'
  },
  {
    position: 'A Novel Image Processing Approach in Immunochromatographic Test (ICT) Card Images for Typhoid Detection using Deep Learning',
    summary: 'Research article focussed on harnessing the impressive capabilities of deep learning models for intelligent image processing in the interpretation of immunochromatographic test (ICT) results. Recognizing the susceptibility of manual ICT result interpretation to errors, the study proposes an innovative approach: utilizing deep learning to automate and improve the interpretation of these results.',
    status:'Under Review'
  },

];