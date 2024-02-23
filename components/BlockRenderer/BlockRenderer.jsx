import { isNullableType } from 'graphql'
import React from 'react'
import { Cover } from '../Cover';


export const BlockRenderer = ({blocks}) => {
  return blocks.map( block => {
    switch (block.name) {
        case "core/cover": {
            return <Cover key={block.id} background={block.attributes.url}><BlockRenderer blocks={block.innerBlocks}/></Cover>
        }
        default: 
            return null;
    }
  });
}
