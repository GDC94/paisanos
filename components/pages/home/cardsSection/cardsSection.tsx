import { Container } from "layouts/mainLayout";
import { CardsGridComponent } from "./cardsGridComponent";
import { CardsFiltersComponent } from "./cardsFiltersComponent";
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
