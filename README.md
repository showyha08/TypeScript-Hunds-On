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

# バージョンが表示されたらOK
$ Version 4.8.4
```

### トランスコンパイル

tsc コマンドは、TypeScript のトランスコンパイラ本体。
これを使って TypeScript を JavaScript へ変換する。

```
tsc sample.ts
```
