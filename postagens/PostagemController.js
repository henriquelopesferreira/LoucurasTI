// const express = require("express");
// const router = express.Router();
// const Postagem = require("./Postagem");
// const Category = require("../categories/Category")
// const slugify = require("slugify")

// router.get("/admin/postagens", (req,res) => {
//     Postagem.findAll(   
        
//     ).then(postagem =>{
//         res.render("./admin/postagens/index", {postagem, postagem});
//     })

// }); 

// router.get("/admin/article/new", (req,res) => {
//     Category.findAll().then(categories => {
//         res.render("./admin/postagens/new",{categories: categories});    
//     })
    
// }); 

// router.post("/postagens/save", (req,res) =>{
//     var title = req.body.title;
//     var body  = req.body.body;
//     var category = req.body.category;

//     Article.create({

//         title: title,
//         slug: slugify(title),
//         body: body,
//         categoryId:category

//     }).then(() =>{
//         res.redirect("/admin/postagens");
//     })
// })

// router.post("/postagens/delete", (req, res)=>{
//     var id = req.body.id;
//     if(id != undefined){
//         if (!isNaN(id)) {
//             Article.destroy({
//                 where: {
//                     id: id
//                 }
//             }).then(()=>{
//                 res.redirect("/admin/categories");
//             });

//         }else{
//             res.redirect("/admin/postagens");
//         }
        
//     }else{
//         res.redirect("/admin/postagens");
//     }
// });

// module.exports = router;