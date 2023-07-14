import styled from "@emotion/styled";
import { DEVICES } from "config";

export const CardsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-columns: min-content;
  column-gap: ${(props) => props.theme.size["2rem"]};
  row-gap: ${(props) => props.theme.size["2rem"]};
  @media ${DEVICES.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${DEVICES.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
