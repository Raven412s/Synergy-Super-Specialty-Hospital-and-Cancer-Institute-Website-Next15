// app/[section]/[slug]/page.tsx

import {
    CancerSurvivorsMap,
    DoctorsMap,
    HealthLibraryMap,
    LeadershipMap,
    PatientCareMap,
    ServicesMap,
} from "@/data";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { JSX } from "react";



  export async function generateMetadata(props: {
    params: Promise<{ section: string; slug: string }>;
  }): Promise<Metadata> {
    const { section, slug } = await props.params;

    const meta = seoData[section]?.[slug];

    if (!meta) {
      return {
        title: "Page Not Found",
        description: "This page does not exist.",
      };
    }

    return {
      title: meta.title,
      description: meta.description,
      keywords: meta.keywords,
      openGraph: {
        title: meta.title,
        description: meta.description,
        type: "website",
        url: `https://synergy-website-alpha.vercel.app/${section}/${slug}`,
        images: [
          {
            url: meta.ogImage,
            width: 1200,
            height: 630,
            alt: meta.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: meta.title,
        description: meta.description,
        images: [meta.ogImage],
      },
      robots: {
        index: true,
        follow: true,
      },
      icons: {
        icon: "/favicon.ico",
      },
    };
  }

export default async function DynamicPage(props: {
    params: Promise<{ section: string; slug: string }>;
  }) {
    const { section, slug } = await props.params;

    const sectionMap: Record<string, Record<string, JSX.Element>> = {
      leadership: LeadershipMap,
      services: ServicesMap,
      "patient-care": PatientCareMap,
      "health-library": HealthLibraryMap,
      survivors: CancerSurvivorsMap,
      doctors: DoctorsMap,
    };

    const Component = sectionMap[section]?.[slug];

    if (!Component) return notFound();

    return Component;
  }
