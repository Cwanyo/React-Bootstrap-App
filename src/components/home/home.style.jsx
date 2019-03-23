import styled from "styled-components";

import { Button } from "react-bootstrap";

export const SButton = styled(Button)`
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  background-color: ${props => props.color};

  &:hover {
    background-color: gray;
  }
`;
