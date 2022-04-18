import { css } from "styled-components";

export const mobiles = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
export const tablets = (props) => {
    return css`
      @media only screen and (max-width: 768px) and (min-width:381){
        ${props}
      }
    `;
  };
//   export const laptops = (props) => {
//     return css`
//       @media only screen and (max-width: 1024px) {
//         ${props}
//       }
//     `;
//   };
//   export const Desktops = (props) => {
//     return css`
//       @media only screen and (max-width: 1024px) {
//         ${props}
//       }
//     `;
//   };