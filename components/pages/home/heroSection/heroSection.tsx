import { Container } from "layouts/mainLayout";
import { BidSummaryCard } from "components/bidSummaryCard";
import { AssetDetails } from "components/assetDetails";
import { ButtonsAuction } from "components/buttonsAuction";
import AunctionTimeInfo from "components/aunctionTimeInfo/aunctionTimeInfo";
import { ButtonsGaleryControls } from "components/buttonsGaleryControls";
import { ethPriceData } from "data";

import {
  ContainerImg,
  MainContent,
  HeroContainer,
  WrapperAssetDetails,
  WrapperImage,
  SummaryContainer,
} from "./heroSection.styles";
import Image from "next/image";

const HeroSection = () => {
  return (
    <HeroContainer>
      <Container>
        <MainContent>
          <WrapperImage>
            <ContainerImg>
              <Image
                src='/images/jon-tyson-gnFiwlyBH-A-unsplash 1.png'
                alt='Next.js Logo'
                layout='responsive'
                width={640}
                height={800}
              />
            </ContainerImg>
          </WrapperImage>
          <WrapperAssetDetails>
            <AssetDetails />
            <SummaryContainer>
              <BidSummaryCard ethInformation={ethPriceData} />
              <AunctionTimeInfo />
            </SummaryContainer>
            <ButtonsAuction />
            <ButtonsGaleryControls />
          </WrapperAssetDetails>
        </MainContent>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
