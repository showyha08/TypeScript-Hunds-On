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
// Readonly<型>
// <>は総称型
type data = [string ,number]
type reqData = Readonly<data>

const hoge:data = ["taro",12]
const fuga:reqData = ["jiro",13]

hoge[0] = "tarotaro"
fuga[0] = "saburo" //Cannot assign to '0' because it is a read-only property.

```

### シンボル
すべての値がユニークであることが保証されている型

```

// 変数 = Symbol (値)
// typeof では[symbol]となる
// 自分自身以外に等しい値のものが存在しない

```
const a1:string = "ok"
const a2:string = "ok"

console.log(a1==a2)
console.log(a1===a2)

const b1:unique symbol = Symbol("ok")
const b2:unique symbol = Symbol("ok")

console.log(b1==b2)
console.log(b1===b2)

//This condition will always return 'false' since the types 'typeof b1' and 'typeof b2' have no overlap.
```

## Chapter3

### 関数

```
function hello(name:string){
  //
}

function hello(name:string): string{
  //
}
```

### 複数の値を戻す

```
function hello(name:string):[price:number,tax:number]{

}
// 戻り値をそれぞれ変数代入できる
let [変数1,変数2,...] = 関数()

//sample
function calcTax(price:number):[price:number, tax:number]{
    const p = price/1.1
    const t = price -p
    return[p,t]
}

function printTax (price:number):void{
    const [pr,tx] = calcTax(price)
    console.log(price+"本体価格:" + pr + "、税"+tx)
}

printTax(2750)
printTax(3080)
```

### 引数に条件式をつかう

```
//function 名前 (型1|型2...){}

function printPerson(id:number | string name:string,age:number):void{
    switch (typeof(id)){
        case 'string':
        console.log('your id is "' + id + '('+ age + ')' )
        break
        case 'number'
        console.log("No," + id)
        break
        default:
        console.log('wrong id ...')
    }
}

printPerson(10,"taro",39)
printPerson('flower',"hanako",28)
```

### オプション引数

オプションは null 許容型。
関数の引数に使うことで、省略できる引数を作ることができる。
関数の中では３項演算子で null である可能性を考えてコーディングする・

```
//let 変数 = 引数 ? 引数 : 代わりの値

function printPerson(name?:string , age?number):void{
    const nameval = name ? name : "no-name"
    const ageval = age ? String(age) : '-'
    console.log('Name:' + nameval + ' (' + ageval + ')')
}
printPerson("taro",39)
printPerson("taro")
printPerson()
```

### 初期値による null 対応

```
function printPerson(name:string = 'no-name', age:number = -1 ):void{
    console.log('Name:' + name + ' (' + age + ')')
}
```

### 可変長引数

```
const f = (...data:number[]):number =>{
    let total = 0;
    for(let i of data ){
        total += i
    }
    return total
}

console.log(f(1,2,3,4,5))
```

### 無名関数

```
function (引数): 戻り値{}

const f = function(name : string):void {
  console.log("Hello, " + name + "!")
}

f("taro")
```

### アロー関数

```
// (引数): 戻り値=>実行する処理
// const f = アロー関数
// (name:string):void =>
const f = (name : string):void => {
  console.log("Hello, " + name + "!")
}

f("taro")
```

### 関数は、値である

typeof で調べると"function"となる

### function とアロー関数の違い

```

//これはエラー
hello("taro")
hello("HmacKeyGenParams")

const hello = (name:string)=>{
    console.log("Hello, "+ name);
}

// これはOK
hello("taro")
hello("HmacKeyGenParams")

function hello(name:string):void{
console.log("Hello, "+ name);
}

```

### 内部関数

```
const f = (n:number){
    const inF = (n:number):void=>{
        console.log("value:" + n)
    }
    let total = 0
    for (let i =1;i<=n;i++){
        total += i
        inF(total)
    }
}
f(10)
```

### 引数に関数を使う

引数の時は大文字 Function なので注意

```
const func = (n:number,f:Function):void=>{
    let res = f(n)
    console.log("Result:" + res)
}

const double = (n:number)=> n* 2
const total = (n:number)=> {
    let total = 0
    for(let i = 1;i<=n;i++){
        total += i
    }
    return total
}

const num = 100
func(num,double)
func(num,total)
```

### 1 行だけの計算式

