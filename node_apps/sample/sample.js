// helper.jsからインポート
const{read, write} = require("./helper");

console.log("start");

// 引数
const request = process.argv[2];

// 引数：readのときはsample.txtを表示
if(request === "read"){
    read();
// 引数：writeのときはsample.txtに書き込み
} else if(request === "write"){
    write();
// 引数なしのときはエラー
} else{
    console.error("ERROR : readまたはwriteの引数を入れてください");
}

console.log("end");

// (err, data) => ：アロー関数
// fs.readFile("./sample.txt", "utf8", (err, data) => {
//     console.log(data);
// })


