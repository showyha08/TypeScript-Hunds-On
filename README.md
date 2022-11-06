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

### プレイグラウンド

Web で気軽に TypeScript を試せる
https://www.typescriptlang.org/play

## 型

### 型変換

テキストを数値に変換するときは、+文字列

```
let x:string;
x = "123"
let y:number;
y = 456;
y = y + +x; //579
```

### 型の作成

```
Number( 値 )
String( 値 )
```

### 変更不可の配列

```
const data1:number[] = [10,20,30]
let data2:readonly number[] = [10,20,30]

//data1はOK
data1[0] = 100

//data2はErrorとなる
// Index signature in type 'readonly number[]' only permits reading.
data2[0] = 100

```

### 配列のループ

for...in と for...of があるが、配列は for of を使う

```
const data1:number[] = [10,20,30]
let total1 = 0
for (let i of data1){
    total1+=i
}
```

### 配列の操作

```
// 先頭要素追加
配列.unshift(値)
// 先頭要素削除
変数 = 配列.shift()
// 最後要素追加
配列.push(値)
// 配列最後削除
変数 = 配列.pop()
```

### タプル型

配列は基本的に同じ型の値を保管する。
異なる型の値を保管したい場合はタプル型を使う。

```
変数: [型1,型2....]

// ok
let me:[number,string] = [12,"hoge"]

// error
// Type 'string' is not assignable to type 'number'.
let you:[number,number] = [12,"hoge"]
```

### enum 型

新しい型を定義。
多数の値から一つを選びたいときにつかう。

```
enum janken {goo ,choki, paa}
const you = janken.goo

switch (you){
    case janken.goo
    console.log("あいこ")
    break
    case janken.choki
    console.log("まけ")
    break
    case janken.paa
    console.log("かち")
    break
}

```

### 型エイリアス

型(string や number)が何を示しているかわかりやすくできる

```
type name = string
type age = 10

let me:[name,age] = ["たろ",10]
let you:[age,name] = [10,"じろう"]

console.log(me)
con

sole.log(you)
```

### type で型定義

タプル型に型エイリアスを使う

```
type name = string
type age = number
type mail = string
type human = [name,age,mail]

const taro:human = ["たろ",10,"hoge@gmail.com"]
const jiro:human = ["じろ",12,"ge@gmail.com"]
const saburo:human = ["さぶろ",1,"oge@gmail.com"]

const data:human[] = [taro,jiro,saburo]
for (let i of data){
    console.log(i)
}
```

### リテラル型

特定の値しかない型

```
type a = "ok"

type hello = "hello"
type bye = "bye"
type name = string
const taro:name = "taro"
const msg1:hello = "hello"
// const msg1:hello = "hell"
// Type '"hell"' is not assignable to type '"hello"'.

console.log(taro+", "+msg1)
```

### 条件型(Conditional Types)

リテラル型は条件型と組み合わせて使うことが多い.
値に対して処理を行うときに保管されているのがどういう型なのか確認する必要がある。

```
// type 型名 = 型1 | 型2 | ....
// type id = number | string

type msg = "hello" | "bye"
type name = string
const taro:name = "taro"
let msg1:msg = "hello"
msg1 = "bye"
console.log(taro+", "+msg1)
```

### 型のチェック

string 型で返される

```
//typeof (値)

type id = string | number
const idA:id = "taro"
const idB:id = 123

switch(typeof(idA)){
    case "string"
    console.log("stringだよ")
    break
    case "number"
    console.log("numberだよ")
    break
    default:
    console.log("わからんよ")
}

### ユーティリティ型
変数に性質を付加する特殊な型がある。それをユーティリティ型という。
```

// Readonly 読み取り専用のユーティリティ型
type data = [string ,number]
type reqData = Readonly<data>

const hoge:data = ["taro",12]
const fuga:reqData = ["jiro",13]

hoge[0] = "tarotaro"
fuga[0] = "saburo" //Cannot assign to '0' because it is a read-only property.

```



``


```
