// components/FloatingBarWrapper.tsx
"use client";
import { actions } from "@/data";
import { FloatingActionBar } from "./FloatingActionBar";

type Props = {
  isOnFooter?: boolean;
};

export const FloatingBarWrapper = ({ isOnFooter }: Props) => {
  return <FloatingActionBar isOnFooter={isOnFooter} items={actions} />;
};
