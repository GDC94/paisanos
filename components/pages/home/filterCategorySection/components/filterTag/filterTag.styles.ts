import styled from "@emotion/styled";

export const IconTickWrapper = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: ${(props) => props.theme.size["0.5rem"]};
  svg {
    width: ${(props) => props.theme.size["0.75rem"]};
    height: auto;
  }
`;

export const FilterTagContainer = styled.div`
  align-items: center;
  border-radius: 100px;
  color: ${(props) => props.theme.colors.neutrals4};
  display: flex;
  font-size: ${(props) => props.theme.size["0.875rem"]};
  font-weight: ${(props) => props.theme.fontWeight[700]};
  flex: 0 0 auto;
  line-height: ${(props) => props.theme.size["1.25rem"]};
  justify-content: center;
  padding: ${(props) => props.theme.size["0.375rem"]}${(props) => props.theme.size["0.75rem"]};
  text-align: center;
  transition: ${(props) => props.theme.transitions["0.3s"]};

  &:hover {
    background-color: ${(props) => props.theme.colors.grayDark};
    cursor: pointer;
  }

  &.isActive {
    background-color: ${(props) => props.theme.colors.neutrals6};
    border-color: ${(props) => props.theme.colors.neutrals2};
    color: ${(props) => props.theme.colors.neutrals2};
    cursor: pointer;
  }

  &.isDisabled {
    background-color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.neutrals4};
    color: ${(props) => props.theme.colors.neutrals4};
    cursor: not-allowed;
    pointer-events: none;
  }
`;
