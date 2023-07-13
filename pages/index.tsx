import Head from "next/head";
import { MainLayout } from "layouts/mainLayout";
import { HeroSection } from "components/pages/home/heroSection";
import { CardsSection } from "components/pages/home/cardsSection";
import { SearchSection } from "components/pages/home/searchSection";
import { FilterCategorySection } from "components/pages/home/filterCategorySection";
import HeaderSection from "components/pages/home/headerSection/headerSection";

const Home = () => {
  return (
    <MainLayout>
      <Head>
        <title>NFPaisanos</title>
      </Head>
      <HeaderSection />
      <HeroSection />
      <SearchSection />
      <FilterCategorySection />
      <CardsSection />
    </MainLayout>
  );
};

export default Home;
