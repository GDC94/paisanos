import { Container } from "layouts/mainLayout";
import { FilterTag } from "./components/filterTag";
import {
  CategorySectionContainer,
  FiltersCategorySectionContent,
} from "./filterCategorySection.styles";

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
