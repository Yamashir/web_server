// fsのインポート
const fs = require('fs');

const person = {
    name: "Mike",
    age: 20
}

// 読み込みをする関数
const read = function(){
    fs.readFile("./sample.json", "utf8", function(err, data){
        const person = JSON.parse(data);    // テキストからオブジェクトに復元
        console.log(person.name);
    })
}

// 書き込みをする関数
const write = function(){
    fs.writeFile("sample.json", JSON.stringify(person), function(){     // オブジェクトからテキストに変換
        console.log("書き出し完了");
    })
}

// 複数エクスポートする場合：JSON形式で渡す
module.exports = {
    read: read,
    write: write,
}