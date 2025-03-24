// app/[section]/[slug]/page.tsx

import { LeadershipMap, PatientCareMap, ServicesMap } from "@/data";
import { notFound } from "next/navigation";
import { JSX } from "react";

export default function DynamicPage({ params }: { params: { section: string; slug: string } }) {
  const { section, slug } = params;

  const sectionMap: Record<string, Record<string, JSX.Element>> = {
    leadership: LeadershipMap,
    services: ServicesMap,
    "patient-care": PatientCareMap,
    // add more sections as needed
  };

  const Component = sectionMap[section]?.[slug];

  if (!Component) return notFound();

  return Component;
}
