import React from "react";

const useTextFormatter = () => {
  const convertStringToParagraph = (paragraph: string) => {
    if (!paragraph) return paragraph;
    
    return <div className="flex flex-col gap-2">
      {paragraph
      .split("<NL>")
      .map((eachSmallParagraph) => <p className="my-1">{eachSmallParagraph}</p>)}
    </div>;
  };

  return { convertStringToParagraph };
};

export default useTextFormatter;
