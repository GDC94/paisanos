import { Container } from "layouts/mainLayout";
import { FilterTag } from "./components/filterTag";
import { DropDownComponent } from "components/commons/dropDown";
import {
  CategorySectionContainer,
  FiltersCategorySectionContent,
  FiltersContent,
} from "./filterCategorySection.styles";

const FilterCategorySection = () => {
  return (
    <CategorySectionContainer>
      <Container>
        <FiltersContent>
          <DropDownComponent
            items={[{ text: "texto" }]}
            defaultOptionValue='Newest'
          />
          <FiltersCategorySectionContent>
            <FilterTag text={"All items"} isActive />
            <FilterTag text={"Art"} />
            <FilterTag text={"Photography"} />
          </FiltersCategorySectionContent>
        </FiltersContent>
      </Container>
    </CategorySectionContainer>
  );
};

export default FilterCategorySection;
