import styled from "@emotion/styled";

export const ContainerInputRange = styled.div`
  display: grid;
  place-items: center;
`;

export const Slider = styled.input`
  width: 100%;
  height: 6px;
  border-radius: 10px;
  appearance: none;
  outline: none;
  opacity: 2;
  --webkit-transition: 0.2s;
  transition: opacity 0.3s;

  &::-webkit-slider-runnable-track {
    background-color: ${(props) => props.theme.colors.neutrals3};
    height: 0.5rem;
    border-radius: 10px;
  }
  &::-moz-range-track {
    background-color: ${(props) => props.theme.colors.neutrals3};
    height: 0.5rem;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */

    margin-top: -8px; /* Centers thumb on the track */
    background-color: ${(props) => props.theme.colors.primary1};
    border: 4px solid ${(props) => props.theme.colors.neutrals8};
    height: 1.5rem;
    width: 1.5rem;
    box-shadow: 0px 8px 16px -8px rgba(15, 15, 15, 0.2);
    border-radius: 100%;
  }
`;

export const ContainerMinMaxValues = styled.div`
  margin-top: ${(props) => props.theme.size["1rem"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
