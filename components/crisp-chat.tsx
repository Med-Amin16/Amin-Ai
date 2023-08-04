"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8a66d5a5-46e1-4207-8456-9bc19849e547");
  }, []);

  return null;
};
