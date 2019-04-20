import styled, { css } from "styled-components";

const ProductFilterWidth = "30%";
const MaxProductFilterWidth = "275px";

export const ProductsContainer = styled.div`
  background-color: yellow;
  min-height: inherit;
`;

export const ProductsFilterContainer = styled.div`
  display: flex;
  flex-flow: column;

  width: 100%;
  max-height: calc(100vh - 56px);

  /* Large screen */
  @media screen and (min-width: 576px) {
    background-color: lightblue;
    position: fixed;

    width: ${ProductFilterWidth};
    min-height: inherit;

    padding: 15px;
  }

  /* Small screen */
  @media screen and (max-width: 575px) {
    background-color: #49707f;
    position: sticky;
    top: 56px;
    z-index: 1500;

    padding: 0 15px;
    border-radius: 0 0 10px 10px;
  }

  /* Limit width */
  @media screen and (min-width: 
  calc(${MaxProductFilterWidth} * 100 / ${parseInt(ProductFilterWidth)})) {
    width: ${MaxProductFilterWidth};
  }

  /* Support old browser */
  @media screen and (min-width: ${(parseInt(MaxProductFilterWidth) * 100) /
    parseInt(ProductFilterWidth)}px) {
    width: ${MaxProductFilterWidth};
  }
`;

export const SearchBar = styled.input`
  display: block;

  width: 100%;

  padding: 6px 12px 6px 12px;
  border: 0;
  border-radius: 4px;

  text-align: center;
  font-size: 1rem;
  font-weight: 400;
`;

export const ListContainer = styled.div`
  background-color: crimson;
  overflow: auto;

  margin-top: 10px;

  ::-webkit-scrollbar {
    display: none;
  }

  /* Small screen */
  @media screen and (max-width: 575px) {
    max-height: 50vh;
    transition: max-height 750ms ease;

    ${props =>
      props.hide &&
      css`
        max-height: 0px;
      `}
  }
`;

export const Spanner = styled.div`
  width: 60%;
  height: 34px;

  margin: 5px auto -20px auto;
  text-align: center;
  border-top: 4px solid white;

  @media screen and (min-width: 576px) {
    display: none;
  }
`;

export const ProductsListContainer = styled.div`
  background-color: limegreen;
  width: 100%;
  min-height: inherit;

  padding: 25px 15px 40px 15px;

  @media screen and (min-width: 576px) {
    background-color: lightgreen;
    flex: 0 0 calc(100% - ${ProductFilterWidth});
    max-width: calc(100% - ${ProductFilterWidth});

    float: right;
  }

  /* Adjust the width accodring to ProductsFilterContainer limit */
  @media screen and (min-width: 
  calc(${MaxProductFilterWidth} * 100 / ${parseInt(ProductFilterWidth)})) {
    flex: 0 0 calc(100% - ${MaxProductFilterWidth});
    max-width: calc(100% - ${MaxProductFilterWidth});
  }

  /* Support old browser */
  @media screen and (min-width: ${(parseInt(MaxProductFilterWidth) * 100) /
    parseInt(ProductFilterWidth)}px) {
    flex: 0 0 calc(100% - ${MaxProductFilterWidth});
    max-width: calc(100% - ${MaxProductFilterWidth});
  }

  @media screen and (max-width: 575px) {
    transition: filter 750ms ease;

    ${props =>
      props.dim &&
      css`
        filter: blur(4px);
      `}
  }
`;

export const ScrollButton = styled.div`
  background-color: red;
  visibility: visible;
  opacity: 0.6;

  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;

  width: 40px;
  height: 40px;

  line-height: 40px;
  border-radius: 25px;

  cursor: pointer;

  transition: opacity 500ms, visibility 500ms linear;

  svg {
    color: white;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }

  ${props =>
    props.hide &&
    css`
      visibility: hidden;
      opacity: 0;
    `}
`;
