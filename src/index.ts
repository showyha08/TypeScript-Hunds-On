let msg: HTMLParagraphElement;

const html = `<h2><a id="title">This is message</a></h2>
<p>これはTypeScriptで表示したコンテンツです。</p>`;

window.addEventListener("load", () => {
  msg = document.querySelector("#msg");
  msg.innerHTML = html;
  const title: HTMLAnchorElement = document.querySelector("#title");
  title.href = "https://google.com/";
});

// let nickname: HTMLInputElement;
// let message: HTMLInputElement;
// let table: HTMLTableElement;
// const url = "https://messagetypescript-default-rtdb.firebaseio.com/boards.json";

// function doAction(): void {
//   const data = {
//     nickname: nickname.value,
//     message: message.value,
//     posted: new Date().getTime(),
//   };
//   sendData(url, data);
// }

// function doDelete(): void {
//   fetch(url, {
//     method: "DELETE",
//   }).then((res) => {
//     console.log(res.statusText);
//     getData(url);
//   });
// }

// function sendData(url: string, data: object) {
//   fetch(url, {
//     method: 'POST',
//     mode: 'cors',
//     headers: {
//       'content-Type':'application/json'
//     },
//     body:JSON.stringify(data)
//   }).then(res => {
//     console.log(res.statusText)
//     getData(url)
//   })
// }

// function getData(url: string) {
//   fetch(url).then(res => res.json()).then(re => {
//     let result = `<thead>
//     <tr><th>Message</th>
//     <th>Nickname</th><th>posted</th></tr>
//     </thead><tbody>`
//     let tb = ''
//     for (let ky in re) {
//       let item = re[ky]
//       tb = '<tr><td>' + item['message'] + '</td><td>'
//         + item['nickname'] + '</td><td>'
//         + new Date(item['posted']).toLocaleString()
//       +'</td></tr>' + tb
//     }
//     result += tb + '</tbody>'
//     table.innerHTML = result
//   })
// }

// window.addEventListener('load', () => {
//   message = document.querySelector('#message')
//   nickname = document.querySelector('#nickname')
//   table = document.querySelector('#table')
//   const btn: HTMLButtonElement = document.querySelector('#btn')
//   btn.onclick = doAction
//   const del: HTMLButtonElement = document.querySelector('#delete')
//   del.onclick = doDelete
//   getData(url)
// })

// // import { MyData } from "./lib";

// // const mydata = new MyData();
// // mydata.add("taro", 30);
// // mydata.add("hanako", 28);
// // mydata.print();

// // import { MemoryDB } from "../../../node_modules/aws-sdk/index";

// // let table: HTMLTableElement;
// // let message: HTMLInputElement;

// // function showTable(html: string) {
// //   table.innerHTML = html;
// // }

// // function doAction() {
// //   const msg = message.value;
// //   memo.add({ message: msg, date: new Date() });
// //   memo.save();
// //   memo.load();
// //   showTable(memo.getHtml());
// // }

// // function doInitial() {
// //   memo.data = [];
// //   memo.save();
// //   memo.load();
// //   message.value = "";
// //   showTable(memo.getHtml());
// // }

// // type Memo = {
// //   message: string;
// //   date: Date;
// // };

// // class MemoData {
// //   data: Memo[] = [];

// //   add(mm: Memo): void {
// //     this.data.unshift(mm);
// //   }

// //   save(): void {
// //     localStorage.setItem("memo_data", JSON.stringify(this.data));
// //   }

// //   load(): void {
// //     const readed = JSON.parse(localStorage.getItem("memo_data"));
// //     this.data = readed ? readed : [];
// //   }

// //   getHtml(): string {
// //     let html = "<thead><th>memo</th><th>date</th></thead><tbody>";
// //     for (let item of this.data) {
// //       html +=
// //         "<tr><td>" +
// //         item.message +
// //         "</td><td>" +
// //         item.date.toLocaleString() +
// //         "</td></tr>";
// //     }
// //     return html + "</tbody>";
// //   }
// // }

// // const memo = new MemoData();

// // window.addEventListener("load", () => {
// //   table = document.querySelector("#table");
// //   message = document.querySelector("#message");
// //   document.querySelector("#message");
// //   document.querySelector("#btn").addEventListener("click", doAction);
// //   document.querySelector("#initial").addEventListener("click", doInitial);
// //   memo.load();
// //   showTable(memo.getHtml());
// // });