1 行しかない場合はシンプルにかける

```
const double =(num:number) => num*2
```

### 関数の型

引数と戻り値まで指定した関数の型

```
// number の値を引数に持ち、numberかstringが戻り値の関数をfに設定するようになった
// ただ、Functionよりも細かく関数の具体的な内容を設定できる
consst func = (n:number, f:(n:number)=>number|string):void=>{
  let rest= f(n)
  console.log("Result:" + res)
}
```

### 数値とテキストの関数を引数にする

```
const func = (n:number, f(n:number)=>number|string):void=> {
  let ret = f(n)
  console.log("Result: "+ res)
}

const double = (n:number):number =>n*2
const word = (n:number):string => {
    const w = ['0','1',"2","3"]
    const s = String(n)
    let res:string [] = []
    for(let i = 0;i< s.length;i++){
        let c = s.charAt(i)
        res.push(w[Number(c)])
    }
    return res.join("")
}

const num = 1230
func(num,double)
func(num,word)

```

### 戻り値に関数を使う

関数そのものを引数に指定したり、戻り値として使ったりする関数を高階関数とよぶ。

```
const f = (tax:number):(n:number)=>number =>{
    return (n:number) => n * (1 + tax)
}

const f1 = f(0.1)
const f2 = f(0.08)

const price = 123400
console.log(f1(price))
console.log(f2(price))
```

### クロージャー

定義された環境を保ち、その中で動く関数。関数閉包。

```
const f = (n:number):() => number => {
    let count:number = 0
    return ():number => {
        count += n
        return count
    }
}

const f1 = f(1)
const f2 = f(2)
const f3 = f(3)

for (let i = 0;i< 10; i++){
    console.log(f1()+ '\t' + f2() + '\t' +f3())
}
```

### エラーと例外

```
const f = (arr?:any[]):void => {
    let res = 'Array: '
    for ( let i of arr) {
        res += String(i) + '\t'
    }
    console.log(res)
}

f(['ok','NG'])
f([10,20,30])
f() // arr is not iterable
```

### try 構文を使う

```
try {
   // 例外処理
} catch(e) {
    // 例外発生時の処理
} finally {
    // 構文終了の処理
}
```

### 例外を try で処理

```
const f = (arr?:any[]):void => {
    let res = 'Array: '
    for (let i of arr) {
        res+= String(i)+ '\t'
    }
    console.log(res)
}

try {
    f(['ok','NG'])
    f([10,20,30])
    f()
} catch(e) {
    console.log(e)
}
```

### 例外を発生させる関数

```
const f = (n:number):[number,Error?] => {
  if (n<0){
    return [n, Error("負の値です。")]
  }
  let total =0
  for (let i = 1; i<=n ;i++)
    total += i
  return [total]
}


```

### Error を返す関数

```
const f = (n:number):[number , Error?] {
  if (n<0){
    return [n, Error("負の値です")]
  }
  let total = 0
  for (let i = 1;i<=n;i++)
  total+=i
  return[total]
}

let [res1,err1] = f(100)
if(err1 == undefined)
    console.log(res1)
else console.log(res1)

let[res2,err2] = f(-100)
if(err2 == undefined)
    console.log(res2)
else console.log(err2)

```

### 例外を発生させる関数

```
const f = (n:number) : number => {
  if(n<0){
    throw Error("負の数です")
  }
  let total = 0
  for (let i = 1;i<=n;i++)
    total+=i
    return total

}

let re1 = f(100)
console.log(re1)
let re2 = f(-100)
console.log(re2)
```

### try で例外を補足する

```
const f = (n:number):number => {
    if (n<0){
        throw Error("負の数です")
    }

    let total =0
    for (let i = 1;i<=n;i++)
        total+=i
    return total
}

try {
    let re1 = f(100)
    console.log(re1)
    let re2 = f(-100)
    console.log(re2)
}catch(e){
       console.log(e)
}
```

### 総称型(ジェネリクス) について

数値を引数で渡したら数値の結果を返し、テキストを渡したらテキストを返すような関数

