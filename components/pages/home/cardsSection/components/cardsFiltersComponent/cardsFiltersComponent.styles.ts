import styled from "@emotion/styled";

export const CardsFiltersContainer = styled.div`
  min-width: 256px;
  height: 600px;
  background-color: ${(props) => props.theme.colors.neutrals2};
  border-radius: ${(props) => props.theme.size["1.5rem"]};
  padding: ${(props) => props.theme.size["0.75rem"]};
  transition-duration: 0.4s;
`;
