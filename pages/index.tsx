import Head from "next/head";
import { MainLayout } from "layouts/mainLayout";
import { Header } from "components/pages/home/header";


const Home = () => {
  return (
    <MainLayout>
      <Head>
        <title>NFPaisanos</title>
      </Head>
      <Header />
    </MainLayout>
  );
};

export default Home;
