import Head from "next/head";
import { MainLayout } from "layouts/mainLayout";

import { HeroSection } from "components/pages/home/heroSection";
import { NavbarSection } from "components/pages/home/navSection";

const Home = () => {
  return (
    <MainLayout>
      <Head>
        <title>NFPaisanos</title>
      </Head>
      <NavbarSection />
      <HeroSection />
    </MainLayout>
  );
};

export default Home;
