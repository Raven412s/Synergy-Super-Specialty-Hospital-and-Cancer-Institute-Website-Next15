// app/[section]/[slug]/page.tsx

import { CancerSurvivorsMap, HealthLibraryMap, LeadershipMap, PatientCareMap, ServicesMap } from "@/data";
import { notFound } from "next/navigation";
import { JSX } from "react";

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
    };

    const Component = sectionMap[section]?.[slug];

    if (!Component) return notFound();

    return Component;
  }
