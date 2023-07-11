import FilterByColors from "components/filterByColors/filterByColors";
import { CardsFiltersContainer } from "./cardsFiltersComponent.styles";

const CardsFiltersComponent = () => {
  return (
    <CardsFiltersContainer>
      <FilterByColors backgroundBlack={true} />
    </CardsFiltersContainer>
  );
};

export default CardsFiltersComponent;
