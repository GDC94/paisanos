import { Container } from "layouts/mainLayout";
import { CardsGridComponent } from "./components/cardsGridComponent";
import { CardsFiltersComponent } from "./components/cardsFiltersComponent";
import {
  CardSectionContent,
  CardsSectionContainer,
} from "./cardsSection.styles";

const CardsSection = () => {
  return (
    <CardsSectionContainer>
      <Container>
        <CardSectionContent>
          <CardsFiltersComponent />
          <CardsGridComponent />
        </CardSectionContent>
      </Container>
    </CardsSectionContainer>
  );
};

export default CardsSection;
