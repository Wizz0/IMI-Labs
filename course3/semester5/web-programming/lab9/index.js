const express = require('express')
const app = express()

app.use(express.static(__dirname+'/templates'))
app.set("view engine", "ejs")
app.set("views","./templates")

app.get("/",(req, res) => {
    res.render("main.ejs");
})

let obj = { email: "samgorokhov01@gmail.com", address: "г. Барселона, ул. Ленина, 1" }
app.get("/contacts", (req, res) =>{
    res.render("contacts.ejs", obj);
})

let obj2 = { name: "Семен", surname: "Кукурузов", group: "ИВТ-22-2" }
app.get("/about", (req, res) =>{
    res.render("about.ejs", obj2)
})


app.listen(3000)