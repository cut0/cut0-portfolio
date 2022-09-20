import type { NextPage } from "next";
import { SkillsContent } from "../components/contents/Skills";
import { SeoInjection } from "../components/seo/SeoInjection";

const Skills: NextPage = () => {
  return (
    <SeoInjection
      ogp={{ pageTitle: "Skills", pageType: "website" }}
      twitter={{ card: "summary" }}
    >
      <SkillsContent />
    </SeoInjection>
  );
};

export default Skills;
