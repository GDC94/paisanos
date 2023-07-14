import { useState } from "react";
import { useChallengeState } from "context/challengeContext";
import { Container } from "layouts/mainLayout";
import { BidSummaryCard } from "components/bidSummaryCard";
import { AssetDetails } from "components/assetDetails";
import { ButtonsAuction } from "components/buttonsAuction";
import AunctionTimeInfo from "components/aunctionTimeInfo/aunctionTimeInfo";
import { ButtonsGaleryControls } from "components/buttonsGaleryControls";
import nfPaisanosDataAdapter from "adapters/nfPaisanosDataAdapter";
import {
  MainContent,
  HeroContainer,
  WrapperAssetDetails,
  WrapperImage,
  SummaryContainer,
  Image,
} from "./heroSection.styles";

const HeroSection = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);
  const { challengeState } = useChallengeState();
  const { mostPopularAunctions, ethPriceInfo } = challengeState;
  const mostPopularAunctionsAdapted =
    nfPaisanosDataAdapter(mostPopularAunctions);

  const goToNextItem = () => {
    setCurrentItemIndex(
      (prevIndex) => (prevIndex + 1) % mostPopularAunctionsAdapted.length,
    );
  };

  const goToPreviousItem = () => {
    setCurrentItemIndex((prevIndex) =>
      prevIndex === 0 ? mostPopularAunctionsAdapted.length - 1 : prevIndex - 1,
    );
  };
  const currentPopularAunctionAdapted =
    mostPopularAunctionsAdapted[currentItemIndex];

  return (
    <HeroContainer>
      <Container>
        <MainContent>
          <WrapperImage>
            <Image
              src={currentPopularAunctionAdapted?.media?.image}
              alt='Next.js Logo'
              loading='lazy'
            />
          </WrapperImage>
          <WrapperAssetDetails>
            <AssetDetails
              currentPopularAunctionAdapted={currentPopularAunctionAdapted}
            />
            <SummaryContainer>
              <BidSummaryCard ethInformation={ethPriceInfo} />
              <AunctionTimeInfo
                auctionEnds={currentPopularAunctionAdapted?.auctionEndsAt}
              />
            </SummaryContainer>
            <ButtonsAuction />
            <ButtonsGaleryControls
              goToNextItem={goToNextItem}
              goToPreviousItem={goToPreviousItem}
            />
          </WrapperAssetDetails>
        </MainContent>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
