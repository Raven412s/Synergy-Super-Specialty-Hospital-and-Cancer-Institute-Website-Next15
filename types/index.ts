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
    image: string;
    videoUrl: string;
  }

  export type ActionItem = {
    className: string;
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
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
