import { Container } from "layouts/mainLayout";
import { HeaderContainer } from "./NavSection.styles";
import { Header } from "components/commons/header";

const NavSection = () => {
  return (
    <HeaderContainer>
      <Container>
        <Header />
      </Container>
    </HeaderContainer>
  );
};

export default NavSection;
