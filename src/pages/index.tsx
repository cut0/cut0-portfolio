import type { NextPage } from "next";
import { HomeContent } from "../components/contents/Home";
import { SeoInjection } from "../components/seo/SeoInjection";

const Home: NextPage = () => {
  return (
    <SeoInjection ogp={{ pageType: "website" }} twitter={{ card: "summary" }}>
      <HomeContent />
    </SeoInjection>
  );
};

export default Home;
