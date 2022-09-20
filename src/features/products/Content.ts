type ProductContentType = {
  title: string;
  summary: string;
  imgUrl: string;
  link: string;
};

export const productContentList: ProductContentType[] = [
  {
    title: "AST Viewer",
    summary: "ブラウザ上でコードを書き AST を可視化するツールです。",
    imgUrl: "/icons/GitHub.svg",
    link: "https://github.com/cut0/ast-web-viewer",
  },
  {
    title: "Portfolio Cut0",
    summary:
      "このサイトです。リニューアルしました。Next.js + Preact + vanilla-extract で構築されています。定期的に更新するように頑張ります。",
    imgUrl: "/icons/Cut0.png",
    link: "/",
  },
  {
    title: "NewMo!",
    summary:
      "Open Hack U で開発した目覚まし時計です。自分の録音した音声がランダムで他のユーザーのアラーム音になります。指定した時間に起きたり、録音した音声で他のユーザーを起こせたりするとポイントが付与されます。アラーム音は専用のハードウェアから再生されます。SWR + Emotion + Next.js + React で構築されています。",
    imgUrl: "/icons/NewMo.svg",
    link: "https://hack-u-2022.web.app/",
  },
  {
    title: "Cut0 Blog",
    summary:
      "自分のブログサイトです。頑張って更新します。Next.js + React + vanilla-extract で構築されています。",
    imgUrl: "/icons/Cut0Blog.svg",
    link: "https://cut0-blog.vercel.app/",
  },
  {
    title: "都道府県人口可視化サイト",
    summary:
      "某インターンに参加するために開発したものです。体調を崩したせいで半日で仕上げる必要がありました。",
    imgUrl: "/icons/GitHub.svg",
    link: "https://github.com/cut0/japan-population-trends",
  },
  {
    title: "Image Shiritori",
    summary:
      "Web 上で搭載されたカメラ機能を用いて日常生活から英単語を探すことができます。Tensor Flow を利用して画像認識を行っています。",
    imgUrl: "/icons/GitHub.svg",
    link: "https://github.com/cut0/image-shiritori",
  },
  {
    title: "ビンゴサイト",
    summary:
      "とある会社の選考課題です。他の会社のインターンと被ったため、2日で仕上げる必要がありました。",
    imgUrl: "/icons/GitHub.svg",
    link: "https://github.com/cut0/bingo-app",
  },
  {
    title: "CETUS",
    summary:
      "大学のサークル管理プラットフォームです。一時期ユーザー数がすごかったです。お金が払えないので停止しました。",
    imgUrl: "/icons/Cetus.svg",
    link: "https://app.cetus.dev/circles",
  },
  {
    title: "QK",
    summary:
      "アフターコロナハッカソンで開発した休憩促進アプリです。専用のクッションに座ることで休憩開始と休憩終了を判定しています。休憩時間に応じてユーザーにポイントが付与されます。",
    imgUrl: "/icons/QK.png",
    link: "https://after-covid-hack.web.app/",
  },
  {
    title: "Discorder",
    summary:
      "Discord アプリ上で生のコードか GitHub の URL を送信すると実行して結果を返信してくれる bot です。",
    imgUrl: "/icons/GitHub.svg",
    link: "https://github.com/cut0/discoder",
  },
  {
    title: "MemoMemo",
    summary:
      "Twitter と連動したメモアプリです。今考えてみるとクオリティーは低いですが、初めて１から開発した Web アプリです。",
    imgUrl: "/icons/MemoMemo.svg",
    link: "https://memomemo-87eac.web.app/",
  },
  {
    title: "Design Magic",
    summary:
      "高校生の時に開発したVRコンテンツです。PS3のコントローラーを分解して傾きを検知するコントローラーを作ったり、Leap Motion を使って筆跡から図形を推定したりしています。結構頑張ったと思います。",
    imgUrl: "/icons/Suriken.jpeg",
    link: "https://www.youtube.com/watch?v=k0hDU1cWt7I&t=108s",
  },
];
