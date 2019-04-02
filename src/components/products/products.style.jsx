import styled from "styled-components";

const ProductFilterWidth = "275px";

export const ProductsContainer = styled.div`
  background-color: yellow;
  min-height: inherit;
  /* display: flex; */
  /* flex-wrap: wrap; */
`;

export const ProductsFilterContainer = styled.div`
  background-color: dodgerblue;
  /* position: relative; */
  width: 100%;
  padding: 15px;

  /* position: sticky;
  top: 55.6px;
  z-index: 1000; */

  @media screen and (min-width: 576px) {
    background-color: lightblue;
    width: ${ProductFilterWidth};
    min-height: inherit;

    position: fixed;
  }

  @media screen and (max-width: 575px) {
    background-color: dodgerblue;

    position: sticky;
    top: 55.6px;
    z-index: 1000;
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
`;