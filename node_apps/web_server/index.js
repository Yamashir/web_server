// webサーバーの構築

const exp = require("constants")
const express = require("express")
const path = require("path")
const app = express()

// req.body.answerのbodyを使えるようにする
app.use(express.urlencoded({extended: false}))

// web_serverの階層の中のpublicを指定する 
// publicフォルダ内にstaticのファイルがあるということを明示している
// →public内のファイルを参照できる
app.use(express.static(path.join(__dirname, "public")))

// "/" : トップページ
// 「localhost:3000」とインターネットで入力すると、
// トップページをリクエストされたらHello Worldと返す
// localhost : 自分のパソコンのこと。このパソコンがローカルの中でサーバーを走らせている
// サーバーを止める：TERMINALでCtrl+c
// app.get("/", function(req, res){
//     res.send("<h1>トップページ<h1>")
// })

// ブラウザ側から何かしらのフォームデータを受け取る際はpostリクエストを使う
app.post("/api/v1/quiz", function(req, res){
    const answer = req.body.answer  // ブラウザ側からのリクエストのanswerを受け取る
    if(answer === "2"){
        // res.send("<h1>正解！</h1>")
        
        // HTMLファイルにリダイレクトする
        res.redirect("/correct.html")
    }
    else{
        // res.send("不正解")
        res.redirect("/wrong.html")
    }
})


app.get("/api/v1/users", function(req, res){
    res.send({
        name: "Mike",
        age: 20,
    })
})

app.listen(3000, function(){
    console.log("RUNNING!!")
})