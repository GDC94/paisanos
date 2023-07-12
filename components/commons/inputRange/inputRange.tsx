import { Text } from "../text";

import {
  ContainerInputRange,
  ContainerMinMaxValues,
  Slider,
} from "./inputRange.styles";

interface Props {
  value: string | number;
  handleChange: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  min: string;
  max: string;
  step: string;
}

const InputRange = ({ value, handleChange, min, max, step }: Props) => {
  return (
    <>
      <ContainerInputRange>
        <Slider
          type='range'
          defaultValue={value}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
        />
      </ContainerInputRange>
      <ContainerMinMaxValues>
        <Text
          text={min}
          color={"neutrals7"}
          size='0.875'
          lineHeight='1.5'
          fontWeight={500}
          isPoppins
        />
        <Text
          text={max}
          color={"neutrals7"}
          size='0.875'
          lineHeight='1.5'
          fontWeight={500}
          isPoppins
        />
      </ContainerMinMaxValues>
    </>
  );
};

export default InputRange;
