import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { PRODUCT_LIST } from "../../features/products/Content";
import { ArrowLeftSvgIcon } from "../icons/ArrowLeftSvgIcon";
import {
  Header,
  JumpLink,
  JumpLinkTitle,
  MainContainer,
  IntroContainer,
  IntroTitle,
  ProductListContainer,
  ProductCardContainer,
  ProductTitle,
  ProductImgContainer,
  ProductImg,
} from "./Products.css";

export const ProductsContent: FC = () => {
  return (
    <>
      <header className={Header}>
        <Link href="/" passHref>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={JumpLink}>
            <ArrowLeftSvgIcon title="arrow-left" width={16} />
            <span className={JumpLinkTitle}>back</span>
          </a>
        </Link>
      </header>
      <main className={MainContainer}>
        <div className={IntroContainer}>
          <h1 className={IntroTitle}>Cut0 Products</h1>
          <p>プライベートで作ったプロダクトを載せます。</p>
        </div>
        <section className={ProductListContainer}>
          {PRODUCT_LIST.map((content, index) => {
            return (
              <Link href={content.link} key={index} passHref>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={ProductCardContainer} target="_blank">
                  <div className={ProductImgContainer}>
                    <Image
                      alt={`${content.title}-image`}
                      className={ProductImg}
                      height={256}
                      layout="responsive"
                      loading="lazy"
                      src={content.imgUrl}
                      width={256}
                    ></Image>
                  </div>
                  <div>
                    <h2 className={ProductTitle}>{content.title}</h2>
                    <p>{content.summary}</p>
                  </div>
                </a>
              </Link>
            );
          })}
        </section>
      </main>
    </>
  );
};