```
// function 関数<T> (引数) : 戻り値
// function 関数<T> (引数: T) : T

function getRnd<T> (values: T[]): T {
    const r = Math.floor(Math.random() * values.length)
    return values[r]
}

const data1 = [0,2,4,6,8,10]
const data2 = ["グー","チョキ","パー"]
const data3 = [true ,false]

for (let i = 0;i< 10 ;i++){
    const re1 = getRnd(data1)
    const re2 = getRnd(data2)
    const re3 = getRnd(data3)
    const res = re1 + '(' + typeof(re1) + ')\t'
    + re2 + '(' + typeof(re2) + ')\t'
    + re3 + '(' + typeof(re3) + ')\t'
    console.log(res)
}
```

### ジェネレータと遅延評価

呼び出すごとに数字をカウントしていく関数

```
// function * 名前 (引数) {
//    yield 値
// }

function* fibo(n:number) {
    let n1 = 0
    let n2 = 1
    for (let i = 0; i<=n+3;i++){
        yield n1
        let n3 = n1 +n2
        n1 = n2
        n2 = n3
    }
}

const n = 10
let fb = fibo(n)
for (let i=0; i<=n + 3 ;i++){
    let ob = fb.next()
    console.log(ob.value)
}

```

### 非同期処理と Promise

```
//  function 関数名 (引数) : Promise　{
//    return new Promise ((関数) => {
//        関数()
//    })
//  }

//function 関数名(引数) : Promise {
//  return <Promise>
//}

const f = (n:number, d:number):Promise<number> => {
    console.log("start:" + n)
    return new Promise((f)=> {
        let total =0
        for (let i = 1;i<=n;i++)
            total+=i
        setTimeout(
            ()=>{
                f(total)
            },d )
    })
}

const cb = (n:number)=> {
    console.log("result:" + n)
}

f(10,300).then(cb)
f(100,200).then(cb)
f(1000,100).then(cb)

console.log("do something...")

```

### コンソールプログラム

Node.js の引数は、process.argv にまとまっている

```
process.argv[0] = nodeコマンドのパス
process.argv[1] = スクリプトファイルのパス
process.argv[2]以降 = コマンド実行時の引数
```

## オブジェクト

### オブジェクトの基本

```
const person = {
    name:"taro",
    age:39,
    print:function():void {
        console.log(this.name+ '('+ this.age + ')')
    }
}

person.print()
//プロパティ
person.name = 'hanako'
person.age = 28
person.print()

//必要に応じて追加していくケースに便利
const person = Object()
person.name = 'hanako'
person.age = 28
person.print = function():void {
    console.log(this.name + '(' + this.age + ')')
}
```

### ファクトリ関数

```
// ファクトリ関数について
function Person(n:string, a:number):{
    name:string, age:number, print:()=>void} {
        return {
            name:n,
            age:a,
            print: function(){
                console.log(this.name + '(' + this.age + ')')
            }
        }
    }
}

const taro = Person('taro',39)
const hana = Person('hanako',28)
taro.print()
hana.print()

// コンストラクタ関数（JSの場合）
// thisの扱いが変わっているのでTypescriptでは動かない
function Person(n,a) {
    this.name = n;
    this.age = a;
    this.print = function() {
        console.log(this.name+ '('+this.age+')');
    }
}
```

### オブジェクトを引数に使う

```
//オブジェクトを引数に渡す時は参照になる
type person  = {name:string,age:number}

function setData(ob:person,n:string,a:number):person {
    ob.name = n
    ob.age = a
    return ob
}

const ob1:person = {name:'taro',age:39}
const ob2:person = setData(ob1,'hanako',28)

console.log(ob1)
console.log(ob2)
// 同じ結果になる
// [LOG]: {
//  "name": "hanako",
//  "age": 28
//}

```

#### 参照について

オブジェクトは、変数に代入される時、そのオブジェクトそのものではなく、オブジェクトの参照が設定されます。３章とは、オブジェトを示すための値です。関数を呼び出したおき、その引数には変数 ob1 のおぬジェクトの参照が渡されます。つまり、ob1 に設定されているオブジュエクトを示す値がわたされるのです。そしてその中で ob.name = n などの操作をすると、引数に渡される「オブジェクトを示す値」をもとに、その示す先のオブジェクトのプロパティを操作します。

つまり、オブジェクトは引数で渡されるとき、オブジェクトが複製されて渡されるのではなく、同じオブジェクトを示す値が渡され、オブジェクトを操作することになるのです。
、ここでは引数について説明をしましたが、「参照が渡される」というのは変数全般の話です。
従って、変数から別の変数にオブジェクトを代入するような場合も同じです。オブジェクトが代入された変数を別の変数に代入すると、２つの変数は同じオブジェクトを参照します。

