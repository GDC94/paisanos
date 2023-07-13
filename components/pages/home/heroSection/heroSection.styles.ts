import styled from "@emotion/styled";
import { DEVICES } from "config";

export const HeroContainer = styled.section`
  width: 100%;
  height: auto;
  position: relative;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 128px;
  padding-bottom: 136px;
  padding-top: 128px;

  @media ${DEVICES.tablet} {
    flex-direction: column;
  }
`;

export const WrapperImage = styled.div`
  width: 60%;

  @media ${DEVICES.tablet} {
    width: 100%;
    max-width: 100%;
  }
`;

export const ContainerImg = styled.div`
  width: 100%;
  min-width: 640px;
  height: auto;
  min-height: 800px;

  @media ${DEVICES.mobileL} {
    min-width: 400px;
  }
  @media ${DEVICES.mobileL} {
    min-width: 400px;
    min-height: 300px;
  }
  @media ${DEVICES.mobileM} {
    min-width: 300px;
    min-height: 300px;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const WrapperAssetDetails = styled.div`
  width: 40%;

  @media ${DEVICES.tablet} {
    width: 100%;
  }
`;
export const SummaryContainer = styled.div`
  border-radius: ${(props) => props.theme.size["2rem"]};
  background-color: ${(props) => props.theme.colors.neutrals2};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${(props) => props.theme.size["2.5rem"]};
  margin-top: ${(props) => props.theme.size["2.5rem"]};
  margin-bottom: ${(props) => props.theme.size["2.5rem"]};
`;
