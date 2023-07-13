import { Container } from "layouts/mainLayout";
import { BidSummaryCard } from "components/bidSummaryCard";
import { AssetDetails } from "components/assetDetails";
import { ButtonsAuction } from "components/buttonsAuction";
import AunctionTimeInfo from "components/aunctionTimeInfo/aunctionTimeInfo";
import { ButtonsGaleryControls } from "components/buttonsGaleryControls";
import { dataPopular, ethPriceData } from "data";
import nfPaisanosDataAdapter from "adapters/nfPaisanosDataAdapter";
import { Carrousel } from "components/carrousel/carrousel";
import {
  ContainerImg,
  MainContent,
  HeroContainer,
  WrapperAssetDetails,
  WrapperImage,
  SummaryContainer,
} from "./heroSection.styles";


const HeroSection = () => {


  const info = nfPaisanosDataAdapter(dataPopular);
  
  return (
    <HeroContainer>
      <Container>
        <MainContent>
          <WrapperImage>
            <ContainerImg>
            <Carrousel/>
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
