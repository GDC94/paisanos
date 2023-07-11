import styled from "@emotion/styled";

export const ButtonWrapper = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  margin: 0;
  padding: 3px;
  position: relative;

  &.center {
    margin: 0 auto;
  }

  a {
    width: auto;
    gap: 0.6rem;
    align-items: center;
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.grayMedium};
    display: flex;
    font-size: 1rem;
    justify-content: center;
    white-space: nowrap;
    text-align: center;
    text-transform: uppercase;
    transition: ${(props) => props.theme.transitions["0.3s"]};
    margin: 0 auto;
    svg {
      width: 10px;
      height: auto;
      transition: ${(props) => props.theme.transitions["0.3s"]};
      path {
        transition: ${(props) => props.theme.transitions["0.3s"]};
        fill: ${(props) => props.theme.colors.grayMedium};
      }
    }
  }

  &:hover {
    a {
      cursor: pointer;
      color: ${(props) => props.theme.colors.grayLight};
      svg {
        transform: rotate(45deg);
        path {
          fill: ${(props) => props.theme.colors.violet};
        }
      }
    }
  }
`;
