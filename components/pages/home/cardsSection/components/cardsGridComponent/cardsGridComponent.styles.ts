import styled from "@emotion/styled";

export const CardsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-columns: min-content;
  column-gap: ${(props) => props.theme.size["2rem"]};
  row-gap: ${(props) => props.theme.size["2rem"]};
`;