#### type によるオブジェクトの型エイリアス

```
type person = {name:string, age:number}
// これがあるとあるといちいち{name:string,age:number}と書かなくて良くなる
```

### オブジェクトの分割代入

```
type person = {name:{first:string,second:string},age:number}

const ob1:person = {name:{first:'taro',second:'yamada'},age:39}
const first = ob1.name.first
const second = ob1.name.second
const age =ob1.age

console.log(first + "-" + second + '::' + age)

```

```

//分割代入を使うと・・・
type person = {name:{first:string,second:string},age:number}

const ob1:person = {name:{first:'taro',second:'yamada'},age:39}
const {name:{first,second},age} = ob1

console.log(first+'-'+second+'::' + age)
```

```
//一部を取り出すこともできる
const {name:{first}} = ob1
console.log(first)

// こうはかけない
// const {first,second} = ob1
```

### プロパティのオプションと Readonly

```
type person= {readonly name:string, mail?:string, age?:number ,print:()=>void}

const ob1:person = {
    name:'taro',
    age:39,
    print:function():void{
        console.log(this.name + ':' + this.age)
    }
}

const ob2:person = {
    name:'hanako',
    mail:'hanako@flower',
    print:function():void{
        console.log(this.name + ':' + this.mail)
    }
}

// ob1.name = "Taro"

ob1.print()
ob2.print()
```

### クラスノ利用

・JavaScript ではプロトタイプベース
・他の言語ではクラスベースオブジェクト指向

```
class 名前 {
  プロパティ:値
  プロパティ:値
  メソッド：戻り値
}

///インスタンス
変数= new クラス()
```

```
class Person {
    name:string = 'no-name'
    mail?:string
    age?:number
    print():void{
        const m1:string = this.mail? this.mail:'no-mail'
        const ag:number = this.age ? this.age : -1
        console.log(this.name + '(' + m1+','+ag+')')
    }
}

const taro = new Person()
taro.name = 'taro'
taro.mail = 'taro@yamada'
taro.age = 39

taro.print()
```

### コンストラクタ

```
class Person {
    name:string = 'no-name'
    mail:string
    age:number

    constructor(name:string, mail:string = 'no-mail',age:number = -1){
        this.name= name
        this.mail=mail
        this.age= age
    }

    print():void {
        console.log(this.name + '(' + this.mail+','+this.age+')')
    }
}

const taro = new Person ('taro','taro@yamada',39)
const hanako = new Person('hanako','hanako@flow')
const sachiko = new Person('sachiko')

taro.print()
hanako.print()
sachiko.print()
```

### インスタンスのクラスを調べる

```
// これはobjectが返される
type hoge = {name:string}
const ob1:hoge = {name:"huga"}

console.log(typeof(ob1))

// 特定のクラスのインスタンス化を確認する
// インスタンス　instanceof クラス

// インスタンスのクラス名をえる
インスタンス.constructor.name

// クラスの名前を得る
// プロパティにnameがあっても問題ない。プロパティはインスタンスにのみ存在するのでクラスには存在しない
クラス.name

```

```
class Person {
    name:string = 'no-name'
    mail:string
    age:number

    constructor(name:string, mail:string = 'no-mail',age:number = -1){
        this.name= name
        this.mail=mail
        this.age= age
    }

    print():void {
        console.log(this.name + '(' + this.mail+','+this.age+')')
    }
}

const taro= new Person('taro','taro@yamada',39)
const hanako = new Person('hanako','hanako@flowe')
console.log(taro instanceof Person === hanako instanceof Person === true)

console.log(taro.constructor.name)
console.log(hanako.constructor.name)
console.log(Person.name)
console.log(hanako.name) //hanako
```

### クラスの継承

