import { getFontSizeForHeading, getTextAlign } from "utils/fonts";
import React from "react";

export const Paragraph = ({textAlign = "left", textColor, content}) => {
  console.log('text color: ', textColor)

  return (
  <p
  className={`max-w-5xl mx-auto ${getTextAlign(textAlign)}  `}
    style={{ color: textColor}}
    dangerouslySetInnerHTML={{ __html: content }}
  />
  );
}