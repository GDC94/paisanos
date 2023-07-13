import { useState } from "react";
import { InputRange } from "components/commons/inputRange";
import { Text } from "components/commons/text";
import { Divider } from "components/commons/divider";
import { DropDownComponent } from "components/commons/dropDown";
import { ResetIcon } from "components/commons/icons/icons";
import {
  CardsFiltersContainer,
  DropContentColors,
  DropContentMostLiked,
  RangeFilterContent,
  ResetFiltersContent,
} from "./columnFiltersComponent.styles";

const ColumnFiltersComponent = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const min = value;
  const max = "10";
  return (
    <CardsFiltersContainer>
      <RangeFilterContent>
        <Text
          text='price range'
          size='0.75rem'
          color='neutrals5'
          isPoppins
          lineHeight='0.75rem'
          textTransform='upper'
          marginBottom='0.75rem'
        />

        <InputRange
          value={"fl,l,lf,"}
          handleChange={handleChange}
          min={min}
          max={max}
          step={"dddd"}
        />
      </RangeFilterContent>
      <Divider />
      <DropContentMostLiked>
        <Text
          text='likes'
          size='0.75rem'
          color='neutrals5'
          isPoppins
          lineHeight='0.75rem'
          textTransform='upper'
          marginBottom='0.75rem'
        />
        <DropDownComponent
          defaultOptionValue='Most Liked'
          items={[{ text: "kemdkmed" }]}
        />
      </DropContentMostLiked>

      <DropContentColors>
        <Text
          text='colors'
          size='0.75rem'
          color='neutrals5'
          isPoppins
          lineHeight='0.75rem'
          textTransform='upper'
          marginBottom='0.75rem'
        />
        <DropDownComponent
          defaultOptionValue='colors'
          items={[{ text: "kemdkmed" }]}
        />
      </DropContentColors>
      {/*
       <FilterContainer>
      <ItemColorFilter>
        <AllColorsIcon />
        <Text
          text={"All colors"}
          color={"primary1"}
          size='0.75rem'
          lineHeight='1.5rem'
          fontWeight={500}
          isPoppins
        />
      </ItemColorFilter>

      <ItemColorFilter>
        <BlackIcon />
        <Text
          text={"Black"}
          color={"neutrals8"}
          size='0.75rem'
          lineHeight='1.5rem'
          fontWeight={500}
          isPoppins
        />
      </ItemColorFilter>
      <ItemColorFilter >
        <GreenIcon />
        <Text
          text={"Green"}
          color={"neutrals8"}
          size='0.75rem'
          lineHeight='1.5rem'
          fontWeight={500}
          isPoppins
        />
      </ItemColorFilter>

      <ItemColorFilter>
        <PinkIcon />
        <Text
          text={"Pink"}
          color={"neutrals8"}
          size='0.75rem'
          lineHeight='1.5rem'
          fontWeight={500}
          isPoppins
        />
      </ItemColorFilter>

      <ItemColorFilter>
        <PurpleIcon />
        <Text
          text={"Purple"}
          color={"neutrals8"}
          size='0.75rem'
          lineHeight='1.5rem'
          fontWeight={500}
          isPoppins
        />
      </ItemColorFilter>
    </FilterContainer>
   */}

      <Divider />
      <ResetFiltersContent>
        <ResetIcon />
        <Text
          text={"Reset filter"}
          color={"neutrals7"}
          size='0.75rem'
          lineHeight='1rem'
          isPoppins
        />
      </ResetFiltersContent>
    </CardsFiltersContainer>
  );
};

export default ColumnFiltersComponent;
