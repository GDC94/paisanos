import Image from "next/image";
import { Text } from "../text";
import { ButtonPaisa } from "../commons/buttonPaisa";
import {
  Divider,
  HeaderContainer,
  HeaderContentLeft,
  HeaderContentRight,
  LogoContainer,
  NavItemsContainer,
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <HeaderContentLeft>
      <LogoContainer>
        <Image
          src='/images/icons/logo.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
      </LogoContainer>
      <Divider />
      <NavItemsContainer>
        <Text color='neutrals4' text={"Discover"} marginRight='2rem' />
        <Text color='neutrals4' text={"What we do"} />
      </NavItemsContainer>
    </HeaderContentLeft>
    <HeaderContentRight>
      <ButtonPaisa buttonType={"small-outline"} text={"Connect Wallet"} />
    </HeaderContentRight>
  </HeaderContainer>
);

export default Header;