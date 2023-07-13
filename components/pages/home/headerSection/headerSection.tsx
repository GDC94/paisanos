import { Container } from "layouts/mainLayout";
import { Header } from "components/header";
import { NavSectionContainer } from "./headerSection.styles";

const HeaderSection = () => {
  return (
    <NavSectionContainer>
      <Container>
        <Header />
      </Container>
    </NavSectionContainer>
  );
};

export default HeaderSection;
