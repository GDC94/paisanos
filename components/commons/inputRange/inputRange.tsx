import { Text } from "../text";
import {
  ContainerInputRange,
  ContainerMinMaxValues,
  Slider,
} from "./inputRange.styles";

interface InputRangeProps {
  value: string | number;
  handleChange: (minPrice: number, maxPrice: number) => void;
  min: number;
  max: number;
  step: string | number;
}

const InputRange = ({ value, handleChange, min, max, step }: InputRangeProps) => {
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    handleChange(newValue, max);
  };
  return (
    <>
      <ContainerInputRange>
        <Slider
          type='range'
          defaultValue={value}
          onChange={handleSliderChange}
          min={min}
          max={max}
          step={step}
        />
      </ContainerInputRange>
      <ContainerMinMaxValues>
        <Text
          text={min.toString()}
          color={"neutrals7"}
          size='0.875'
          lineHeight='1.5'
          fontWeight={500}
          isPoppins
        />
        <Text
          text={max.toString()}
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
