import styled from "@emotion/styled";
import { DEVICES } from "config";

export const CardsFiltersContainer = styled.div`
  min-width: 256px;
  background-color: ${(props) => props.theme.colors.neutrals1};
  border-radius: ${(props) => props.theme.size["1.5rem"]};
  transition-duration: 0.4s;

  @media ${DEVICES.tablet} {
    width: 100%;
  }
`;

export const RangeFilterContent = styled.div``;

export const DropContentMostLiked = styled.div`
  margin-bottom: ${(props) => props.theme.size["1.5rem"]};
`;
export const DropContentColors = styled.div`
  margin-bottom: 3rem;
`;

export const FilterContainer = styled.div`
  width: 256px;
  height: 256px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.neutrals2};
  border-radius: ${(props) => props.theme.size["0.75rem"]};
  padding: ${(props) => props.theme.size["0.5rem"]};
`;

export const ItemColorFilter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.neutrals2};
  border-radius: ${(props) => props.theme.size["0.75rem"]};
  padding: ${(props) => props.theme.size["0.5rem"]};
  gap: ${(props) => props.theme.size["0.5rem"]};
  cursor: pointer;

  &.backgroundBlack {
    background-color: ${(props) => props.theme.colors.neutrals1};
  }
`;

export const ResetFiltersContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.theme.size["0.5rem"]};
  margin-top: ${(props) => props.theme.size["1.5rem"]};
  transition: ${(props) => props.theme.transitions["0.4s"]};
  border-radius: ${(props) => props.theme.size["0.75rem"]};
  background-color: transparent;
  cursor: pointer;
  &:hover {
  }
`;
