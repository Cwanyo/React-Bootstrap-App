import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: goldenrod;

  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background-color: lightsalmon;
  margin: 5px;
  color: yellow;

  /* Formular
  ((CardContainer - (NumProducts * MarginLeftRight * MarginSize)) / NumProducts) */
  flex: 0 1 calc((100% - (1 * 2 * 5px)) / 1);

  @media screen and (min-width: 576px) {
    flex: 0 1 calc((100% - (2 * 2 * 5px)) / 2);
  }

  @media screen and (min-width: 992px) {
    flex: 0 1 calc((100% - (3 * 2 * 5px)) / 3);
  }

  @media screen and (min-width: 1200px) {
    flex: 0 1 calc((100% - (4 * 2 * 5px)) / 4);
  }
`;

export const CardImg = styled.img`
  display: block;
  width: 100%;
  height: auto;

  /* object-fit: scale-down; */
  object-fit: cover;
`;

export const CardBody = styled.div`
  background-color: slateblue;
  padding: 10px;
  /* overflow: hidden; */
`;

export const CardTitle = styled.h2`
  text-align: center;
  font-size: 1rem;
`;
