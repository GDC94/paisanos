import { Text } from "components/text";
import {
  FilterContainer,
  ItemColorFilter,
  ResetFiltersContent,
} from "./filterByColors.styles";
import {
  AllColorsIcon,
  BlackIcon,
  GreenIcon,
  PinkIcon,
  PurpleIcon,
  ResetIcon,
} from "components/commons/icons/icons";
import { classes } from "utils";
import { Divider } from "components/commons/divider";

interface FilterByColorsProps {
  backgroundBlack: boolean;
}

const FilterByColors = ({ backgroundBlack }: FilterByColorsProps) => (
  <>
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
      <ItemColorFilter className={classes({ backgroundBlack })}>
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
  </>
);
export default FilterByColors;
