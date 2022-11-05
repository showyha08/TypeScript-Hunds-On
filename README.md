# TypeScript-Hunds-On

## 環境構築

JavaScript エンジンプログラムと npm が必要。
Node.js(npm 同梱)をダウンロード
https://nodejs.org/ja/download/

### TypeScript のインストール

```
$ npm install typescript -g
```

### バージョン確認

```
$ tsc --V

#バージョンが表示されたらOK
$ Version 4.8.4
```

### トランスコンパイル

tsc コマンドは、TypeScript のトランスコンパイラ本体。
これを使って TypeScript を JavaScript へ変換する。

```
tsc sample.ts
```

### スクリプト実行

コンソールに実行結果が出力される

```
node sample.js
```

### npm の設定ファイルの作成

package.json が作成される

```
npm init -y
```

### TypeScript をプロジェクトに組み込む

```
npm install typescript @types/node --sage-dev
```

### Typescript の設定ファイル作成

tsconfig.json が作成される

```
tsc --init
```

### Webpack の設定ファイル作成

```
npm install webpack ts-loader @webpack-cli/generators
```

### Webpack-CLI で初期化

```
 npx webpack-cli init
```

### webpack.config.js

| name      | 説明                   |
| --------- | ---------------------- |
| entry     | 最初に呼ばれるファイル |
| output    | 出力先                 |
| devServer | 開発サーバ             |
| plugins   | プラグイン管理         |
| resolve   | 処理するスクリプト対象 |

### アプリケーションをビルド

```
npm run build
```

### 開発サーバで実行

```
npm run serve
```
