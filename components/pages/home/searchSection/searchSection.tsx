import { Container } from "layouts/mainLayout";
import { ButtonPaisa } from "components/commons/buttonPaisa";
import { SearchIcon } from "components/commons/icons/icons";
import {
  InputSearch,
  SearchSectionContainer,
  SearchSectionContent,
} from "./searchSection.styles";

const SearchSection = () => {
  return (
    <SearchSectionContainer>
      <Container>
        <SearchSectionContent>
          <InputSearch placeholder='Type to find something nice... ' />
          <ButtonPaisa buttonType={"search-button"} icon={<SearchIcon />} />
        </SearchSectionContent>
      </Container>
    </SearchSectionContainer>
  );
};

export default SearchSection;
