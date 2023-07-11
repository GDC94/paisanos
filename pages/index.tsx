import Head from "next/head";

import { MainLayout } from "layouts/mainLayout";
import { HeroSection } from "components/pages/home/sections";


const Home = () => {
  return (
    <MainLayout>
      <Head>
        <title>NFPaisanos</title>
      </Head>
      <HeroSection />
    </MainLayout>
  );
};

export default Home;
