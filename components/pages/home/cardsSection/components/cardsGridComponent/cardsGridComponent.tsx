import { CardNft } from "components/cardNft";
import { CardsGrid } from "./cardsGridComponent.styles";
import { AdaptedNFPaisanosData } from "typings/adaptersTypings";

interface CardsGridComponentProps {
  arrOfAllAunctionsAdapted: AdaptedNFPaisanosData[];
}

const CardsGridComponent = (
  arrOfAllAunctionsAdapted: CardsGridComponentProps,
) => {
  return (
    <CardsGrid>
      {arrOfAllAunctionsAdapted?.arrOfAllAunctionsAdapted?.map(
        (singleAunctionAdapted: AdaptedNFPaisanosData, _index: number) => {
          return (
            <CardNft
              key={_index}
              adaptedNFPaisanosData={singleAunctionAdapted}
            />
          );
        },
      )}
    </CardsGrid>
  );
};

export default CardsGridComponent;
