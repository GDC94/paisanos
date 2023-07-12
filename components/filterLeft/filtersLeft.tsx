import { Divider } from "components/commons/divider";
import { Text } from "components/commons/text";
import { DropDownComponent } from "components/commons/dropDown";
import { ResetIcon } from "components/commons/icons/icons";
import {
  DropContentColors,
  DropContentMostLiked,
  RangeFilterContent,
  ResetFiltersContent,
} from "./filtersLeft.styles";

const FiltersLeft = () => (
  <>
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
  </>
);
export default FiltersLeft;
