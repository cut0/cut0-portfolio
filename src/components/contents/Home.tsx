import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { careerContentList } from "../../features/career/Content";
import { ArrowRightSvgIcon } from "../icons/ArrowRightSvgIcon";
import { TwitterSvgIcon } from "../icons/TwitterSvgIcon";
import { GitHubSvgIcon } from "../icons/GitHubSvgIcon";
import { MailSvgIcon } from "../icons/MailSvgIcon";
import {
  MainContainer,
  IntroTitle,
  CommonCardContainer,
  CommonCardTitleContainer,
  CommonCardDescriptionContainer,
  CareerYear,
  CareerSummary,
  TopCardDescriptionContainer,
  TopCardContainer,
  ProfileImgContainer,
  ProfileImg,
  JumpLinkContainer,
  JumpLink,
  JumpLinkTitle,
  ContactListContainer,
  JumpSNS,
  SNSTitle,
  TwitterLogo,
} from "./Home.css";

export const HomeContent: FC = () => {
  return (
    <main className={MainContainer}>
      <h1 className={IntroTitle}>Cut0 Portfolio</h1>
      <section className={TopCardContainer}>
        <div className={ProfileImgContainer}>
          <Image
            alt="Cut0"
            className={ProfileImg}
            height={512}
            layout="responsive"
            src="/icons/Cut0.png"
            width={512}
          ></Image>
        </div>
        <div className={TopCardDescriptionContainer}>
          <h2>Cut0</h2>
          <span>Web Frontend Engineer</span>
        </div>
      </section>
      <section className={CommonCardContainer}>
        <h2 className={CommonCardTitleContainer}>Introduction</h2>
        <p className={CommonCardDescriptionContainer}>
          東京理科大学工学部情報工学科B4。
          <br />
          2019年5月頃から Web 開発系の業務で生計を立てている。
          <br />
          主に Web Frontend の領域が好き。
        </p>
      </section>
      <section className={CommonCardContainer}>
        <h2 className={CommonCardTitleContainer}>Career</h2>
        <ul className={CommonCardDescriptionContainer}>
          {careerContentList.reverse().map((content, index) => {
            return (
              <li key={index}>
                <span className={CareerYear}>{content.year}</span>
                <p className={CareerSummary}>{content.summary}</p>
              </li>
            );
          })}
        </ul>
      </section>
      <section className={CommonCardContainer}>
        <h2 className={CommonCardTitleContainer}>Skills</h2>
        <div className={CommonCardDescriptionContainer}>
          <p>
            自分の触ったことのある言語や好みのライブラリなど技術に関するものを記載しました。
            <br />
            評価は主観によるものなのであまり気にしないでください。
          </p>
          <div className={JumpLinkContainer}>
            <Link href="/skills" passHref>
              <a className={JumpLink}>
                <span className={JumpLinkTitle}>Skills</span>
                <ArrowRightSvgIcon title="arrow-right" width={16} />
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className={CommonCardContainer}>
        <h2 className={CommonCardTitleContainer}>Products</h2>
        <div className={CommonCardDescriptionContainer}>
          <p>
            プライベートで開発したものを記載しました。
            <br />
            しょうもないものから頑張ったものまでクオリティーにばらつきがあります。
            <br />
            覗いてみてください。
          </p>
          <div className={JumpLinkContainer}>
            <Link href="/products" passHref>
              <a className={JumpLink}>
                <span className={JumpLinkTitle}>Products</span>
                <ArrowRightSvgIcon title="arrow-right" width={16} />
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className={CommonCardContainer}>
        <h2 className={CommonCardTitleContainer}>Tech Blog</h2>
        <div className={CommonCardDescriptionContainer}>
          <p>
            私自身のブログです。
            <br />
            全然 Tech じゃないものもあります。
            <br />
            サボりがちですが頑張って書こうと思います。
            <br />
            ※外部リンクです。
          </p>
          <div className={JumpLinkContainer}>
            <a
              className={JumpLink}
              href="https://cut0-blog.vercel.app/"
              rel="noreferrer"
              target="_blank"
            >
              <span className={JumpLinkTitle}>Tech Blog</span>
              <ArrowRightSvgIcon title="arrow-right" width={16} />
            </a>
          </div>
        </div>
      </section>
      <section className={CommonCardContainer}>
        <h2 className={CommonCardTitleContainer}>Contact</h2>
        <div className={CommonCardDescriptionContainer}>
          <p>
            連絡先です。
            <br />
            基本的に Twitter の DM に連絡いただければ返信できます。
            <br />
            ※外部リンクです。
          </p>
          <div className={ContactListContainer}>
            <a
              className={JumpSNS}
              href="https://twitter.com/cut0_"
              rel="noreferrer"
              target="_blank"
            >
              <TwitterSvgIcon
                className={TwitterLogo}
                title="Twitter"
                width={32}
              />
              <span className={SNSTitle}>Twitter</span>
            </a>
            <a
              className={JumpSNS}
              href="https://github.com/cut0"
              rel="noreferrer"
              target="_blank"
            >
              <GitHubSvgIcon title="GitHub" width={32} />
              <span className={SNSTitle}>GitHub</span>
            </a>
            <a
              className={JumpSNS}
              href="mailto: zeron9421@gmail.com"
              rel="noreferrer"
            >
              <MailSvgIcon title="Mail" width={32} />
              <span className={SNSTitle}>Mail</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
