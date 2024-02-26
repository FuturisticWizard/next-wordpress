import { getFontSizeForHeading, getTextAlign } from "utils/fonts";
import React from "react";
import relativesToAbsoluteUrls from "utils/relativesToAbsoluteUrls";

export const Paragraph = ({textAlign = "left", textColor, content}) => {
  console.log('content : ', relativesToAbsoluteUrls(content))

  return (
  <p
  className={`max-w-5xl mx-auto ${getTextAlign(textAlign)}  `}
    style={{ color: textColor}}
    dangerouslySetInnerHTML={{ __html: relativesToAbsoluteUrls(content) }}
  />
  );
}