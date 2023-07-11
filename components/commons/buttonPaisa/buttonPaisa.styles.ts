import styled from "@emotion/styled";

export const ButtonContainer = styled.button`
  width: 100%;
  align-items: center;
  border: 2px solid;
  border-radius: 90px;
  display: flex;
  justify-content: center;
  line-height: unset;
  white-space: nowrap;
  overflow: hidden;
  padding-left: ${(props) => props.theme.size["1rem"]};
  padding-right: ${(props) => props.theme.size["1rem"]};
  padding-top: ${(props) => props.theme.size["0.75rem"]};
  padding-bottom: ${(props) => props.theme.size["0.75rem"]};
  font-weight: ${(props) => props.theme.fontWeight[700]};
  transition: ${(props) => props.theme.transitions["0.6s"]};
  cursor: pointer;

  /* Buttons type */
  &.small-outline {
    width: 137px;
    background-color: ${(props) => props.theme.colors.neutrals1};
    border-color: ${(props) => props.theme.colors.neutrals4};
    color: ${(props) => props.theme.colors.neutrals8};
    font-size: ${(props) => props.theme.size["0.875rem"]};
    font-family: ${(props) => props.theme.fonts.DMsans};
    &:hover {
      background-color: ${(props) => props.theme.colors.neutrals1b};
    }
  }

  &.large-outline {
    background-color: ${(props) => props.theme.colors.neutrals1};
    border-color: ${(props) => props.theme.colors.neutrals4};
    color: ${(props) => props.theme.colors.neutrals8};
    font-size: ${(props) => props.theme.size["1rem"]};
    font-family: ${(props) => props.theme.fonts.DMsans};
    &:hover {
      background-color: ${(props) => props.theme.colors.neutrals1b};
    }
  }
  &.large-solid {
    background-color: ${(props) => props.theme.colors.primary1};
    border-color: ${(props) => props.theme.colors.primary1};
    color: ${(props) => props.theme.colors.neutrals8};
    font-size: ${(props) => props.theme.size["1rem"]};
    font-family: ${(props) => props.theme.fonts.DMsans};
    &:hover {
      background-color: ${(props) => props.theme.colors.primary1b};
    }
  }
  &.galery-controls {
    background-color: ${(props) => props.theme.colors.neutrals1};
    border-color: ${(props) => props.theme.colors.neutrals3};
    height: ${(props) => props.theme.size["2.5rem"]};
    width: ${(props) => props.theme.size["2.5rem"]};

    &:hover {
      background-color: ${(props) => props.theme.colors.neutrals1b};
      border-color: ${(props) => props.theme.colors.neutrals4};
    }
  }
  &.without-border {
    border-color: transparent;
  }
`;
