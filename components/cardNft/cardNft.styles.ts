import styled from "@emotion/styled";

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  transition-duration: 0.4s;
`;

export const CardNftContainer = styled.div`
  width: 256px;
  height: auto;
  background-color: ${(props) => props.theme.colors.neutrals2};
  border-radius: ${(props) => props.theme.size["1.5rem"]};
  padding: ${(props) => props.theme.size["0.75rem"]};
  transition-duration: 0.4s;
  &:hover {
    ${ImgWrapper} {
      transform: scale(1.09);
    }
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 303px;
  aspect-ratio: 4/4;
  background-color: ${(props) => props.theme.colors.neutrals5};
  border-radius: ${(props) => props.theme.size["1rem"]};
  overflow: hidden;
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: ${(props) => props.theme.size["1.5rem"]};
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  object-fit: cover;
  transition: all 0.2s ease-in-out;
`;

export const ColumnContent = styled.div`
  background-color: ${(props) => props.theme.colors.neutrals2};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.size["0.75rem"]};
`;

export const NameNft = styled.p`
  font-size: ${(props) => props.theme.size["1rem"]};
  line-height: ${(props) => props.theme.size["1.5rem"]};
  color: ${(props) => props.theme.colors.neutrals8};
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.Poppins};
  text-transform: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const PriceNft = styled.div`
  border: 2px solid ${(props) => props.theme.colors.primary4};
  border-radius: 4px;
  font-weight: 700;
  font-family: ${(props) => props.theme.fonts.Poppins};
  padding: ${(props) => props.theme.size["0.5rem"]};
  font-size: ${(props) => props.theme.size["0.75rem"]};
  line-height: ${(props) => props.theme.size["0.75rem"]};
  color: ${(props) => props.theme.colors.primary4};
  text-transform: uppercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const StockContent = styled.div`
  background-color: ${(props) => props.theme.colors.neutrals2};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${(props) => props.theme.size["1.5rem"]};
`;

export const Stock = styled.p`
  background-color: ${(props) => props.theme.colors.neutrals2};
  font-size: ${(props) => props.theme.size["0.875rem"]};
  font-family: ${(props) => props.theme.fonts.Poppins};
  line-height: ${(props) => props.theme.size["1.5rem"]};
  color: ${(props) => props.theme.colors.neutrals6};
  font-weight: 500;
  text-transform: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  background-color: ${(props) => props.theme.colors.neutrals2};
`;

export const OwnersContent = styled.div`
  background-color: ${(props) => props.theme.colors.neutrals2};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${(props) => props.theme.size["0.5rem"]};
`;
export const AvatarOwners = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: ${(props) => props.theme.size["0.5rem"]};
`;

export const OwnerImage = styled.img`
  width: ${(props) => props.theme.size["1.5rem"]};
  height: ${(props) => props.theme.size["1.5rem"]};
  border-radius: 100%;
  border: 2px solid ${(props) => props.theme.colors.neutrals2};
  margin-left: -10px;
`;

export const CardDivider = styled.div`
  height: 1px;
  border-radius: 1px;
  background-color: ${(props) => props.theme.colors.neutrals3};
  margin-bottom: ${(props) => props.theme.size["0.5rem"]};
`;

export const FooterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.size["1.25rem"]};
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
