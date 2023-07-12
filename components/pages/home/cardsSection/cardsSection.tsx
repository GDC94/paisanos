import { Container } from "layouts/mainLayout";
import { CardsGridComponent } from "./components/cardsGridComponent";
import { ColumnFiltersComponent } from "./components/cardsFiltersComponent";
import {
  CardSectionContent,
  CardsSectionContainer,
} from "./cardsSection.styles";

const CardsSection = () => {
  return (
    <CardsSectionContainer>
      <Container>
        <CardSectionContent>
          <ColumnFiltersComponent />
          <CardsGridComponent />
        </CardSectionContent>
      </Container>
    </CardsSectionContainer>
  );
};

export default CardsSection;
