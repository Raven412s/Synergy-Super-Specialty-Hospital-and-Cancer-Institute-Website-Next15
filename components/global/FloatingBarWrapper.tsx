// components/FloatingBarWrapper.tsx
"use client";
import { actions } from "@/data";
import { FloatingActionBar } from "./FloatingActionBar";

export const FloatingBarWrapper = () => {
  return <FloatingActionBar items={actions} />;
};
