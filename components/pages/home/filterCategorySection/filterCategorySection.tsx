import { useChallengeState } from "context/challengeContext";
import { Container } from "layouts/mainLayout";
import { FilterTag } from "./components/filterTag";
import { DropDownComponent } from "components/commons/dropDown";
import {
  CategorySectionContainer,
  FiltersCategorySectionContent,
  FiltersContent,
} from "./filterCategorySection.styles";

const FilterCategorySection = () => {
  const { filterByCategory } = useChallengeState();

  return (
    <CategorySectionContainer>
      <Container>
        <FiltersContent>
          <DropDownComponent
            items={[{ text: "Coming soon..." }]}
            defaultOptionValue='Newest'
          />
          <FiltersCategorySectionContent>
            <FilterTag
              text={"All items"}
              onClick={() => filterByCategory("All items")}
            />
            <FilterTag text={"Art"} onClick={() => filterByCategory("Art")} />
            <FilterTag
              text={"Photography"}
              onClick={() => filterByCategory("Photography")}
            />
          </FiltersCategorySectionContent>
        </FiltersContent>
      </Container>
    </CategorySectionContainer>
  );
};

export default FilterCategorySection;
