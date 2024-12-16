import { MutableRefObject } from "react";
export const handleScrollToInput = (inputRef: MutableRefObject<HTMLInputElement | null>) => {
  if (inputRef.current) {
    inputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    inputRef.current.focus();
  }
};
