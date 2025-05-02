// components/FloatingBarWrapper.tsx
"use client";
import { actions } from "@/data";
import { FloatingActionBar } from "./FloatingActionBar";

type Props = {
    isOnFooter?: boolean;
    isOnHomePage?: boolean;
};

export const FloatingBarWrapper = ({ isOnFooter, isOnHomePage }: Props) => {
    return <FloatingActionBar isOnFooter={isOnFooter} isOnHomePage={isOnHomePage} items={actions} />;
};
