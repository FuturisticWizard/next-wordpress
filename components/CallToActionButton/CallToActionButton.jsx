import { ButtonLink } from 'components/ButtonLink/ButtonLink'
import React from 'react'

export const CallToActionButton = ({align = "left", destination, buttonLabel }) => {
    const alignMap = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    }
  return (
    <div className={`${alignMap[align]} font-bold text-white`}>
        <ButtonLink destination={destination} label={buttonLabel} />
    </div>
  )
}