```
//class 新しいクラス extends 継承するクラス{}

class Person {
    name:string = 'no-name'
    mail:string
    age:number

    constructor(name:string, mail:string = 'no-mail',age:number = -1){
        this.name= name
        this.mail=mail
        this.age= age
    }

    print():void {
        console.log(this.name + '(' + this.mail+','+this.age+')')
    }
}

// enumは enum School{ junior,juniorHigh, high,other}でも良いが、console.logでtextに変換されるときに整数になってしまうのでこのようにする
enum School {
    junior = 'junior',
    juniorHigh = 'juniorHigh',
    high = 'high',
    other = 'other'
}

class Student extends Person {
    school?:School
    grade?:number

    constructor(name:string,school:School,grade:number) {
        //スーパークラスのコンストラクタを呼び出す
        super(name)
        this.school = school
        this.grade = grade
        switch(school) {
            case School.junior:
            this.age = 6 * this.grade;break
            case School.juniorHigh:
            this.age = 12 + this.grade;break
            case School.high:
            this.age = 15 * this.grade;break
            default:
            this.age = -1
        }
    }
}

const taro = new Person('taro','taro@yamada',39)
const hanako = new Student('hanako', School.high,2)

taro.print()
hanako.print()

```

### メソッドのオーバーライド

```
class Person {
    name:string = 'no-name'
    mail:string
    age:number

    constructor(name:string, mail:string = 'no-mail',age:number = -1){
        this.name= name
        this.mail=mail
        this.age= age
    }

    print():void {
        console.log(this.name + '(' + this.mail+','+this.age+')')
    }
}

// enumは enum School{ junior,juniorHigh, high,other}でも良いが、console.logでtextに変換されるときに整数になってしまうのでこのようにする
enum School {
    junior = 'junior',
    juniorHigh = 'juniorHigh',
    high = 'high',
    other = 'other'
}

class Student extends Person {
    school?:School
    grade?:number

    constructor(name:string,school:School,grade:number) {
        //スーパークラスのコンストラクタを呼び出す
        super(name)
        this.school = school
        this.grade = grade
        switch(school) {
            case School.junior:
            this.age = 6 * this.grade;break
            case School.juniorHigh:
            this.age = 12 + this.grade;break
            case School.high:
            this.age = 15 * this.grade;break
            default:
            this.age = -1
        }
    }

    print():void{
        let gd:string = this.grade ? String(this.grade) : '-'
        switch(this.grade){
            case 1:gd += 'st'; break
            case 2:gd += 'nd';break
            case 3:gd += 'rd';break
            default:gd += 'th'
        }
        console.log(this.name + '('+ this.school +' school:' + gd +' grade')
    }
}

const taro = new Person('taro','taro@yamada',39)
const hanako = new Student('hanako', School.high,2)

taro.print()
hanako.print()
```

### アクセス修飾子

| アクセス修飾子 | 説明                               |
| :------------- | :--------------------------------- |
| public         | 外部から自由にアクセスできる。     |
| protected      | クラスか、サブクラスから利用できる |
| private        | クラス内のみ                       |

```
class Person{
  protected name:string = 'no-name'
  private mail:string
  public age:number
  constructor(name:string,mail:string='no-mail',age:number=-1){
    this.name = name
    this.mail = mail
    this.age = age
  }

  print():void{
    console.log(this.name + '(' + this.mail + ',' + this.age + ')' )
  }
}

enum School {
    junior = 'junior',
    juniorHigh = 'juniorHigh',
    high = 'high',
    other = 'other'
}

class Student extends Person {
    school?:School
    grade?:number

    constructor(name:string,school:School,grade:number) {
        super(name)
        this.school = school
        this.grade = grade
        switch(school){
            case School.junior:
            this.age = 6 + this.grade; break
            case School.juniorHigh:
            this.age = 12 + this.grade; break
            case School.high:
            this.age = 15 + this.grade; break
            default:
            this.age=-1
        }

     //this.name = "花子" //ok
     //this.mail = "hanako@mail" //エラー
     //this.age  = 39 //ok

    }

    print():void{
        let gd:string = this.grade ? String(this.grade): '-'
        switch(this.grade){
            case 1: gd+= 'st';break
            case 2: gd+='nd';break
            case 3: gd += 'rd'; break
            default: gd +='th'
        }
        console.log(this.name+ '('+ this.school + ' school: ' + gd + ' grade)')
    }
}

const taro = new Person('taro','taro@yamada',39)
const hanako = new Student('hanako', School.high,2)
//hanako.name = "花子" //エラー
//hanako.mail = "hanako@mail" //エラー
//hanako.age  = 39 //ok

taro.print()
hanako.print()
```
