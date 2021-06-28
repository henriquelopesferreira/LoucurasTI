const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const postagemController = require("./postagens/PostagemController")
const categoriesController = require("./categories/CategoriesController"); 
const articlesController = require("./articles/ArticlesController");

const Article = require('./articles/Article');
const Category = require("./categories/Category");

// View Engine
app.set('view engine','ejs')

//Static
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Database
connection
    .authenticate()
    .then(()=>{
        console.log("Conexão com o banco de dados efetuada com sucesso")
    }).catch((error)=>{
        console.log(error);
    });
//Rotas

app.use("/", postagemController);
app.use("/", categoriesController);
app.use("/", articlesController);

app.get("/",(req,res) =>{

    Article.findAll().then(articles => {
        res.render("index", {articles: articles});
    });
});

app.get("/slug", (req,res) => {
    var slug = req,params,slug;
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if (article != undefined) {
            res.render("");            
        } else {
            res.redirect("/");
        }
    }).catch( err => {
        res.redirect("/")
    })
})

app.listen(3000, ()=>{
    console.log("o servidor está rodando na porta 3000");
});


