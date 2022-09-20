import Link from "next/link";
import { FC } from "react";
import {
  languageSkillContentList,
  liblariesSkillContentList,
  toolsSkillContentList,
} from "../../features/skills/Content";
import { ArrowLeftSvgIcon } from "../icons/ArrowLeftSvgIcon";
import {
  CardContainer,
  CardListContainer,
  CardTitle,
  Header,
  IntroContainer,
  IntroTitle,
  MainContainer,
  JumpLinkTitle,
  JumpLink,
} from "./Skills.css";

export const SkillsContent: FC = () => {
  return (
    <>
      <header className={Header}>
        <Link href="/" passHref>
          <a className={JumpLink}>
            <ArrowLeftSvgIcon title="arrow-left" width={16} />
            <span className={JumpLinkTitle}>back</span>
          </a>
        </Link>
      </header>
      <main className={MainContainer}>
        <div className={IntroContainer}>
          <h1 className={IntroTitle}>Cut0 Skills</h1>
          <p>
            日頃からお世話になっている技術を中心に感想とともに書かせていただきました。
          </p>
        </div>
        <h2>Languages</h2>
        <section className={CardListContainer}>
          {languageSkillContentList.map((content, index) => {
            return (
              <Link href={content.link} key={index} passHref>
                <a className={CardContainer} target="_blank">
                  <h3 className={CardTitle}>{content.name}</h3>
                  <p>{content.summary}</p>
                </a>
              </Link>
            );
          })}
        </section>
        <h2>Favorite Liblaries</h2>
        <section className={CardListContainer}>
          {liblariesSkillContentList.map((content, index) => {
            return (
              <Link href={content.link} key={index} passHref>
                <a className={CardContainer} target="_blank">
                  <h3 className={CardTitle}>{content.name}</h3>
                  <p>{content.summary}</p>
                </a>
              </Link>
            );
          })}
        </section>
        <h2>Favorite Tools</h2>{" "}
        <section className={CardListContainer}>
          {toolsSkillContentList.map((content, index) => {
            return (
              <Link href={content.link} key={index} passHref>
                <a className={CardContainer} target="_blank">
                  <h3 className={CardTitle}>{content.name}</h3>
                  <p>{content.summary}</p>
                </a>
              </Link>
            );
          })}
        </section>
      </main>
    </>
  );
};
