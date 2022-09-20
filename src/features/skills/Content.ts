type SkillContentType = {
  name: string;
  summary: string;
  link: string;
  evaluation: 0 | 1 | 2 | 3 | 4 | 5;
  tags: string[];
};

export const languageSkillContentList: SkillContentType[] = [
  {
    name: "TypeScript",
    summary:
      "比較的型安全に開発できるのが好きです。Web Frontend ではほとんど必須ですね。型パズル力はまだないです。",
    link: "https://www.typescriptlang.org/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "JavaScript",
    summary:
      "ブラウザ上で動きますね。意外と最新の機能まで追えている気がします。",
    link: "https://developer.mozilla.org/ja/docs/Web/JavaScript",
    evaluation: 0,
    tags: [],
  },
  {
    name: "CSS",
    summary:
      "昔は苦手意識がありました。最近は新しいプロパティを追うのが好きです。ブラウザでの表現力に直結するので",
    link: "https://developer.mozilla.org/ja/docs/Web/CSS",
    evaluation: 0,
    tags: [],
  },
  {
    name: "HTML",
    summary:
      "ある程度は書けると思います。アクセシビリティの知識をもう少し強めたいです。Web 標準を追えるようにがんばります。",
    link: "https://developer.mozilla.org/ja/docs/Learn/Getting_started_with_the_web/HTML_basics",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Rust",
    summary:
      "趣味でちょっと触りました。まだまだです。Rust で WASM を触りたいです。",
    link: "https://www.rust-lang.org/ja",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Go",
    summary:
      "趣味で簡易的な API サーバーを構築しました。非常にシンプルな点は個人的にすごく好きです。",
    link: "https://go.dev/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "C#",
    summary:
      "高校生の時に Xamarin でアプリを作ったり、Unity でゲームを作ったりしてました。LINQ が好きです。",
    link: "https://learn.microsoft.com/ja-jp/dotnet/csharp/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Python",
    summary:
      "授業で触ったり競プロで使ってたりしました。パッケージが充実していると思います。Anaconda はあまり好きではないです。",
    link: "https://www.python.org/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Ruby",
    summary:
      "業務で Rails を触ることがありました。Rails チュートリアルの完成度が高いと思います。",
    link: "https://www.ruby-lang.org/ja/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "English",
    summary: "苦手だけど頑張りたいです。",
    link: "https://en.wikipedia.org/wiki/English_language",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Japanese",
    summary: "万人に伝わるような話し方を心がけています。",
    link: "https://simple.wikipedia.org/wiki/Japanese_language",
    evaluation: 0,
    tags: [],
  },
];

export const liblariesSkillContentList: SkillContentType[] = [
  {
    name: "React",
    summary: "非常にシンプルな点が好きです。使っていて楽しいです。",
    link: "https://ja.reactjs.org/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Preact",
    summary:
      "Web Speed Hackathon でお世話になりました。実はこのサイトも Preact を利用しています。",
    link: "https://preactjs.com/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Vue",
    summary:
      "始めて触ったフレームワークです。周辺ライブラリが公式でサポートされている点は好きですが、Vue3への移行が大変なイメージです。",
    link: "https://jp.vuejs.org/index.html",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Next.js",
    summary:
      "メタフレームワークであるのに比較的薄い点が好きです。このサイトでは Preact を SSG するために利用しています。",
    link: "https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=next-website",
    evaluation: 0,
    tags: [],
  },
  {
    name: "emotion",
    summary:
      "差分を追いにくくコードレビューが難しいかもしれませんが、クラスネームに直にスタイルを書ける点は好きです。",
    link: "https://emotion.sh/docs/introduction",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Chakra UI",
    summary:
      "提供されるコンポーネントに乗っかればある程度のアクセシビリティを担保してくれる点が好きです。中のコードも参考になります。",
    link: "https://chakra-ui.com/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "vanilla extract",
    summary:
      "マイナーですがランタイムに影響を与えずに型安全に開発できる点が好きです。型のある CSS Module みたいな感じです。",
    link: "https://vanilla-extract.style/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "SWR",
    summary:
      "API レスポンスをグローバルなステートとして簡易的に管理できる点が好きです。バンドルサイズも小さいです。",
    link: "https://swr.vercel.app/ja",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Storybook",
    summary:
      "デザイナーの方とのコミュニケーションに利用できるのが理想だと思ってます。ライブラリの更新で壊れやすいのが玉にキズです。",
    link: "https://storybook.js.org/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Vite",
    summary:
      "開発環境では esbuild、プロダクション環境では rollup を利用しているようです。速くて好きです。今後は Vite でサクッと小さいものを作れるようになりたいです。",
    link: "https://ja.vitejs.dev/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Vitest",
    summary: "Jest ライクに書けるのが好きです。速いです。",
    link: "https://vitest.dev/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Babel",
    summary:
      "最近ようやく向き合いました。ブラウザ上で Babylon を利用して AST を可視化するやつ作ってます。",
    link: "https://babeljs.io/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Prisma",
    summary:
      "Open Hack U で利用しました。バックエンドはあまり詳しくないですが使いやすかったです。Prisma Studio が便利でした。今後も伸びてほしいです。",
    link: "https://www.prisma.io/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Fastify",
    summary:
      "Open Hack U で利用しました。速いらしいですが、速さを体感できるほど複雑なアプリケーションは作ったことないです。",
    link: "https://www.fastify.io/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "OpenAPI Typescript Codegen",
    summary:
      "Open Hack U で利用しました。Java の環境を構築せずに yaml から API の型定義とコール関数を生成してくれる点が好きです。",
    link: "https://www.npmjs.com/package/openapi-typescript-codegen",
    evaluation: 0,
    tags: [],
  },
];

export const toolsSkillContentList: SkillContentType[] = [
  {
    name: "GitHub",
    summary:
      "日頃からお世話になってます。これ無しでは生きていけないかも知れません。Actions 周辺の知識を深めたいです。",
    link: "https://github.com/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Firebase",
    summary:
      "簡易的なものであれば一瞬でできてしまうのがすごいです。ハッカソンではほとんど使います。",
    link: "https://firebase.google.com/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Google Cloud",
    summary:
      "基本的な事はできるのですが、まだまだ知らないことも多いです。業務で知識をつけたいです。個人的にフロントエンドエンジニアは今後クラウド技術を扱えるようになる必要があると思っています。",
    link: "https://cloud.google.com/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "AWS",
    summary: "Google Cloud と同じ気持ちです。Amplify 結構好きです。",
    link: "https://aws.amazon.com/jp/?nc2=h_lg",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Cloudflare",
    summary:
      "エッジ周辺の知識をつけたいと思います。Web Speed Hackathon でとてもお世話になりました。キャッシュの設定失敗してレギュレーション違反でしたけど、、、",
    link: "https://www.cloudflare.com/ja-jp/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Docker",
    summary:
      "なぜか最近触ることが多いです。まだまだ、なんとなく扱っている感もあるのでもう少し触りたいです。ただ、Web フロントエンドの開発単体では導入しなくてよいと思っています。",
    link: "https://www.docker.com/",
    evaluation: 0,
    tags: [],
  },
  {
    name: "Open API",
    summary:
      "以前のインターンでスキーマ駆動開発を行って以来、お世話になってます。ドキュメントを書くことを強制させることができるのでスキーマ駆動開発は好きです。",
    link: "https://www.openapis.org/",
    evaluation: 0,
    tags: [],
  },
];
