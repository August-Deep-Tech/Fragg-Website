"use client";
import {useState, useEffect} from "react";

const removeBrTags = (htmlString: string): string => {
  return htmlString.replace(/<br\s*\/?>/gi, " ");
};

const useResponsiveDescription = (description: string): string => {
  const [modifiedDescription, setModifiedDescription] =
    useState<string>(description);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setModifiedDescription(removeBrTags(description));
      } else {
        setModifiedDescription(description);
      }
    };

    handleResize(); // Call once on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [description]);

  return modifiedDescription;
};

export default useResponsiveDescription;
