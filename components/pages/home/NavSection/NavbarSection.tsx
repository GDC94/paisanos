import { Container } from "layouts/mainLayout";
import { Header } from "components/header";
import { NavSectionContainer } from "./NavbarSection.styles";


const NavSection = () => {
  return (
    <NavSectionContainer>
      <Container>
        <Header />
      </Container>
    </NavSectionContainer>
  );
};

export default NavSection;

