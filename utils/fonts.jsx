export const getTextAlign = (textAlign="right") => {
    const textAlignMap = {
        "left": "text-left",
        "right": "text-right",
        "center": "text-center"
    }
    return `${textAlignMap[textAlign] || ""}`;
}
// export const getFontSizeForHeading = (fontSize) => {
//         console.log("fontsize detected : ", fontSize)
//         const fontSizeMap = {
//             'x-large': "text-6xl",
//             large: "text-5xl",
//             medium: "text-4xl",
//             small: "text-3xl",
//             5: "text-2xl",
//             6: "text-xl",
//         }
//         return `${fontSizeMap[fontSize] || ""}`
//     }
export const getFontSizeForHeading = (level) => {
    const fontSizeMap = {
      1: "text-6xl",
      2: "text-5xl",
      3: "text-4xl",
      4: "text-3xl",
      5: "text-2xl",
      6: "text-xl",
    };
    return `${fontSizeMap[level] || ""}`;
};