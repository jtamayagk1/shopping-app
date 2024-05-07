"use client";

import React, { PropsWithChildren } from "react";
import { PageLoader } from "../components/PageLoader";
import { useUser } from "@auth0/nextjs-auth0/client";
import Navbar from "../components/Navbar";

export const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { isLoading } = useUser();

  if (isLoading) {
    return (
      <PageLoader />
    );
  }

  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
};