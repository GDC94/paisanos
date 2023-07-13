import Image from "next/image";
import { Container } from "layouts/mainLayout";
import { BidSummaryCard } from "components/bidSummaryCard";
import { AssetDetails } from "components/assetDetails";
import { ButtonsAuction } from "components/buttonsAuction";
import { ButtonsGaleryControls } from "components/buttonsGaleryControls";
import {
  ContainerImg,
  MainContent,
  HeroContainer,
  WrapperAssetDetails,
  WrapperImage,
} from "./heroSection.styles";
import { dataPopular } from "data";

const HeroSection = () => {
  console.log(dataPopular);

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
            <BidSummaryCard />
            <ButtonsAuction />
            <ButtonsGaleryControls />
          </WrapperAssetDetails>
        </MainContent>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
