import { Container } from "layouts/mainLayout";

import {
  CategorySectionContainer,
  FiltersCategorySectionContent,
} from "./filterCategorySection.styles";
import { FilterTag } from "./components/filterTag";

const FilterCategorySection = () => {
  return (
    <CategorySectionContainer>
      <Container>
        <FiltersCategorySectionContent>
          <FilterTag text={"All items"} isActive />
          <FilterTag text={"Art"} />
          <FilterTag text={"Photography"} />
        </FiltersCategorySectionContent>
      </Container>
    </CategorySectionContainer>
  );
};

export default FilterCategorySection;
