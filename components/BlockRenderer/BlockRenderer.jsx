import { isNullableType } from 'graphql'
import React from 'react'

export const BlockRenderer = ({blocks}) => {
  return blocks.map( block => {
    switch (block.name) {
        case "core/cover": {
            return <div key={block.id}>core cover</div>
        }
        default: 
            return null;
    }
  });
}
