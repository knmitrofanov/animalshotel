"use strict";

function loadHomePage(req, res) {
    let user = req.user
    let model = {
        content: "Animal Hotel"
    }

    res.render("index", { user, model});
}

module.exports = { loadHomePage };