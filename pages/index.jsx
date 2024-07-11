// import { gql } from "@apollo/client";
// import client from "client";
import { BlockRenderer } from "components/BlockRenderer";
import MainMenu from "components/MainMenu/MainMenu";
// import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { getPageStaticProps } from "utils/getPageStaticProps";
// import mapMainMenuItems from "utils/mapMainMenuItems";

export default function Home(props) {
  console.log("PROPS: ", props)
  return (
  <div>
    <MainMenu items={props.mainMenuItems} callToActionLabel={props.callToActionLabel} callToActionDestination={props.callToActionDestination} />
    <BlockRenderer blocks={props.blocks}/>
  </div>);
}
export const getStaticProps = getPageStaticProps;
// export const getStaticProps = async (context) => {
//   console.log("CONTEXT: ", context)
//   const {data} = await client.query({
//     query: gql`
//     query NewQuery {
//       nodeByUri(uri: "/") {
//         ... on Page {
//           id
//           blocks(postTemplate: false)
//         }
//       }
//       acfOptionsMainMenu {
//         mainMenu {
//           callToActionButton {
//             label
//             destination {
//               ... on Page {
//               uri
//               }
//             }
//           }
//           menuItems {
//             menuItem {
//               destination {
//                 ... on Page {
//                   uri
//                 }
//               }
//               label
//             }
//             items {
//               destination {
//                  ... on Page {
//                   uri
//                 }
//               }
//               label
//             }
//           }
//         }
//       }
//     }
//     `
//   }) 
//   return {
//     props: {
//       mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
//       blocks: cleanAndTransformBlocks(data.nodeByUri.blocks) ,
//       callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
//       callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri
//     }
//   }
// }