import type { NextPage } from "next";
import { ProductsContent } from "../components/contents/Products";
import { SeoInjection } from "../components/seo/SeoInjection";

const Products: NextPage = () => {
  return (
    <SeoInjection
      ogp={{ pageTitle: "Products", pageType: "website" }}
      twitter={{ card: "summary" }}
    >
      <ProductsContent />
    </SeoInjection>
  );
};

export default Products;
