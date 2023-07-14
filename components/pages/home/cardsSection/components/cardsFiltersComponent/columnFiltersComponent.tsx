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
  const { challengeState, resetState, filterByColor, filterByRange } =
    useChallengeState();
  const { allAunctions } = challengeState;
  const colors = adapterColorsToFilter(allAunctions);
  const arrColorsAndIconsToFilter = DynamicColorIcon(colors);

  const [priceRange, setPriceRange] = useState({ minPrice: 0, maxPrice: 10 });



  const handleChangePriceRange = (minPrice: number, maxPrice: number) => {
    const newPriceRange = { minPrice, maxPrice };
    setPriceRange(newPriceRange);
    filterByRange(newPriceRange);
  };

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
          value={priceRange.minPrice}
          handleChange={handleChangePriceRange}
          min={0}
          max={10}
          step={0.1}
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
