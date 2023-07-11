import { Container } from "layouts/mainLayout";
import { CardsGridComponent } from "./cardsGridComponent";
import {
  CardSectionContent,
  CardsSectionContainer,
} from "./cardsSection.styles";
import { CardsFiltersComponent } from "./cardsFiltersComponent";

const cardsSection = () => {
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

export default cardsSection;
