import styled from "@emotion/styled";

export const CardsFiltersContainer = styled.div`
  min-width: 256px;
  height: 600px;
  background-color: ${(props) => props.theme.colors.neutrals1};
  border-radius: ${(props) => props.theme.size["1.5rem"]};

  transition-duration: 0.4s;
`;
