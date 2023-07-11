import Head from "next/head";
import { MainLayout } from "layouts/mainLayout";
import { HeroSection } from "components/pages/home/heroSection";
import { NavbarSection } from "components/pages/home/navSection";
import { CardsSection } from "components/pages/home/cardsSection";
import { SearchSection } from "components/pages/home/searchSection";

const Home = () => {
  return (
    <MainLayout>
      <Head>
        <title>NFPaisanos</title>
      </Head>
      <NavbarSection />
      <HeroSection />
      <SearchSection/>
      <CardsSection />
    </MainLayout>
  );
};

export default Home;
