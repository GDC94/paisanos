import { useState } from "react";
import { InputRange } from "components/commons/inputRange";
import { Text } from "components/commons/text";
import { Divider } from "components/commons/divider";
import { useChallengeState } from "context/challengeContext";
import adapterColorsToFilter from "adapters/adapterColorsToFilter";
import { DropDownComponent } from "components/commons/dropDown";
import { ResetIcon } from "components/commons/icons/icons";
import { DynamicColorIcon } from "components/dynamicColorIcon";
import { ButtonPaisa } from "components/commons/buttonPaisa";
import {
  CardsFiltersContainer,
  DropContentColors,
  DropContentMostLiked,
  RangeFilterContent,
  ResetFiltersContent,
} from "./columnFiltersComponent.styles";

const ColumnFiltersComponent = () => {
  const { challengeState, resetState, filterByColor } = useChallengeState();
  const { allAunctions } = challengeState;

  const colors = adapterColorsToFilter(allAunctions);
  const arrColorsAndIconsToFilter = DynamicColorIcon(colors);
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
          items={[{ text: "Coming soon..." }]}
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
          items={arrColorsAndIconsToFilter}
          filterByColor={filterByColor}
        />
      </DropContentColors>

      <Divider />
      <ResetFiltersContent>
        <ButtonPaisa
          text='Reset filters'
          buttonType='reset'
          icon={<ResetIcon />}
          onClick={() => resetState()}
        />
      </ResetFiltersContent>
    </CardsFiltersContainer>
  );
};

export default ColumnFiltersComponent;
