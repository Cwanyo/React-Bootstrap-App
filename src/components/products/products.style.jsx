import styled, { css } from "styled-components";

const ProductFilterWidth = "30%";
const MaxProductFilterWidth = "275px";

export const ProductsContainer = styled.div`
  background-color: yellow;
  min-height: inherit;
`;

export const ProductsFilterContainer = styled.div`
  background-color: dodgerblue;
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 15px 15px 0 15px;

  @media screen and (min-width: 576px) {
    background-color: lightblue;
    width: ${ProductFilterWidth};
    min-height: inherit;

    position: fixed;
  }

  /* Limit width */
  @media screen and (min-width: 
  calc(${MaxProductFilterWidth} * 100 / ${parseInt(ProductFilterWidth)})) {
    width: ${MaxProductFilterWidth};
  }

  @media screen and (max-width: 575px) {
    background-color: dodgerblue;
    position: sticky;
    top: 56px;
    z-index: 1500;
    
    border-radius: 0 0 4px 4px;
    /* event */
    /* min-height: 300px; */
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
  flex-grow: 1;
  background-color: crimson;
  margin-top: 10px;

  ${props =>
    props.hide &&
    css`
      display: none;
    `}
`;

export const Spanner = styled.div`
  background-color: yellow;
  width: 50%;
  height: 20px;
  margin: 10px auto -10px auto;
  text-align: center;
  border-radius: 5px;

  cursor: row-resize;

  @media screen and (min-width: 576px) {
    display: none;
  }
`;

export const ProductsListContainer = styled.div`
  background-color: limegreen;
  /* position: relative; */
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
`;
