import { Container } from "layouts/mainLayout";
import { CardsGridComponent } from "./components/cardsGridComponent";
import { ColumnFiltersComponent } from "./components/cardsFiltersComponent";
import {
  CardSectionContent,
  CardsSectionContainer,
} from "./cardsSection.styles";
import { useChallengeState } from "context/challengeContext";
import nfPaisanosDataAdapter from "adapters/nfPaisanosDataAdapter";

const CardsSection = () => {
  const { challengeState } = useChallengeState();
  const { allAunctions } = challengeState;
  const allAunctionsAdapted = nfPaisanosDataAdapter(allAunctions);

  return (
    <CardsSectionContainer>
      <Container>
        <CardSectionContent>
          <ColumnFiltersComponent />
          <CardsGridComponent arrOfAllAunctionsAdapted={allAunctionsAdapted} />
        </CardSectionContent>
      </Container>
    </CardsSectionContainer>
  );
};

export default CardsSection;
