import client from "client"
import mapMainMenuItems  from "./mapMainMenuItems"
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks"
import { gql } from "@apollo/client"

export const getPageStaticProps = async (context) => {
    console.log("CONTEXT: ", context)
    const {data} = await client.query({
      query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
        }
        acfOptionsMainMenu {
          mainMenu {
            callToActionButton {
              label
              destination {
                ... on Page {
                uri
                }
              }
            }
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              items {
                destination {
                   ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
      `
    }) 
    return {
      props: {
        mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
        blocks: cleanAndTransformBlocks(data.nodeByUri.blocks) ,
        callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
        callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri
      }
    }
  }
