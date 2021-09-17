import React from "react";
import Helmet from "react-helmet";

export const Helmets = () => {
  const content = [
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1.0",
    },
    {
      name: "description",
      content:
        "designing plus nine は「design for everyone」をテーマに活動する、東京大学と東京藝術大学の学生を中心としたデザインサークルです。グラフィック・プロダクト・Webなどのジャンルにとらわれず、デザインを通じたさまざまな活動を行っています。",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "東京大学×東京藝術大学のデザインサークル | designing plus nine"
    },
    {
      name: "twitter:description",
      content: "designing plus nine は「design for everyone」をテーマに活動する、東京大学と東京藝術大学の学生を中心としたデザインサークルです。グラフィック・プロダクト・Webなどのジャンルにとらわれず、デザインを通じたさまざまな活動を行っています。"
    },
    {
      name: "twitter:site",
      content: "@DP9_official"
    }
  ];
  const properties = [
    {
      property: "og:title",
      content: "designing plus nine｜東京大学×東京藝術大学のデザインサークル",
    },
    {
      property: "og:url",
      content: "http://dp9.tokyo/mayfes2021/",
    },
    {
      property: "og:description",
      content:
        "designing plus nine は「design for everyone」をテーマに活動する、東京大学と東京藝術大学の学生を中心としたデザインサークルです。グラフィック・プロダクト・Webなどのジャンルにとらわれず、デザインを通じたさまざまな活動を行っています。",
    },
    {
      property: "og:image",
      content: "http://dp9.tokyo/mayfes2021/images/MV_PC.png",
    },
    {
      property: "og:locale",
      content:"ja_JP"
    },
    {
      property: "og:site_name",
      content: "designing plus nine",
    },
  ];
  return (
    <>
      <Helmet>
        <title>
          紙Festa. - designing plus
          nine｜東京大学×東京藝術大学のデザインサークル
        </title>
        <html lang="ja" />
        <meta charset="utf-8" />
        {content.map((c, i) => (
          <meta name={c.name} content={c.content} key={i}></meta>
        ))}

        {properties.map((p, i) => (
          <meta property={p.property} content={p.content} key={i}></meta>
        ))}
        <link
          rel="shortcut icon"
          href="http://designingplusnine.com/images/favicon.ico"
        ></link>
      </Helmet>
    </>
  );
};
