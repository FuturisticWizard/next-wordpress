import React from 'react'

const relativesToAbsoluteUrls = (htmlString = "") => {
  return  htmlString.split(process.env.NEXT_PUBLIC_WP_URL).join("")
}


export default relativesToAbsoluteUrls