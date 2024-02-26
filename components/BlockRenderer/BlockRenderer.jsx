import { isNullableType } from 'graphql'
import React from 'react'
import { Cover } from '../Cover';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { theme } from 'theme';

export const BlockRenderer = ({blocks}) => {
  return blocks.map( block => {
    switch (block.name) {
        case "core/paragraph": {
          return <Paragraph key={block.id} content={block.attributes.content} textAlign={block.attributes.textAlign} textColor={theme[block.attributes.textColor] || block.attributes.style?.color?.text }  />
        }
        case "core/heading": {
          return <Heading key={block.id} content={block.attributes.content} textAlign={block.attributes.textAlign} level={block.attributes.level}/>
        }
        case "core/cover": {
          console.log("BLOCK: ", block);
            return <Cover key={block.id} background={block.attributes.url}><BlockRenderer blocks={block.innerBlocks}/></Cover>
        }
        default: 
            return null;
    }
  });
}
