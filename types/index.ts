import React, { ComponentPropsWithoutRef } from "react"


interface link  {
    label: string
    href: string
}

export interface SliderCardProps {
    id: number,
    label: string,
    specialties: string[],
    readMoreLink: string,
    findDoctorLink: string,
    description: string,
    imgSrc: string
}

export interface TestimonialCardProps {
    imgSrc: string | React.ReactNode
    imgAlt: string
    description: string
    titleNumber: string
    titleText: string
}

export interface MenuItemProps {
    label: string,
    pages: NavigationMenuStructureProps[]
}

export interface NavigationMenuStructureProps {
    name: string;
    links: link []
}


export type WrittenTestimonial = {
    type: "written";
    name: string;
    description: string;
    image: string;
  };

  type VideoTestimonial = {
    type: "video";
    image: string;
    videoUrl: string;
  };

  export type TestimonialItem = WrittenTestimonial | VideoTestimonial;

  export interface PatientTestimonialMarqueeProps extends ComponentPropsWithoutRef<"div"> {
    marqueeArray: TestimonialItem[];
  }

export  interface VideoModalTriggerProps  extends ComponentPropsWithoutRef<"div"> {
    image?: string;
    children?: React.ReactNode;
    videoUrl: string;
  }

  export type ActionItem = {
    className: string;
    icon?: React.ElementType;
    label: string;
    onClick?: () => void;
    component?: React.ReactNode; // Optional field for custom components
  };


  export interface LeaderCardProps {
    image: string
    name: string
    role: string
    description: string
    onReadMore?: string
    onDownload?: string
  }

  export interface LeaderPageProps extends LeaderCardProps {
    customFirstHeading: string
    theirStory: string[]
    customSecondHeading: string
    secondImage: string
    secondSectionDescription: string[]
    thirdImage: string
    thirdSectionDescription: string[]
    fourthSectionDescription: string[]
    fifthSectionDescription: string
    videoModalForJourney: {
      image: string
      videoUrl: string
    }
  }

 export interface DownloadItem {
    name: string;
    url: string;
  }


export  interface PressRelease {
    id: string;
    date: string;
    title: string;
    type: 'innovation' | 'partnership' | 'award' | 'research';
    summary: string;
    link: string;
    content: string;
    videoPreview?: string;
    downloads?: DownloadItem[];
    pdf?: string;
    images?: string[];
  }
