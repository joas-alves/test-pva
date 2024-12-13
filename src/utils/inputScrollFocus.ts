export const handleScrollToInput = (inputRef: any) => {
  if (inputRef.current) {
    inputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    inputRef.current.focus();
  }
};
