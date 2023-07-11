import { classes } from "utils";

import { FilterTagContainer } from "./filterTag.styles";

interface FilterTagProps {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
  isDisabled?: boolean;
}
const FilterTag = ({ text, isActive, isDisabled, onClick }: FilterTagProps) => {
  return (
    <FilterTagContainer
      className={classes({ isActive, isDisabled })}
      onClick={() => {
        {
          onClick && onClick();
        }
      }}
    >
      {text}
    </FilterTagContainer>
  );
};

export default FilterTag;
