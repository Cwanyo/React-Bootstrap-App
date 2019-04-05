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
  padding: 15px 15px 0 15px;

  /* Large screen */
  @media screen and (min-width: 576px) {
    background-color: lightblue;
    position: fixed;
    min-height: inherit;

    width: ${ProductFilterWidth};
  }

  /* Small screen */
  @media screen and (max-width: 575px) {
    background-color: dodgerblue;
    position: sticky;
    top: 56px;
    z-index: 1500;
    
    border-radius: 0 0 10px 10px;
  }

  /* Limit width */
  @media screen and (min-width: 
  calc(${MaxProductFilterWidth} * 100 / ${parseInt(ProductFilterWidth)})) {
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
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  /* Small screen */
  @media screen and (max-width: 575px) {
    margin-top: 5px;
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
  /* background-color: red; */
  width: 70%;
  height: 34px;
  margin: 5px auto -20px auto;
  text-align: center;

  border-top: 4px solid yellow;

  @media screen and (min-width: 576px) {
    display: none;
  }
/* 
  ${props =>
    props.show &&
    css`
      margin-top: 10px;
    `} */
`;

export const ProductsListContainer = styled.div`
  background-color: limegreen;
  width: 100%;
  min-height: inherit;
  padding: 15px;

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

  @media screen and (max-width: 575px) {
    transition: filter 750ms ease;

    ${props =>
      props.dim &&
      css`
        filter: blur(4px);
      `}
  }
`;
